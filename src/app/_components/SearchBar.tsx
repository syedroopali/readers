"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const dataObj = [
  {
    title: "Abc",
    body: "My name is abc",
    id: 1,
  },
  {
    title: "2abc",
    body: "My name is abc",
    id: 1,
  },
  {
    title: "Xyz",
    body: "my name is xyz",
    id: 2,
  },
  {
    title: "Blog",
    body: "hy this is am blog",
    id: 1,
  },
  {
    title: "blog",
    body: "hy i am 2ndblog",
    id: 1,
  },
];

export default function SearchBar({ postData }: any) {
  const [search, setSearch] = useState("");

  const searchResult = postData.filter((obj: any) =>
    `${obj.title.toLowerCase()} ${obj.body.toLowerCase()}`
      .split(" ")
      .includes(search)
  );

  const handleClick = function () {
    console.log(searchResult);
  };

  return (
    <div className="flex justify-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Type here..."
        className="border-black border-2 border-r-0 py-1 px-2  rounded-l-md placeholder:text-xl  text-xl outline-none focus:shadow-md transition-all w-[100%] "
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
    </div>
  );
}
