import React from 'react'
interface BookThumbnailProps {
  src : string;
}
export const BookThumbnail = ({src}: BookThumbnailProps) => {
  return (
    <>  
      <img src={src} alt="" />
    </>
  )
}