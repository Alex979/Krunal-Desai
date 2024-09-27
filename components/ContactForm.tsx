"use client";

import { useState } from "react";
import BodyText from "./BodyText";
import Image from "next/image";
import featherIconDark from "@/images/feather-icon-dark.png";

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email address is required");
      return;
    }
    if (!message.trim()) {
      setError("Message is required");
      return;
    }

    const response = await fetch("/api/send-message", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <form action={sendMessage}>
      <h1 className="text-2xl md:text-3xl font-bold leading-snug my-4 text-center">
        Let&apos;s Chat!
      </h1>
      <BodyText className="text-center">
        Use the contact form below, or send me an email at{" "}
        <a className="underline" href="mailto:krunal20079@gmail.com">
          krunal20079@gmail.com
        </a>
      </BodyText>
      <Image
        src={featherIconDark}
        width={150}
        alt="feather icon"
        className="mx-auto w-20 md:w-36 my-8"
      />
      <label className="block my-4">
        <p className="mb-1 font-bold">Name</p>
        <input
          className="border-slate-400 rounded border p-2 w-full"
          type="text"
          name="name"
        />
      </label>
      <label className="block my-4">
        <p className="mb-1 font-bold">Email</p>
        <input
          className="border-slate-400 rounded border p-2 w-full"
          type="email"
          name="email"
        />
      </label>
      <label className="block my-4">
        <p className="mb-1 font-bold">Message</p>
        <textarea
          className="border-slate-400 rounded border p-2 w-full"
          name="message"
          rows={5}
        />
      </label>
      <button
        type="submit"
        className="rounded bg-slate-600 text-stone-100 py-3 px-5 text-sm md:text-lg my-4 block w-full"
      >
        Submit
      </button>
    </form>
  );
}
