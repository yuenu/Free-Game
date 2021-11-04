import React, { ReactElement, useState, useCallback, ChangeEvent } from 'react'
import useFetch from '../../hooks/useFetch'
import GameListRender from './GameList.render'
import { Filter } from './types'

const GameList = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',
    sortBy: 'relevance',
  })
  const { games, error, isLoading } = useFetch(filter)

  const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
    event.preventDefault()
  }, [])
  return (
    <GameListRender err={error} games={games} isLoading={isLoading} onFilterChange={onFilterChange} />
  )
}

export default GameList
