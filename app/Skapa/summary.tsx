"use client";

import { useAppContext } from "@/contexts/AppContext";

export default function Summary() {
  const { questionTime, category } = useAppContext();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-between">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-8 mb-8">
          Summering
        </h1>
        <div className="bg-white p-4 rounded-md my-4">
          <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Längd: {questionTime === 15 ? "Kortare" : "Längre"}
          </h2>
        </div>
        <div className="bg-white p-4 rounded-md my-4 mb-8">
          <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Kategori: {category}
          </h2>
        </div>
      </div>
    </div>
  );
}
