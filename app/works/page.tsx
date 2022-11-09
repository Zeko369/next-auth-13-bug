import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const wrapURL = (str: string) => {
    if (str.startsWith("http")) {
      return str;
    }

    return `https://${str}`;
  };

  const baseURL = wrapURL(process.env.VERCEL_URL || process.env.NEXTAUTH_URL || "");
  const res = await fetch(`${baseURL}/api/auth/session`, {
    cache: "no-store",
    headers: {
      cookie: cookies()
        .getAll()
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join(";"),
    },
  });

  const session = await res.json();
  if (!session?.user) {
    redirect("/login");
  }

  return <h1>Hello {session?.user?.email}</h1>;
}
