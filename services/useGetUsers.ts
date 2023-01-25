import useSWR from 'swr'
import { useStore } from '@/store'
import { API_ENDPOINT, fetcher } from '@/app.config'
import type { GithubApiUserResponse } from '@/types/api'

export const useGetUsers = (search: string | null) => {
  const pageSize = useStore((state) => state.pageSize)
  const setUsers = useStore((state) => state.setUsers)

  const { data: users, error } = useSWR<
    GithubApiUserResponse,
    { error: unknown }
  >(
    search
      ? `${API_ENDPOINT}/search/users?q=${search}&per_page=${pageSize}`
      : null,
    (url: string) => fetcher(url)
  )

  if (!error && users) setUsers(users.items)

  return {
    users,
    isLoading: !error && !users,
    error,
  }
}
