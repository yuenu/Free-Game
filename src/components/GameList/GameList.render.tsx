import React, { ChangeEvent, ReactElement } from 'react'
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'
import { Game } from 'types'
import { List, ListItem, ErrorMessage, ReturnButton } from './styles'

interface Props {
  err?: string
  games: Game[]
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
  if (err) {
    return (
      <ErrorMessage>Unable to fetch games, please try again later</ErrorMessage>
    )
  }

  if (!games?.length) {
    console.log(err)
    return (
      <>
        <ErrorMessage>
          No active giveaways available at the moment, please try again later.
        </ErrorMessage>
        <ReturnButton name="button">Return </ReturnButton>
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
