import React from 'react'
import { Typography } from '@mui/material'
const Title = ({title,variant , size}) => {
  return (
    <Typography
              variant= {variant}
              noWrap
              component="div"
              sx={{color:'white',fontSize:{size}}}
            
            >
              {title}
            </Typography>
  )
}

export default Title