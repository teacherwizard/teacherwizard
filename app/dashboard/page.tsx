import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>
      <Link href="/dashboard/assignments">Assignments</Link>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </>
  );
}
