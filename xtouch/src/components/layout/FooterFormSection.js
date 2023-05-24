import React, { useState } from 'react'
import Title from '../SharedComponents/Title'
import Paragraph from '../SharedComponents/Paragraph'
import Input from '../SharedComponents/Input'
import Buttonn from '../SharedComponents/Buttonn'
import { Box, Stack } from '@mui/material'

const FooterFormSection = () => {
    const [email , setEmail] = useState('')

    const handleSubscribe = (e)=>{
        e.preventDefault();
        setEmail('');
        alert('Thankyou, you are subscribed to receive our daily newsletter');
    }
    const onChangeSubscribe=(e)=>{
        setEmail(e.target.value)
    }
  return (
    <Stack direction={'column'} spacing={1}>
        <Title title={"X-touch" } variant={"h6"}/>
        <Paragraph paragraph={"Subscribe to our Email alerts to receive early discount offers, and new products info."} variant={"p"} size={'10px'}/>
        <Box
            component="form"
            onSubmit={handleSubscribe}
            >
        <Input label={"Email"} value={email} onChange={onChangeSubscribe} />
        <Buttonn text={'Subscribe'} type='submit' />
    </Box>
    </Stack>
  )
}

export default FooterFormSection