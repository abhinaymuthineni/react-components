import { TextField } from '@mui/material'
import React from 'react'
interface SearchBarProps {
  handleChange : ()=> void;
  placeholder : string
}
export const SearchBar = (props : SearchBarProps) => {
  const handleChange = () => {

  }
  return (
    <div>
      <TextField placeholder={props.placeholder} onChange={props.handleChange}/>
    </div>
  )
}