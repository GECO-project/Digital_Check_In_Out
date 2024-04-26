"use client";

import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";

interface ChooseQuestionLengthProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChooseQuestionLength({
  setStage
}: ChooseQuestionLengthProps) {
  const { setQuestionsTime } = useAppContext();

  const handleButtonClick = (time: number) => {
    setQuestionsTime(time);
    setStage((prevStage) => prevStage + 1);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-8">
        Välj längd på frågan
      </h1>
      <Button
        onClick={() => handleButtonClick(15)}
        size="xl"
        className="w-4/5 mx-auto mt-12"
      >
        Kortare
      </Button>
      <Button
        onClick={() => handleButtonClick(60)}
        size="xl"
        className="w-4/5 mx-auto mt-10 mb-12"
      >
        Längre
      </Button>
    </div>
  );
}
