"use client";

import React, { createContext, useContext, useState } from "react";

// The context containing the information the user has selected
interface IContext {
  type: string;
  questionTime: number;
  category: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setQuestionsTime: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<IContext>({
  type: "",
  questionTime: 0,
  category: "",
  setType: () => {},
  setQuestionsTime: () => {},
  setCategory: () => {}
});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [type, setType] = useState("");
  const [questionTime, setQuestionsTime] = useState(0);
  const [category, setCategory] = useState("");

  return (
    <AppContext.Provider
      value={{
        type,
        questionTime,
        category,
        setType,
        setQuestionsTime,
        setCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
