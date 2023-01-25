import { useGetRepositories } from '@/services/useGetRepositories'
import { Button } from '@/components/Core'
import Card from './Card'
import type { GithubRepository } from '@/types/api'

const RepoLists: React.FC<{ username: string }> = ({ username }) => {
  const { data, error, size, setSize, pageSize } = useGetRepositories(username)

  // @ts-ignore
  const repositories: GithubRepository[] = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize)

  return (
    <div className='relative max-h-80 overflow-auto pr-4 py-4'>
      {error ? (
        <p>Error: Failed to fetch data. Please try again later!</p>
      ) : (
        <>
          {isEmpty && <p>No repository found!</p>}
          {repositories.map((data) => (
            <Card key={data.id} {...data} />
          ))}
          <div className='text-center mt-4'>
            {!isReachingEnd && (
              <Button
                className='border border-gray-100 border-opacity-10 hover:bg-white hover:bg-opacity-30 active:bg-white active:bg-opacity-30'
                onClick={() => setSize(size + 1)}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? 'loading...' : 'Load more'}
              </Button>
            )}
            {isReachingEnd && !isEmpty && <p>No more data</p>}
          </div>
        </>
      )}
    </div>
  )
}

export default RepoLists
