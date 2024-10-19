"use client";

import Card from "@/app/_components/Card";
import { useSearch } from "../_contexts/SearchContext";

export default function BlogPostCards({ posts }: any) {
  const { setSearch, searchData, setSearchData, search }: any = useSearch();

  const handleClear = function () {
    setSearchData(null);
    setSearch("");
  };

  return (
    <>
      <div className="max-w-5xl m-auto bg-white shadow-md">
        {searchData && (
          <button
            className=" bg-yellow-300 inline-block  sm:px-3 border-2 border-black  font-bold mb-5"
            onClick={handleClear}
          >
            <p className="hidden text-xl sm:block">Clear</p>
            <div className="sm:hidden px-2 py-1 text-2xl"></div>
          </button>
        )}
        {searchData && (
          <h2 className="text-center sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4 md:mb-6">
            {`Found ( ${searchData.length} ) results out of - ${posts.length}`}{" "}
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items justify-items-center  gap-3 p-3">
          {searchData
            ? searchData.map((post: any) => (
                <Card postData={post} key={post.id} />
              ))
            : posts.map((post: any) => <Card postData={post} key={post.id} />)}
        </div>
      </div>
    </>
  );
}
