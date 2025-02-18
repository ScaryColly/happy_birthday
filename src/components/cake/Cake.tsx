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

  const candles = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className={`candle ${candlesBlown ? "blown" : ""}`}
      style={{
        left: `${(index % 10) * 10}%`,
        bottom: `${Math.floor(index / 10) * 20}px`,
        top: `${
          index === 0
            ? -500
            : index < 5
            ? ((10 - index) % 5) * 6 - 30
            : (index % 5) * 6 - 30
        }%`,
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
      <p className="blow-text">Blow The Candles!</p>
    </div>
  );
};
