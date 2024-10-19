import Link from "next/link";

const navBarlinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/",
  },
  {
    text: "Contact Us",
    href: "/",
  },
  {
    text: "Login/Signup",
    href: "/",
  },
];

export default function NavBarLinks() {
  return (
    <>
      <ul className="text-md md:text-lg sm:flex sm:gap-4 md:gap-4 lg:gap-10 font-bold text-gray-700 first:border-t-2 sm:border-none">
        {navBarlinks.map((link) => (
          <li key={link.text}>
            <Link
              href={link.href}
              className="inline-block py-4 w-full text-center hover:bg-gray-100 border-b-2 sm:border-none 
          m-0.5 border-b-gray-300 transition-all"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
