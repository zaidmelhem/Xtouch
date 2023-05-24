import React from 'react'
import { Typography } from '@mui/material'
const Paragraph = ({paragraph,variant,size}) => {
    
  return (
    <Typography
              component="div"
              fontSize={size}
              
            sx={{color:'white'}}
            >
              {paragraph}
            </Typography>
  )
}

export default Paragraph