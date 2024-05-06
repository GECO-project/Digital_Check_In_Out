import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button } from "@/components/ui/button";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage-instance";

interface TimerProps {
  question: string;
  time: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Timer({ question, time, setStage }: TimerProps) {
  const [counter, setCounter] = useState(time);
  const [isPlaying, setIsPlaying] = useState(0);

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
    console.log("Timer finished");
  };

  return (
    <div className="w-4/5 mx-auto -mt-14">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-yellow-200 rounded-lg shadow -mt-50 p-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
            {question}
          </h3>
        </div>
        <div className="mt-20 mb-10">
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

        <div className="flex flex-col items-center space-y-8 mt-7">
          <Button size="lg" onClick={() => setIsPlaying((prev) => prev + 1)}>
            Nästa person
          </Button>
          <Button
            variant="destructive"
            size="lg"
            onClick={() => setStage((prev) => prev + 1)}
          >
            Avsluta
          </Button>
        </div>
      </div>
    </div>
  );
}
