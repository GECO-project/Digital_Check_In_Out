import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button } from "@/components/ui/button";
import "./timerStyle.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

interface TimerProps {
  question: string;
  time: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Timer({ question, time, setStage }: TimerProps) {
  const [counter, setCounter] = useState(time);
  const [isPlaying, setIsPlaying] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (counter > 0) {
      timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        1000
      );
    }
    return () => timer && clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const onTimerFinish = () => {
    setIsShaking(true);
    const audio = new Audio("/timer.mp3");
    audio.play();
    setTimeout(() => {
      setIsShaking(false);
    }, 4500);
  };

  return (
    <div className="w-4/5 mx-auto mt-14">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-yellow-200 rounded-lg shadow -mt-50 p-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center p-5">
            {question}
          </h3>
        </div>
        <div className={`mt-10 mb-5 ${isShaking ? "shake" : ""}`}>
          <CountdownCircleTimer
            isPlaying
            key={isPlaying}
            duration={time}
            strokeWidth={16}
            trailColor="#F3F4F6"
            colors={["#008000", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[time, time / 2, time / 4, 0]}
            onComplete={() => onTimerFinish()}
          >
            {({ remainingTime }) => (
              <div className="flex flex-col items-center">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {formatTime(remainingTime)}
                </h2>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {formatTime(time)}
                </h4>
              </div>
            )}
          </CountdownCircleTimer>
        </div>

        <div className="flex flex-col items-center space-y-10 mt-10">
          <Button size="xl" onClick={() => setIsPlaying((prev) => prev + 1)}>
            Nästa person
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="xl" variant="destructive">
                Avsluta
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent style={{ width: "90%" }}>
              <AlertDialogHeader>
                <AlertDialogTitle style={{ fontSize: "30px" }}>
                  Är du säker på att du vill avsluta?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  style={{
                    fontSize: "22px",
                    marginBottom: "2px",
                    height: "50px"
                  }}
                >
                  Tillbaka
                </AlertDialogCancel>
                <AlertDialogAction
                  style={{
                    fontSize: "22px",
                    height: "50px",
                    marginBottom: "20px",
                    marginTop: "12px",
                    paddingTop: "5px"
                  }}
                  onClick={() => setStage((prev) => prev + 1)}
                >
                  Avsluta
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
