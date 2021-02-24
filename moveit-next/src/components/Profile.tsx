import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62727984?s=460&u=96d6db429e04b3f7d128ee0f21552b533738c36e&v=4" alt="Vitor Mezzalira" />
      <div>
        <strong>Vitor Mezzalira</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}