import React, { useState, useEffect } from 'react';

function CountdownTimer({ time }) {

  const [newTime, setNewTime] = useState(time);
  let timeInterval = null;

  const calculateTimeLeft = () => {

    let timeLeft = {};

    if (newTime > 0) {
      timeLeft = {
        hours: Math.floor((newTime / (60 * 60)) % 24),
        minutes: Math.floor((newTime / 60) % 60),
        seconds: Math.floor(newTime % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {

    timeInterval = setTimeout(() => {
      setNewTime(newTime - 1);
      setTimeLeft(calculateTimeLeft());
    }, 1000);

  });

  useEffect(() => {

    return () => {
      clearTimeout(timeInterval);
    };

  }, []);

  return (

    <div>
      <span>{`${timeLeft.minutes}'${ timeLeft.seconds < 10 ? '0' + timeLeft.seconds: timeLeft.seconds}"`}</span>
    </div>
  );
}

export default CountdownTimer;