import { unstable_getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await unstable_getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <h1>Hello {session?.user?.email}</h1>;
}
