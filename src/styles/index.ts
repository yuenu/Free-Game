import styled from 'styled-components'

export const Loading = styled.div`
  &,
  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: loader 1.1s infinite linear;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const fontFamily = 'Arial Verdana, sans-serif'

export const breakpoints = {
  tablet: '720px',
  desktop: '1024px',
}

export const primaryColor = '#272b30'
export const secondaryColor = '#32383e'
export const primaryTextColor = '#aaa'
export const secondaryTextColor = '#7a8288'
export const tertiaryTextColor = '#272b30'
export const backgroundColor = '#7a8288'

