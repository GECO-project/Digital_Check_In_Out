"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAppContext } from "@/contexts/AppContext";
import questions from "../../lib/questions.json";
import Timer from "./timer";

export default function CreateSession() {
  const [stage, setStage] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const { questionTime, category, type } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    // Based on the user's selected category,type and questionTime, get a question
    // For now, we will choose a random questions

    if (type === "Check-in") {
      setSelectedQuestion(questions[0].question);
    } else if (type === "Check-out") {
      setSelectedQuestion(questions[1].question);
    }
  }, []);

  const handleClick = () => {
    if (stage === 0) {
      setStage((prevStage) => prevStage + 1);
    }
  };

  const startInfo = () => {
    return (
      <div className="w-4/5 mx-auto mt-20">
        <div className="bg-yellow-200 rounded-lg shadow mt-10 pt-5 pb-5 ">
          <div className="flex flex-col items-center justify-between">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-8">
              Frågan
            </h1>
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
              {selectedQuestion}
            </h4>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-8">
              Vem börjar
            </h1>
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
              Den som står till höger om mig
            </h4>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-16">
          <Button size="xl" onClick={() => handleClick()}>
            {stage === 0 ? "Starta timer" : "Nästa person"}
          </Button>
        </div>
      </div>
    );
  };

  const endInfo = () => {
    return (
      <div className="w-4/5 mx-auto mt-14">
        <div className="bg-yellow-200 rounded-lg shadow mt-10 p-1">
          <div className="flex flex-col items-center justify-between">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-8">
              {type === "Check-in" ? "Check-in klar!" : "Check-out klar!"}
            </h1>
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
              Tack för att ni delade med er!
            </h4>
            <img src="check-mark.png" className="w-32 h-32 mt-6 mb-6" />
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-7">
          <Button size="xl" onClick={() => router.push("/Start")}>
            Skapa ny
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-pink-200 min-h-screen flex flex-col">
      {stage === 0 && startInfo()}
      {stage === 1 && (
        <Timer
          question={selectedQuestion}
          time={questionTime}
          setStage={setStage}
        />
      )}
      {stage === 2 && endInfo()}
    </div>
  );
}
