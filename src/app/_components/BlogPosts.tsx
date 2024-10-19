"use client";

import Card from "@/app/_components/Card";
import { useSearch } from "../_contexts/SearchContext";

export default function BlogPostCards({ posts }: any) {
  const { setSearch, searchData, setSearchData }: any = useSearch();

  const handleClear = function () {
    setSearchData((_: string[]) => []);
    setSearch("");
  };
  return (
    <>
      <div className="max-w-5xl m-auto bg-white shadow-md">
        {searchData.length !== 0 && (
          <button
            className=" bg-yellow-500 hover:bg-yellow-300 text-md sm:text-lg  border-2 border-black  font-bold mb-5 flex items-center justify-center m-auto px-4 sm:px-6 transition-all rounded-md py-1"
            onClick={handleClear}
          >
            CLEAR
          </button>
        )}
        {searchData.length !== 0 && (
          <h2 className="text-center sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4 md:mb-6">
            {`Found ( ${searchData.length} ) results out of - ${posts.length}`}{" "}
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items justify-items-center  gap-3 p-3">
          {searchData.length !== 0
            ? searchData.map((post: any) => (
                <Card postData={post} key={post.id} />
              ))
            : posts.map((post: any) => <Card postData={post} key={post.id} />)}
        </div>
      </div>
    </>
  );
}
