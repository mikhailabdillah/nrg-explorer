'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Button, Input } from '@/components/Core'

const SearchBox: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')

  // Auto focus to the search box input
  useEffect(() => {
    function focusInput({ repeat, metaKey, ctrlKey, key }: KeyboardEvent) {
      if (repeat) return
      if ((metaKey || ctrlKey) && key === '/') ref.current?.focus()
    }
    window.addEventListener('keydown', focusInput)

    return () => {
      window.removeEventListener('keydown', focusInput)
    }
  }, [])

  return (
    <div className='flex flex-row w-full mb-8'>
      <form
        role='searchbox'
        aria-label='Search github user'
        className='flex flex-col md:flex-row w-full'
        action={'/'}
      >
        <div className='relative mr-2 mb-2 md:mb-0 w-full md:w-2/3'>
          <Input
            ref={ref}
            placeholder='Search...'
            className='w-full'
            value={value}
            name={'s'}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className='text-xs py-1 px-1.5 absolute top-2.5 right-2.5 border border-gray-500 text-gray-300 rounded-sm'>
            {'Ctrl+/'}
          </span>
        </div>
        <Button variant='primary' className='w-full md:w-2/6' type='submit'>
          Search
        </Button>
      </form>
    </div>
  )
}

export default SearchBox
