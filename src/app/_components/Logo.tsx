import Link from "next/link";
import Image from "next/image";

///////////////////////////////
import logo from "/public/Logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-3">
        <div className="w-8 sm:w-9 md:w-10">
          <Image
            src={logo}
            alt="Readers one logo"
            placeholder="blur"
            className="w-full"
          />
        </div>
        <h1 className="capitalize text-2xl md:text-3xl font-black hidden sm:block">
          readers-one
        </h1>
      </div>
    </Link>
  );
}
