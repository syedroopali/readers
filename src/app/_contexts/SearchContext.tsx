"use client";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});

const SearchProvider = function ({ children }: any) {
  const [search, setSearch] = useState([]);
  const [searchData, setSearchData] = useState(null);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, searchData, setSearchData }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = function useSearch() {
  const search = useContext(SearchContext);
  return search;
};

export { SearchProvider, useSearch };
