
import { Card, CardContent, CardMedia } from '@material-ui/core'
import React from 'react'
import { Icon } from '../../atoms/Icon/Icon';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { Typography } from '../../atoms/Typography/Typography'
import { IconLabel } from '../IconLabel/IconLabel';

interface BookCardProps {
  bookImage : string;
  bookName : string;
  authorName : string;
  timeRead : string;
}

export const BookCard = (props: BookCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={props.bookImage}
        alt="book name"
      />
      <CardContent>
        <Typography  variant="h5" children={props.bookName}/>
        <Typography variant="body2" children={props.authorName}/>
        <IconLabel icon={<Icon icon={<></>}/>} label = {props.timeRead}/>
        <ProgressBar/>
      </CardContent>
      
    </Card>
  )
}