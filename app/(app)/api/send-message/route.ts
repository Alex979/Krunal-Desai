"use server";

import { NextRequest } from "next/server";
import { Resend } from "resend";

interface MessageRequest {
  name: string;
  email: string;
  message: string;
}

function isMessageRequest(data: any): data is MessageRequest {
  return (
    data &&
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.message === "string"
  );
}

function isValidRequest(data: MessageRequest) {
  return data.name.trim() && data.email.trim() && data.message.trim();
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.json();
  if (!isMessageRequest(data) || !isValidRequest(data)) {
    return Response.json({ error: "Invalid arguments." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: `${data.name} <contact@krunaldesai.com>`,
    to: ["krunal20079@gmail.com"],
    reply_to: data.email,
    subject: "New message from krunaldesai.com",
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  });

  if (error) {
    console.error(error);
    return Response.json(
      { error: "An internal error occurred." },
      { status: 500 }
    );
  }

  return Response.json({ success: true });
}
