import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Statistics() {
  return (
    <>
      <h1>Statistics</h1>
      <Link href="/">Dashboard</Link>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </>
  );
}
