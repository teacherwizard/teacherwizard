import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Assignment({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Assignment {params.id}</h1>
      <Link href="/">Dashboard</Link>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </>
  );
}
