import React, { useRef } from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/system';
  


const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: 'black',
    color:'white',
    borderColor:'gray',
    '&:focus': {
      backgroundColor: 'black',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
      
    },
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'gray',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'gray',
    },
  },
  '& .MuiInputLabel-shrink': {
    color: 'gray',
  },
});
const Input = ({label,value,onChange}) => {  
  const inputRef = useRef('')
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (  
    <CustomTextField fullWidth type='email' value={value} onChange={onChange} id="fullWidth" label={label}  inputRef={inputRef}
    variant="outlined"
    onClick={handleClick}
    autoFocus={false}  />
  )
  }
  

export default Input