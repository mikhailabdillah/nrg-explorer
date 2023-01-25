'use client'

// import { GithubUser } from '@/types/api'
import { useSearchParams } from 'next/navigation'
// import { Button, Collapse } from '@/components/Core'
// import dummy from '@/dummy.json'
// import RepoLists from '../RepoLists'

const UserLists: React.FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('s')
  // const users = dummy.items as unknown as GithubUser[]

  return (
    <>
      {search && <p className='mb-4'>Searching for &quot;{search}&quot;</p>}
      <div role='group' className='w-full'>
        {/* {users.map((user) => (
          <div key={user.id} className='mb-4'>
            <Collapse title={user.login}>
              <RepoLists username={user.login} />
            </Collapse>
          </div>
        ))} */}
      </div>
      {/* <div>
        <Button className='border border-gray-100 border-opacity-10'>
          Load More
        </Button>
      </div> */}
    </>
  )
}

export default UserLists
