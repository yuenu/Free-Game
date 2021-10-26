import React, { ReactElement, MouseEvent } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
  ReturnButton,
  ErrorMessage,
  Title,
  Container,
  Thumbnail,
  Contnet,
  Description,
  Tags,
  CtaButton,
  Screenshots,
  SystemRequirements,
} from './style'
import useFetchGameDetail from '../../hooks/useFetchGameDetail'
import { GameDetailType } from 'types'

type GameParams = {
  id: string
}
const GameDetail = (): ReactElement => {
  const { id } = useParams<GameParams>()

  return <GameDetailContainer gameId={id}></GameDetailContainer>
}

// Container component
type Props = {
  gameId: string
}

const GameDetailContainer = (props: Props): ReactElement => {
  const { gameId } = props
  const { details, error } = useFetchGameDetail(gameId)

  const history = useHistory()

  const returnHandler = () => {
    history.goBack()
  }

  return (
    <GameDetailRender
      details={details}
      error={error}
      onReturnHandler={returnHandler}
    ></GameDetailRender>
  )
}
// Render component
interface RenderProps {
  error?: string
  details?: GameDetailType
  onReturnHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

const GameDetailRender = ({
  details,
  error,
  onReturnHandler,
}: RenderProps): ReactElement => {
  console.log(details)

  if (error)
    <ErrorMessage>Unable to fetch games, please try again later</ErrorMessage>

  if (!details) {
    return (
      <>
        <ErrorMessage>
          No active giveaways available at the moment, please try again later.
        </ErrorMessage>
        <ReturnButton onClick={onReturnHandler}>Return</ReturnButton>
      </>
    )
  }

  return (
    <>
      <ReturnButton onClick={onReturnHandler}>Return</ReturnButton>

      <Container>
        <Thumbnail>
          <img src={details.thumbnail} alt="" />
        </Thumbnail>

        <Contnet>
          <Title>{details.title}</Title>
          <Tags>
            <div>
              <span>Genre</span> {details.genre}
            </div>
            <div>
              <span>Platform</span> {details.platform}
            </div>
            <div>
              <span>developer</span> {details.developer}
            </div>
            <div>
              <span>Publisher</span> {details.publisher}
            </div>
            <div>
              <span>Release Date</span> {details.release_date}
            </div>
          </Tags>

          <CtaButton href={details.game_url} target="_blank" rel="nofollow">
            Play Now
          </CtaButton>

          <Description>
            <h2>About {details.title}</h2>
            <p>{details.short_description}</p>
          </Description>

          <Screenshots>
            <h2>{details.title} Screenshots</h2>
            <div>
              {details.screenshots.map((shot) => {
                return <img key={shot.id} src={shot.image} alt="" />
              })}
            </div>
          </Screenshots>

          <SystemRequirements>
            <h2>Minimum System Requirements(Windows)</h2>
            {Object.entries(details.minimum_system_requirements).map(
              ([key, val]) => (
                <div key={key}>
                  <span>{key.slice(0, 1).toUpperCase() + key.slice(1)}</span>
                  <p>{val !== null ? val : 'empty'}</p>
                </div>
              )
            )}
          </SystemRequirements>
        </Contnet>
      </Container>
    </>
  )
}

export default GameDetail
