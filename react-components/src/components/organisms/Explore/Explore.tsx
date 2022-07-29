import React from 'react'
import { Button } from '../../atoms/Button/Button'
interface ExploreProps {
  data : string[];
}
export const Explore = ({data} : ExploreProps) => {
  return (
    <>
      <Button children='Explore' variant='' onclick={()=>{}}/>
      {/* Render explore menu */}
    </>
  )
}