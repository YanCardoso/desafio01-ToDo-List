import styles from './styles.module.scss'

export function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" />
      <button>Criar</button>
    </div>
  )
}