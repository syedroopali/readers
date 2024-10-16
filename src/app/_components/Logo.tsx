import Link from "next/link";
import Image from "next/image";

///////////////////////////////
import logo from "/public/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt="Readers one logo"
          placeholder="blur"
          className="w-8 sm:w-9 md:w-10"
        />
        <h1 className="capitalize text-2xl md:text-3xl font-black hidden sm:block">
          readers-one
        </h1>
      </div>
    </Link>
  );
}
