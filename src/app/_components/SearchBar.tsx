"use client";

import { FiSearch } from "react-icons/fi";
import { useSearch } from "../_contexts/SearchContext";

export default function SearchBar({ postData }: any) {
  const { search, setSearch, setSearchData }: any = useSearch();

  const searchResult = postData.filter((obj: any) =>
    `${obj.title.toLowerCase()} ${obj.body.toLowerCase()}`
      .split(" ")
      .includes(search)
  );

  const handleClick = function () {
    if (searchResult.length) setSearchData(searchResult);
  };

  const handleSubmit = function (e: any) {
    setSearch("");
    e.preventDefault();
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Type here..."
        className="border-black border-2 border-r-0 sm:py-1 px-2  rounded-l-md placeholder:text-md  text-md outline-none focus:shadow-md transition-all w-[80%] sm:max-w-md sm:flex-1"
      />
      <button
        className=" bg-yellow-500  sm:px-3 border-2 border-black  font-bold rounded-r-md"
        onClick={handleClick}
      >
        <p className="hidden text-xl sm:block">Search</p>
        <div className="sm:hidden px-2 py-1 text-2xl">
          <FiSearch />
        </div>
      </button>
    </form>
  );
}
