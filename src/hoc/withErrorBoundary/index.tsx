import React, { Component, ComponentType, ComponentClass } from 'react'

interface State {
	hasError: boolean
}

const widthErrorBoundary = <T extends Record<string, never>>(
	WrappedComponent: ComponentType<T>
): ComponentClass<T, State> =>
	class ErrorBoundary extends Component<T, State> {
		constructor(props: T) {
			super(props)
			this.state = { hasError: false }
		}

		static getDriverStateFormError(error: Error) {
			console.log(error)
			return { hasError: true }
		}

		render() {
			if (this.state.hasError) {
				return <p>Something went wrong</p>
			}

			return <WrappedComponent {...this.props} />
		}
	}

export default widthErrorBoundary
