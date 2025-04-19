
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  eventName: string;
}

const CountdownTimer = ({ targetDate, eventName }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };
  
  return (
    <div className="py-12 px-4 text-center">
      <h3 className="text-2xl font-semibold mb-6">{eventName}</h3>
      <div className="flex justify-center gap-4 text-center">
        <div className="bg-card rounded-lg shadow p-4 w-20">
          <div className="text-3xl font-bold">{formatNumber(timeLeft.days)}</div>
          <div className="text-sm text-muted-foreground">Days</div>
        </div>
        <div className="bg-card rounded-lg shadow p-4 w-20">
          <div className="text-3xl font-bold">{formatNumber(timeLeft.hours)}</div>
          <div className="text-sm text-muted-foreground">Hours</div>
        </div>
        <div className="bg-card rounded-lg shadow p-4 w-20">
          <div className="text-3xl font-bold">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-sm text-muted-foreground">Minutes</div>
        </div>
        <div className="bg-card rounded-lg shadow p-4 w-20">
          <div className="text-3xl font-bold">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-sm text-muted-foreground">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
