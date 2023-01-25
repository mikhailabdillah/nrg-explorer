import UserLists from '@/components/UserLists'
import SearchBox from '@/components/SearchBox'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.app}>
      <div className={styles.wrapper}>
        <h1>Github Repository Explorer</h1>
        <div className={styles.card}>
          {/* Search Box */}
          <SearchBox />
          {/* Results */}
          <UserLists />
        </div>
      </div>
    </main>
  )
}
