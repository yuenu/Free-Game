import React, { ReactElement} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { ReturnButton } from './style'

type GameParams = {
    id: string
}

const GameDetail = (): ReactElement => {
  const { id }= useParams<GameParams>()
  const history = useHistory()

  const returnHandler = () => {
    history.goBack()
  }

  return (
    <>
      <ReturnButton onClick={returnHandler}>Return</ReturnButton>
      <h1>GameDetail - {id}</h1>
      <ul>
        <li></li>
      </ul>
    </>
  )
}

export default GameDetail