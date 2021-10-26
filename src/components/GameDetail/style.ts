import styled from 'styled-components'

export const ReturnButton = styled.button`
  background-color: #7a8288;
  color: #fff;
  width: 100px;
  height: 2rem;
  border: #7a8288;
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
    background-color: #777;
  }
`
export const ErrorMessage = styled.p`
  color: #ffffff;
`

export const Title = styled.h1`
  margin: 1.5rem 0 2rem 1rem;
  border-bottom: 1px solid #888;
`

export const Container = styled.div`
  padding: 20px;
  color: #aaa;
`

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Contnet = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`

export const Description = styled.div`
  h2 {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
    color: #aaa;
  }

  p {
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: 0.6px;
  }
`

export const Tags = styled.div`
  padding: 0 10px; 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
  margin-bottom:2rem;
  gap:10px;
  row-gap:20px;
  
  div {
    align-self: center;
    white-space:nowrap;
  }

  span {
    font-size:12px;
    font-weight:700;
    background-color:#ddd;
    color:#333;
    padding:4px 10px;
    border-radius:50px;
    margin-right:3px;
  }
`

export const CtaButton = styled.a`
  background-image: linear-gradient(#4799eb, #4799eb 60%, #49acff);
  color: #eeeeee;
  max-width: 200px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 250ms;
  letter-spacing: 1px;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(#358de6, #358de6 40%, #2174b9);
  }
`
export const Screenshots = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
  }

  img {
    flex-basic: 33.33333%;
    max-width: 33.333333%;
  }
`

export const SystemRequirements = styled.div`
  color: #aaa;

  span {
    color: #7a8288;
  }

  p {
    font-size:12px;
  }
`
