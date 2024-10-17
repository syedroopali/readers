import Logo from "@/app/_components/Logo";
import NavBarMobile from "@/app/_components/NavBarMobile";
import SearchBar from "@/app/_components/SearchBar";

export default function Header({ children }: any) {
  return (
    <header className="shadow-md p-3 flex items-center justify-between relative h-14 sm:h-auto sm:p-4">
      <Logo />
      <NavBarMobile />
      <div className="hidden sm:block w-[60%]">
        <SearchBar />
      </div>
    </header>
  );
}
