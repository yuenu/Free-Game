import styled from 'styled-components'
import {
  primaryTextColor,
  secondaryTextColor,
  tertiaryTextColor,
} from '../../styles/theme'
import {breakpoints} from '../../styles/breakpoints'

export const ReturnButton = styled.button`
  background-color: ${secondaryTextColor};
  color: #ffffff;
  width: 100px;
  height: 2rem;
  border: ${secondaryTextColor};
  text-decoration: none;
  display: inline-block;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
  transition: 250ms;

  &:active {
    background-color: #aaa;
  }

  &:hover {
    background-color: ${primaryTextColor};
  }
`
export const ErrorMessage = styled.p`
  color: #ffffff;
`

export const Container = styled.div`
  padding: 20px;
  color: ${secondaryTextColor};
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 30px;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
    color: ${primaryTextColor};
  }

  p {
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: 0.6px;
  }

  @media (max-width:${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const Thumbnail = styled.div`
  max-width: 350px;
  width: 100%;
  height: 100%;
  position: sticky;
  top: 58px;

  @media (max-width:${breakpoints.tablet}) {
    position:static;
    margin: auto;
    max-width:500px;

    img {
      width:100%;
    }
  }
`

export const ShortDescription = styled.p`
  margin-bottom: 1.5rem;
`

export const Title = styled.h1`
  margin: 1rem 0;
  color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 13px;
    background-color: #52b788;
    color: #000000;
    padding: 2px 5px;
    border-radius: 4px;
  }
`

export const CtaButton = styled.a`
  background-image: linear-gradient(#4799eb, #4799eb 60%, #49acff);
  color: #eeeeee;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 250ms;
  letter-spacing: 1px;
  border-radius: 4px;
  margin-bottom: 1.5rem;

  &:hover {
    background-image: linear-gradient(#358de6, #358de6 40%, #2174b9);
  }
`

export const Contnet = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width:${breakpoints.tablet}) {
    max-width:500px;
    margin: auto;
  }
`

export const Description = styled.div`
  p {
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: 0.6px;
  }
`

export const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-bottom: 2rem;
  gap: 20px;

  div {
    align-self: center;
    white-space: nowrap;
    font-size: 13px;
  }

  span {
    font-weight: 700;
    background-color: #ddd;
    color: ${tertiaryTextColor};
    padding: 4px 10px;
    border-radius: 50px;
    margin-right: 3px;
  }
`

export const Screenshots = styled.div`
  padding: 20px 0;

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`

export const SystemRequirements = styled.div`
  color: #aaa;

  & .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 20px;
  }

  span {
    color: ${secondaryTextColor};
  }

  p {
    font-size: 12px;
  }
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 8px;
`
