import {useState, useEffect} from 'react'
import axios from 'axios'
import { API_HOST, API_KEY } from '../useFetch/constants'
import { GameDetailType } from 'types'
import useIsMounted from 'hooks/useIsMounted'

type Response = {
    details: GameDetailType | undefined
    error?: string,
    isLoading: boolean
}

const useFetchGameDetail = (gameId: string): Response => {
  const [details, setDetails] = useState<GameDetailType>()
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const isMounted = useIsMounted()

  useEffect(() => {
    setIsLoading(true)
    axios.get('/game', {
      baseURL: `https://${API_HOST}/api`,
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
      params: {
        id: gameId
      }
    })
      .then((res) => isMounted.current && setDetails(res.data))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false))
  },[gameId])

  return {
    details,
    error,
    isLoading
  }
}

export default useFetchGameDetail