import React, { ChangeEvent, ReactElement } from 'react'
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'
import { Game } from 'types'
import { List, ListItem, ErrorMessage, ReturnButton } from './styles'
import {Loading} from '../../styles'
interface Props {
  err?: string
  games: Game[],
  isLoading: boolean,
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, isLoading, onFilterChange }: Props): ReactElement => {
  if(isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (err) {
    return (
      <ErrorMessage>Unable to fetch games, please try again later</ErrorMessage>
    )
  }

  if (!isLoading && !games?.length) {
    return (
      <>
        <ErrorMessage>
          No active giveaways available at the moment, please try again later.
        </ErrorMessage>
        <ReturnButton href="/">Return</ReturnButton>
      </>
    )
  }

  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GameList
