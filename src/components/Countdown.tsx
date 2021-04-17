import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  // 25 minutes -> 25*60 seconds
  const initialTime = 25 * 60;

  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesDigits = minutes.toString().padStart(2, '0').split('');
  const secondsDigits = seconds.toString().padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(initialTime);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

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
        { (hasFinished) ? (
          <button
            disabled
            className={styles.countdownButton}
          >
            Ciclo encerrado
          </button>
        ) : (
          <>
            { (isActive) ? (
              <button
                type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
            ) : (
              <button
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
              >
                Iniciar um ciclo
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
