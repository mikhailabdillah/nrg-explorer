// import { GithubRepository } from '@/types/api'
// import repo from '@/dummy-repo.json'
// import Card from './Card'

const RepoLists: React.FC<{ username: string }> = () => {
  // const repos = repo as unknown as GithubRepository[]
  return (
    <div className='relative max-h-80 overflow-auto pr-4'>
      {/* {repos.map((data) => (
        <Card key={data.id} {...data} />
      ))} */}
    </div>
  )
}

export default RepoLists
