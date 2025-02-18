import { useEffect, useState } from "react";
import "./Cake.css";

export const Cake = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  useEffect(() => {
    // Set a timer to blow out the candles after 10 seconds
    const timer = setTimeout(() => {
      setCandlesBlown(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const candles = Array.from({ length: 50 }, (_, index) => (
    <div
      key={index}
      className={`candle ${candlesBlown ? "blown" : ""}`}
      style={{
        left: `${(index % 10) * 10}%`,
        bottom: `${Math.floor(index / 10) * 20}px`,
      }}
    >
      <div className="flame"></div>
    </div>
  ));

  return (
    <div className="cake-container">
      <div className="cake">
        {candles}
        <div className="cake-base"></div>
      </div>
    </div>
  );
};
