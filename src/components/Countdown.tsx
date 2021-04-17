import styles from '../styles/components/Countdown.module.css';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const minutesDigits = minutes.toString().padStart(2, '0').split('');
  const secondsDigits = seconds.toString().padStart(2, '0').split('');

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
