import Link from "next/link";
export default function NavBarLinks({ text, href }: any) {
  return (
    <>
      <li className="w-full">
        <Link
          href={href}
          className="inline-block py-4 w-full text-center hover:bg-gray-100 border-b-2 border-t-2
          m-0.5 border-b-gray-300 transition-all"
        >
          {text}
        </Link>
      </li>
    </>
  );
}
