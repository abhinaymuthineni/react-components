import React from 'react'
import ButtonUI from '@material-ui/core/Button';

interface ButtonProps {
  onclick: ()=>void;
  variant : string;
  children : string;
}

export const Button = ({onclick, variant, children} : ButtonProps) => {
  return (
    <ButtonUI variant={variant as any} onClick={onclick}>
        {children}
    </ButtonUI>
  )
}