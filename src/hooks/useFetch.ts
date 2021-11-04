import { useState, useEffect } from 'react'
import axios from 'axios'

// Types
import { Game } from 'types'
import { Filter } from 'components/GameList/types'
import { API_HOST, API_KEY } from './constants'

type Response = {
  games: Game[]
  error?: string
  isLoading: boolean
}

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([])
  const [err, setErr] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const { platform, genre, tag, sortBy } = params

  useEffect(() => {
    setIsLoading(true)
    const fetchType = tag === undefined
      ? '/games'
      : '/filter'

    axios
      .get(fetchType, {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          platform: platform,
          category: genre,
          tag: tag,
          'sort-by': sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message))
      .finally(() => setIsLoading(false))
  }, [platform, genre, tag, sortBy])

  return {
    games,
    error: err,
    isLoading
  }
}

export default useFetch
