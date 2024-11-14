import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  // Format time as HH:MM:SS AM/PM
  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={styles.clockContainer}>
      <h1 style={styles.time}>{formattedTime}</h1>
    </div>
  );
}

// Basic styles for the clock
const styles = {
  clockContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
    fontSize: '2em',
  },
  time: {
    fontFamily: 'monospace',
  },
};

export default DigitalClock;
