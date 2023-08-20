import Image from "next/image";
import { UserButton, SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="h-40 bg-red-600"></nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-600">
        <Link href="/dashboard">Dashboard</Link>

        <button>
          <UserButton afterSignOutUrl="/" />
          test
        </button>
        <button>Test</button>
      </main>
    </>
  );
}
