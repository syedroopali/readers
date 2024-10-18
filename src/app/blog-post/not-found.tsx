import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Sorry, This page not Found Please Try Again</h1>
      <Link href="/">Go Home</Link>
    </>
  );
}
