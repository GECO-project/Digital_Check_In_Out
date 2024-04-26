"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";

export default function StartPage() {
  const { setType, setQuestionsTime, setCategory } = useAppContext();
  const router = useRouter();

  const handleCheckIn = () => {
    setType("check-in");
    setQuestionsTime(0);
    setCategory("");
    router.push("/Skapa");
  };

  const handleQuickCheckIn = () => {
    setType("check-in");
    setQuestionsTime(15);
    setCategory("quick");
    router.push("/Session");
  };

  const handleCheckOut = () => {
    setType("check-out");
    setQuestionsTime(0);
    setCategory("");
    router.push("/Skapa");
  };

  return (
    <div
      style={{
        backgroundColor: "#D0E8F2",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          marginTop: "-100px",
          flexDirection: "column",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          backgroundColor: "#90B8E7",
          borderRadius: "10px",
          boxShadow: "4px 0px 8px rgba(0, 0, 0, 0.2)"
        }}
      >
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
