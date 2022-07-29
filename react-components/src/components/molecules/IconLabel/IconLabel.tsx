import { Grid } from '@material-ui/core';
import React from 'react'
import { Typography } from '../../atoms/Typography/Typography';

interface IconLabelProps {
  label : string;
  icon : React.ReactNode
}
export const IconLabel = (props : IconLabelProps) => {
  return (
    <div>
      <Grid container direction='row'>
        <Grid item>
          {props.icon}
        </Grid>
        <Grid item>
        <Typography children={props.label} variant='h3'/>
        </Grid>
      </Grid>
    </div>
  )
}