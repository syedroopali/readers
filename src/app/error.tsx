"use client";

import Link from "next/link";

export default function Error({ error, reset }: any) {
  return (
    <>
      <div className="w-full h-[85vh] flex items-center justify-center flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl font-bold capitalize">
          somethig went worng
        </h1>
        <h2 className="text-base sm:text-xl">{error.message}</h2>
        <Link
          href={"/"}
          className="inline-block bg-yellow-200 py-1  px-2 border border-gray-400 rounded-md hover:bg-yellow-300 font-bold transition-all"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
