import Logo from "@/app/_components/Logo";
import NavBarMobile from "@/app/_components/NavBarMobile";
import NavBarLinks from "./NavBarLinks";

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

export default function Header() {
  // const postData = await Posts();

  return (
    <header className="shadow-md p-3 flex items-center h-14 justify-between sm:h-16 md:h-[4.5rem] md:p-6 sm:p-4 w-full fixed top-0">
      <Logo />
      <div className="flex-1 flex justify-end">
        <NavBarMobile />
        <ul className="hidden text-md md:text-lg lg:text-xl items-center sm:flex flex-1 justify-end gap-4 md:gap-6 lg:gap-12">
          {navBarlinks.map((link) => (
            <NavBarLinks href={link.href} text={link.text} key={link.text} />
          ))}
        </ul>
      </div>
      {/* <div className="hidden sm:block w-[60%]"></div> */}
    </header>
  );
}
