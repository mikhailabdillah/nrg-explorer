import useSWRInfinite from 'swr/infinite'
import { useStore } from '@/store'
import { API_ENDPOINT, fetcher } from '@/app.config'
import type { GithubApiRepositoryResponse } from '@/types/api'

export const useGetRepositories = (user: string) => {
  const pageSize = useStore((state) => state.pageSize)

  const getKey = (pageIndex: number) => {
    return `${API_ENDPOINT}/users/${user}/repos?page=${
      pageIndex + 1
    }&per_page=${pageSize}`
  }

  const { data, error, size, setSize } = useSWRInfinite<
    GithubApiRepositoryResponse,
    { error: unknown }
  >(getKey, fetcher)

  return {
    data,
    error,
    size,
    setSize,
    pageSize,
  }
}
