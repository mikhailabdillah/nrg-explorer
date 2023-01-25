'use client'

import { useSearchParams } from 'next/navigation'
import { useGetUsers } from '@/services/useGetUsers'
import { Collapse } from '@/components/Core'
import RepoLists from '@/components/RepoLists'

const UserLists: React.FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('s')
  const { users, isLoading, error } = useGetUsers(search)

  return (
    <div className='w-full text-center'>
      {error ? (
        <p>Error: Failed to fetch data. Please try again later!</p>
      ) : (
        <>
          {search && (
            <p className='mb-4'>
              Searching for <b>&quot;{search}&quot;</b>
            </p>
          )}
          {search && isLoading && <p className='mb-4'>Loading...</p>}

          <div role='group'>
            {users?.items?.map((user) => (
              <div key={user.id} className='mb-4'>
                <Collapse title={user.login}>
                  <RepoLists username={user.login} />
                </Collapse>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default UserLists
