"use client";

import { useState } from "react";

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
      <h1 className="text-4xl my-8">Let&apos;s Chat!</h1>
      <label className="block my-4">
        <p className="mb-1 font-bold">Name</p>
        <input
          className="border-slate-600 border p-2 w-full"
          type="text"
          name="name"
        />
      </label>
      <label className="block my-4">
        <p className="mb-1 font-bold">Email</p>
        <input
          className="border-slate-600 border p-2 w-full"
          type="email"
          name="email"
        />
      </label>
      <label className="block my-4">
        <p className="mb-1 font-bold">Message</p>
        <textarea
          className="border-slate-600 border p-2 w-full"
          name="message"
          rows={5}
        />
      </label>
      <button
        type="submit"
        className="border border-slate-600 hover:bg-slate-600 hover:text-stone-100 transition py-3 px-5 text-sm my-4 block"
      >
        Submit
      </button>
    </form>
  );
}
