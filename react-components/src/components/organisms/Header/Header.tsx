

import { Grid } from '@material-ui/core'
import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Logo } from '../../atoms/Logo/Logo'
import { Typography } from '../../atoms/Typography/Typography'
import { Avatar } from '../../molecules/Avatar/Avatar'
import { Explore } from '../Explore/Explore'

export const Header = () => {
  let data = [""];
  return (
    <>
      <Grid container direction="row">
        <Logo/>
        <Button children='SearchIcon' variant='' onclick={()=>{}}/>
        <Explore data={data} />
        <Typography children="My Library" variant="h3" />
        <Typography children="Highlights" variant="h3" />
        <Avatar src='user.png'/>
      </Grid>
    </>
  )
}