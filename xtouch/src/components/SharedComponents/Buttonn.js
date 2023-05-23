import React from 'react'
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const Buttonn = ({text,width='3015px',hight='15px' , handleClick , type}) => {
    const MyButton = styled(Button)({
    color:'white',
    backgroundColor:'#E80202',
    textAlign:'center',
    width:{width},
    hight:{hight},
    '&:hover':{
        backgroundColor:'#FF0000'
    }
    });
  return (
    <MyButton variant="contained" onClick={handleClick} type={type} >{text}</MyButton>
  )
}

export default Buttonn