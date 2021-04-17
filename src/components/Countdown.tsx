import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  // 25 minutes -> 25*60 seconds
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesDigits = minutes.toString().padStart(2, '0').split('');
  const secondsDigits = seconds.toString().padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesDigits[0]}</span>
          <span>{minutesDigits[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsDigits[0]}</span>
          <span>{secondsDigits[1]}</span>
        </div>
      </div>
      <div>
        <button 
          type="button" 
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
        </button>
      </div>
    </div>
  );
}
