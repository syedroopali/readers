"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-auto max-w-7xl m-auto border-2 border-black flex items-center justify-center">
      <Link
        href={{
          pathname: "/blogPosts",
        }}
        className="text-3xl rounded-lg bg-yellow-200 p-4 border-2 border-black hover:bg-yellow-300 transition-all"
      >
        Lets Read
      </Link>
    </div>
  );
}
