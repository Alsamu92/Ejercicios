import React from 'react'
import styled from 'styled-components'

export const Titulo = ({children}) => {
    const Title=styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`

  return (
    <Title>{children}</Title>
  )
}
