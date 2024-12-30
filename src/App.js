import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
const [newYearMessage, setNewYearMessage] = useState(["Bye 2024!"])

const particleInitialization = async(engine) => {
  await loadFireworksPreset(engine)
}

function timeLeft() {
const newYeardate = new Date("January 1, 2025 00:00:00").getTime()
const nowDate = new Date().getTime()
const remainingTime = newYeardate - nowDate
return remainingTime
}

  return (
    <>
    <Particles
    init={particleInitialization}
    options={{ preset: "fireworks" }}
    />
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <span className="text-white text-4xl font-bold z-50">
        <Typewriter words={newYearMessage} 
        loop={false}
        cursorStyle={"👻"}
        cursor
        />
      </span>
      <div className="z-50 text-white font-bold text-2xl">
        <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage([
          "Selamat", "Tahun", "Baru", "2025", "Happ New Year 🥳"
        ])}
        />
      </div>
    </div>
    </>
  );
}

export default App;
