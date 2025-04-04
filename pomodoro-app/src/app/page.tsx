import "primeicons/primeicons.css";
import PomodoroTimer from '@/components/PomodoroTimer';


export default function Home() {
  return (

      <div className="page grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  
      <PomodoroTimer />
      </div>
  );
}
