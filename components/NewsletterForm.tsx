"use client";

import { useState } from "react";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      className="bg-gray-800 hover:bg-gray-600 transition-colors py-3 px-5 my-4 block rounded w-full text-white font-bold"
    >
      {pending ? (
        <svg
          aria-hidden="true"
          className="inline w-5 h-5 animate-spin fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      ) : (
        "Submit"
      )}
    </button>
  );
}

export default function NewsletterForm() {
  const [error, setError] = useState<string | null>(null);

  const subscribeToNewsletter = async (formData: FormData) => {
    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const email = formData.get("email") as string;

    if (!firstName.trim()) {
      setError("First name is required");
      return;
    }
    if (!lastName.trim()) {
      setError("Last name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    const response = await fetch("/api/newsletter-subscribe", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      action={subscribeToNewsletter}
      className="w-full max-w-xs md:max-w-md"
    >
      <input
        className="border-slate-300 border p-2 my-4 block rounded-md w-full"
        type="text"
        name="first_name"
        aria-label="First Name"
        placeholder="First Name"
      />
      <input
        className="border-slate-300 border p-2 my-4 block rounded-md w-full"
        type="text"
        name="last_name"
        aria-label="Last Name"
        placeholder="Last Name"
      />
      <input
        className="border-slate-300 border p-2 my-4 block rounded-md w-full"
        type="email"
        name="email"
        aria-label="Email Address"
        placeholder="Enter your Email"
      />
      <SubmitButton pending={false} />
      <p className="font-bold text-red-500 text-lg">{error}</p>
    </form>
  );
}
