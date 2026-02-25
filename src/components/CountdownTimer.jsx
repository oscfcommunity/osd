import { useEffect, useState } from "react";

export default function CountdownTimer({
  targetDate = "2026-10-04T08:00:00+05:30",
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setIsExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (isExpired) {
    return (
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
        The event has ended. Thank you for participating! 🎉
      </p>
    );
  }

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">
        Event Starts In
      </h3>
      <div className="flex justify-center gap-3 sm:gap-6">
        {blocks.map((b) => (
          <div
            key={b.label}
            className="bg-white border-2 border-green-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-5 min-w-[70px] sm:min-w-[100px] shadow-lg"
          >
            <div className="text-3xl sm:text-5xl font-black gradient-text tabular-nums">
              {String(b.value).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
              {b.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
