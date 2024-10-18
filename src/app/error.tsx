"use client";

import Link from "next/link";

export default function Error({ error, reset }: any) {
  return (
    <>
      <h1>somethig went worng</h1>
      <h2>{error.message} </h2>
      <Link href="/">Back to Home</Link>
    </>
  );
}
