import { ReactElement } from 'react'
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'
import { Game } from 'types'
import { StyledLink, Img, Title, Detail, Description, Genre, Icon } from './styles'
import { BROWSER, WINDOWS } from './constants'

interface Props {
	content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
	const { id, title, thumbnail, short_description, genre, platform } = content
	const icons = platform.split(',').map(p => {
		let icon = null
		switch (p.trim()) {
			case BROWSER:
				icon = (
					<Icon key={`${id}- browser`} src={browserIcon} alt="browser icon" />
				)
				break
			case WINDOWS:
				icon = (
					<Icon key={`${id}- window`} src={windowsIcon} alt="windows icon" />
				)
				break
			default:
				break
		}

		return icon
	})
	const link = `/game/${id}`

	return (
		<StyledLink to={link}>
			<Img src={thumbnail} alt={`${title} logo`} />
			<Detail>
				
				<Title>{title}</Title>
				<Description>{short_description}</Description>
				<Genre>{genre}</Genre>
				{icons}
			</Detail>
		</StyledLink>
	)
}

export default GameCard
