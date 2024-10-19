import Logo from "@/app/_components/Logo";
import NavBarMobile from "@/app/_components/NavBarMobile";
import NavBarLinks from "./NavBarLinks";

export default function Header() {
  return (
    <header className="shadow-md p-3 flex items-center h-14 justify-between sm:h-16 md:h-[4.5rem] md:p-6 sm:p-4 w-full fixed top-0 bg-white z-50">
      <Logo />
      <div className="flex-1 flex justify-end">
        <NavBarMobile />
        <div className="hidden sm:block">
          <NavBarLinks />
        </div>
      </div>
    </header>
  );
}
