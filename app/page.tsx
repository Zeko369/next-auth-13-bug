import Link from "next/link";
import { ClientSideSession } from "./client";

export default function HomePage() {
  return (
    <div>
      <h1>NextAuth example unstable_getServerSession doesn't read session in RSC correctly</h1>
      <ClientSideSession />

      <Link href="/broken">Broken</Link>
      <br />
      <Link href="/works">Janky fetch but works</Link>
    </div>
  );
}
