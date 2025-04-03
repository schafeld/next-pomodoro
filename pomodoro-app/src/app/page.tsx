"use client";

import { PrimeReactProvider } from 'primereact/api';
import "primeicons/primeicons.css";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Controls from "@/components/Controls";
import LengthSetting from "@/components/LengthSetting";
import TimerDisplay from '@/components/TimerDisplay';


export default function Home() {
  return (
    <PrimeReactProvider>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Alert
        message="This is a sample alert message."
        onClose={() => console.log("Alert closed")}
        />

        <Button 
          onClick={() => console.log("Button clicked")}
          variant="primary"
        >Button
        </Button>
        
        <LengthSetting
          label="Pomodoro"
          length={25}
          onIncrement={() => console.log("Incremented")}
          onDecrement={() => console.log("Decremented")}
          minLength={1}
          maxLength={60}
        />

        <TimerDisplay
          time={1500} // 25 minutes in seconds
          mode="session" // or "break"
        />

        <Controls
          isRunning={false}
          onStartStop={() => console.log("Start/Stop clicked")}
          onReset={() => console.log("Reset clicked")}
        />
        
      </div>
    </PrimeReactProvider>
  );
}
