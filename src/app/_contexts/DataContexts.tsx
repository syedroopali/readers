import { createContext, useContext } from "react";

const DataContext = createContext({});

const DataProvider = function ({ children }: any) {
  return (
    <DataContext.Provider
      value={{
        title: "abc",
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = function () {
  return useContext(DataContext);
};
