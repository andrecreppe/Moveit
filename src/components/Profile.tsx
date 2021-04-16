import styles from '../styles/components/Profile.module.css'; 

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="http://github.com/andrecreppe.png" alt="André Creppe"></img>
      <div>
        <strong>André Creppe</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
