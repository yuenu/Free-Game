import {useState, useEffect} from 'react'
import axios from 'axios'
import { API_HOST, API_KEY } from '../useFetch/constants'
import { GameDetailType } from 'types'

type Response = {
    details: GameDetailType | undefined
    error?: string
}

const useFetchGameDetail = (gameId: string): Response => {
  const [details, setDetails] = useState<GameDetailType>()
  const [error, setError] = useState<string>('')

  useEffect(() => {
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
      .then((res) => setDetails(res.data))
      .catch((e) => setError(e.message))
  },[gameId])

  return {
    details,
    error
  }
}

export default useFetchGameDetail