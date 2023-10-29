import React from 'react'

import { ButtonWhite, ButtonRed } from './styles'

const Button = ({ children, isRed, ...rest }) => {
  return (
    <>
      {isRed ? (
        <ButtonRed {...rest}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      )}
    </>
  )
}
export default Button
