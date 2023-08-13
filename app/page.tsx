import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="h-40 bg-red-600"></nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-600">
        <Link href="/dashboard">Dashboard</Link>
        {/* <UserButton afterSignOutUrl="/" /> */}
      </main>
    </>
  );
}
