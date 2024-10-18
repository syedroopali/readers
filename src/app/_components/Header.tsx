import Logo from "@/app/_components/Logo";
import NavBarMobile from "@/app/_components/NavBarMobile";
import SearchBar from "@/app/_components/SearchBar";
import { PostComments, Posts } from "@/app/_lib/PostData";

export default async function Header() {
  const postData = await Posts();
  const comments = await PostComments(1);

  return (
    <header className="shadow-md p-3 flex items-center h-14 justify-between sm:h-16 md:h-[4.5rem] md:p-6 sm:p-4 w-full fixed top-0 bg-white">
      <Logo />
      <NavBarMobile postData={postData} />
      <div className="hidden sm:block w-[60%]">
        <SearchBar postData={postData} />
      </div>
    </header>
  );
}
