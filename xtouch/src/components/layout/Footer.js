import { Box } from '@mui/material'
import React from 'react'
import FooterGroup from './FooterGroup'

const Footer = () => {
  return (
    <Box
    height= 'auto'
    component="footer"
    position="relative"
    bottom="0"
    sx={{ backgroundColor:'black',width:'100%'}}>
      <FooterGroup/>
    </Box>
  )
}

export default Footer