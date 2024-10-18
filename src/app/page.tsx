import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-auto w-full m-auto flex items-center justify-center  ">
        <Link
          href="/blog-post"
          className="text-3xl rounded-lg bg-yellow-200 p-4 border-2 border-black hover:bg-yellow-300 transition-all"
        >
          Click Me
        </Link>
      </div>
    </>
  );
}
