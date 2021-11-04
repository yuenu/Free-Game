import styled from 'styled-components'
import { backgroundColor, secondaryTextColor } from 'styles'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 542px;
  padding: 0 16px;
  margin: 24px auto;
  color: ${secondaryTextColor};
`

export const Label = styled.label`
  display: inline-block;
  margin-right: 16px;
  flex-basis: 25%;

  &:last-of-type {
    margin-right: 0;
  }
`

export const Select = styled.select`
  width: 100%;
  margin-top: 8px;
  color: #ffffff;
  background-color: ${backgroundColor};
`
