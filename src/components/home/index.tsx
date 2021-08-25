import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import widthErrorBoundary from 'hoc/withErrorBoundary'

const Home = (): ReactElement => <GameList />

export default widthErrorBoundary(Home)
