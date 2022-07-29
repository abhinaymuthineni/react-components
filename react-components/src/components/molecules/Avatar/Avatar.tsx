import React from 'react'
import MuiAvatar from '@mui/material/Avatar';
import { Icon } from '../../atoms/Icon/Icon';
import { IconButton } from '@mui/material';

interface AvatarProps {
    src: string;
}

export const Avatar = ({src}: AvatarProps) => {
  return (
    <>
      <MuiAvatar src={src} />
      <Icon icon={<IconButton/>}/>
    </>
  )
}