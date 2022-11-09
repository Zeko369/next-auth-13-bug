"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    signIn("email", {
      email: e.currentTarget.email.value,
      redirect: true,
      callbackUrl: "/",
    }).finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Email address"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending link..." : "Send me a link!"}
      </button>
    </form>
  );
};
