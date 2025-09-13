import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date("2025-10-05T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(null); // event started
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">The event has started! 🎉</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-center">
      {["days","hours","minutes","seconds"].map((unit) => (
        <div key={unit} className="p-4 sm:p-6 bg-white rounded-2xl shadow-2xl">
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold text-green-600">{timeLeft[unit]}</span>
          <span className="mt-2 block text-sm sm:text-base lg:text-lg text-black font-semibold">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
        </div>
      ))}
    </div>
  );
}
