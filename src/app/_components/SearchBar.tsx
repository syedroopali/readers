"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const data = [
  {
    title: "Abc",
    description: "My name is abc",
    id: 1,
  },
  {
    title: "2abc",
    description: "My name is abc",
    id: 1,
  },
  {
    title: "Xyz",
    description: "my name is xyz",
    id: 2,
  },
  {
    title: "Blog",
    description: "hy this is am blog",
    id: 1,
  },
  {
    title: "blog",
    description: "hy i am 2ndblog",
    id: 1,
  },
];

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const searchResult = data.filter((obj) =>
    `${obj.title.toLowerCase()} ${obj.description.toLowerCase()}`
      .split(" ")
      .includes(search)
  );

  const handleClick = function () {
    console.log(searchResult);
  };

  return (
    <div className="flex">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Type here..."
        className="border-black border-2 border-r-0 py-1 px-2  rounded-l-md placeholder:text-xl  text-xl outline-none focus:shadow-md transition-all flex-grow "
      />
      <button
        className=" bg-yellow-500 p-1 sm:px-3 border-2 border-black  font-bold rounded-r-md"
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
