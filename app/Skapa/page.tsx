"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import ChooseQuestionLength from "./chooseQuestionLength";
import ChooseQuestionCategory from "./chooseQuestionCategory";
import Summary from "./summary";

export default function CreateSession() {
  const { setQuestionsTime, setCategory } = useAppContext();
  const [stage, setStage] = useState(0);
  const router = useRouter();

  const handleBack = () => {
    if (stage === 0) {
      router.push("/Start");
    }
    setStage((prevStage) => prevStage - 1);
  };

  return (
    <div className="bg-customBlue min-h-screen flex flex-col justify-center">
      <div className="w-4/5 mx-auto -mt-14">
        <div className="flex justify-between mb-4">
          <div
            className={`w-1/3 h-4 rounded-md ${
              stage >= 0 ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-1/3 h-4 mx-2 rounded-md ${
              stage >= 1 ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-1/3 h-4 rounded-md ${
              stage >= 2 ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
        </div>
        <div className="bg-customDarkBlue rounded-lg shadow mt-10">
          {stage === 0 && <ChooseQuestionLength setStage={setStage} />}
          {stage === 1 && <ChooseQuestionCategory setStage={setStage} />}
          {stage === 2 && <Summary />}
        </div>
        <div className="flex justify-between mx-auto mt-7">
          <Button onClick={() => handleBack()} className="w-1/5">
            Tillbaka
          </Button>
          {stage === 2 && (
            <Button
              className="w-1/5 bg-green-500"
              onClick={() => router.push("/Session")}
            >
              Starta
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
