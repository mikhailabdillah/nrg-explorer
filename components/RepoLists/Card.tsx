import { GithubRepository } from '@/types/api'
import { Star } from '@/components/Icons'

const Card: React.FC<GithubRepository> = (props) => {
  return (
    <div className='relative bg-white bg-opacity-20 text-left rounded-[4px] p-4 mb-2'>
      <a href={props.html_url} className='text-xl font-bold text-white'>
        {props.name}
      </a>
      <div className='text-sm mt-2 text-gray-300'>{props.description}</div>
      <div className='absolute top-2 right-2 text-sm'>
        <span>{props.stargazers_count}</span>
        <Star className='w-4 h-4 ml-1 text-yellow-400' />
      </div>
    </div>
  )
}

export default Card
