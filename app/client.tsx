"use client";

import { useSession } from "next-auth/react";

export const ClientSideSession = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <h2>Logged in: {session.user?.email}</h2>;
  }

  return <h2>Not logged in, click on any of the following links to login</h2>;
};
