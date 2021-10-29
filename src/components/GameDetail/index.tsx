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
  ShortDescription,
  Icon,
  Loading
} from './style'
import useFetchGameDetail from '../../hooks/useFetchGameDetail'
import { GameDetailType } from 'types'
import { SYSTEM_REQUIREMENTS_CODE } from './constants'
import windowsIcon from 'assets/icons/windows.svg'

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
  const { details, error, isLoading } = useFetchGameDetail(gameId)

  const history = useHistory()

  const returnHandler = () => {
    history.goBack()
  }

  return (
    <GameDetailRender
      details={details}
      error={error}
      onReturnHandler={returnHandler}
      isLoading={isLoading}
    ></GameDetailRender>
  )
}
// Render component
interface RenderProps {
  error?: string
  details?: GameDetailType
  onReturnHandler: (e: MouseEvent<HTMLButtonElement>) => void
  isLoading: boolean
}

const GameDetailRender = ({
  details,
  error,
  onReturnHandler,
  isLoading
}: RenderProps): ReactElement => {

  if (error)
    <ErrorMessage>Unable to fetch games, please try again later</ErrorMessage>

  if(isLoading && !details) {
    return (
      <>
        <Loading />
      </>
    )
  }

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

  const minimumSystemRequirementsRender = 
  (details?.minimum_system_requirements === undefined)
    ? <p>NO DATA</p>
    : Object.entries(details.minimum_system_requirements).map(
      ([key, val]) => (
        <div key={key}>
          <span>{SYSTEM_REQUIREMENTS_CODE[key]}</span>
          <p>{val !== null ? val : 'empty'}</p>
        </div>
      )
    )


  return (
    <>
      <ReturnButton onClick={onReturnHandler}>Return</ReturnButton>

      <Container>
        <Thumbnail>
          <img src={details.thumbnail} alt={details.title} />
          <Title>
            {details.title}
            <span>{details.status}</span>
          </Title>

          <ShortDescription>{details.short_description}</ShortDescription>

          <CtaButton href={details.game_url} target="_blank" rel="nofollow">
            Play Now
          </CtaButton>

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
          
        </Thumbnail>

        <Contnet>
          <Description>
            <h2>About This Game</h2>
            <p>{details.description}</p>
          </Description>

          <SystemRequirements>
            <h2>Minimum System Requirements({<Icon src={windowsIcon} />}Windows)</h2>
            <div className="wrapper">
              {minimumSystemRequirementsRender}
            </div>
          </SystemRequirements>

          <Screenshots>
            <h2>{details.title} Screenshots</h2>
            <div>
              {details.screenshots.map((shot) => {
                return <img key={shot.id} src={shot.image} alt="" />
              })}
            </div>
          </Screenshots>

         
        </Contnet>
      </Container>
    </>
  )
}

export default GameDetail
