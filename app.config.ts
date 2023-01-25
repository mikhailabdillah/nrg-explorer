const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  }).then((res) => res.json())

const API_ENDPOINT = process.env.GITHUB_API_ENDPOINT

export { fetcher, API_ENDPOINT }
