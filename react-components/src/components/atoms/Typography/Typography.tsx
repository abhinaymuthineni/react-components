import React from 'react'

interface TypographyProps {
  variant : string;
  children : string;
}

export const Typography = ({variant, children}: TypographyProps) => {
  return (
    <Typography variant={variant}>
      {children}
    </Typography>
  )
}