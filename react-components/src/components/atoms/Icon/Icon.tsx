import React, { ReactComponentElement, ReactElement } from 'react'

interface IconProps {
  icon: any
}

export const Icon = ({icon}: IconProps) => {
  return (
    <div>
      {icon}
    </div>
  )
}