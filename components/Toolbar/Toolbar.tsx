'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/Core'
import { useStore } from '@/store'
import styles from './Toolbar.module.css'

const Toolbar: React.FC = () => {
  const router = useRouter()
  const search = useStore((state) => state.searching)
  const reset = useStore((state) => state.reset)

  const handleClick = () => {
    reset()
    router.push('/')
  }

  if (!search) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Button
          className={styles.cta}
          aria-label='Clear the results'
          onClick={handleClick}
        >
          Clear
        </Button>
      </div>
    </div>
  )
}

export default Toolbar
