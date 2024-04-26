"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";

export default function StartPage() {
  const { setType, setQuestionsTime, setCategory } = useAppContext();
  const router = useRouter();

  const handleCheckIn = () => {
    setType("Check-in");
    router.push("/Skapa");
  };

  const handleQuickCheckIn = () => {
    setType("Check-in");
    setQuestionsTime(15);
    setCategory("Slumpad");
    router.push("/Session");
  };

  const handleCheckOut = () => {
    setType("Check-out");
    router.push("/Skapa");
  };

  return (
    <div className="bg-customBlue min-h-screen flex flex-col justify-center">
      <div className="w-4/5 mx-auto -mt-24 flex flex-col items-center justify-between bg-customDarkBlue rounded-lg shadow-md">
        <Button
          onClick={() => handleCheckIn()}
          size="xl"
          style={{
            width: "70%",
            margin: "10px auto",
            marginTop: "50px"
          }}
        >
          Check-in
        </Button>
        <Button
          onClick={() => handleQuickCheckIn()}
          size="xl"
          style={{
            width: "70%",
            margin: "10px auto",
            fontSize: "20px"
          }}
        >
          Snabbstart Check-In
        </Button>
        <Button
          onClick={() => handleCheckOut()}
          size="xl"
          style={{
            width: "70%",
            margin: "10px auto",
            marginBottom: "50px"
          }}
        >
          Check-out
        </Button>
      </div>
    </div>
  );
}
