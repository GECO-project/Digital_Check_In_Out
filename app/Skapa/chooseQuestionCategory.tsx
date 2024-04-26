"use client";

import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";

interface ChooseQuestionCategoryProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChooseQuestionCategory({
  setStage
}: ChooseQuestionCategoryProps) {
  const { setCategory } = useAppContext();

  const handleButtonClick = (category: string) => {
    setCategory(category);
    setStage((prevStage) => prevStage + 1);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-8">
        Välj kategori på frågan
      </h1>
      <Button
        onClick={() => handleButtonClick("Slumpad")}
        size="xl"
        className="w-4/5 mx-auto mt-12"
      >
        Slumpad
      </Button>
      <Button
        onClick={() => handleButtonClick("Natur")}
        size="xl"
        className="w-4/5 mx-auto mt-4"
      >
        Natur
      </Button>
      <Button
        onClick={() => handleButtonClick("Kultur")}
        size="xl"
        className="w-4/5 mx-auto mt-4 mb-12"
      >
        Kultur
      </Button>
    </div>
  );
}
