"use server";

import { NextRequest } from "next/server";
import { Resend } from "resend";

interface NewsletterRequest {
  firstName: string;
  lastName: string;
  email: string;
}

function isNewsletterRequest(data: any): data is NewsletterRequest {
  return (
    data &&
    typeof data.firstName === "string" &&
    typeof data.lastName === "string" &&
    typeof data.email === "string"
  );
}

function isValidRequest(data: NewsletterRequest) {
  return (
    data.firstName.trim() &&
    data.lastName.trim() &&
    data.email.trim()
  );
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.json();
  if (!isNewsletterRequest(data) || !isValidRequest(data)) {
    return Response.json({ error: "Invalid arguments." }, { status: 400 });
  }

  const { error } = await resend.contacts.create({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    unsubscribed: false,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });

  if (error) {
    console.error(error);
    return Response.json({ error: "An internal error occurred." }, { status: 500 });
  }

  return Response.json({ success: true });
}
