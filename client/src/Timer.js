import React, { useEffect, useState } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-07-11 12:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h2 style={{ color: "black" }}>
        Registration Starts in:
        <h2 style={{ color: "white" }}>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </h2>
      </h2>
    </div>
  );
}

export default CountdownTimer;
