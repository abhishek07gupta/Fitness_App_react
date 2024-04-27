import React from 'react'
import { Box,Stack } from '@mui/material'
import Icon from '../assets/icons/gym.png'
function BodyPart({bodyPart,setBodyPart , item}) {
  return (
    <Stack 
    type="button"
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart == item? '4px solid #ff2625':'',
        backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',
        width: '270px', height: '282px', cursor: 'pointer', gap: '47px'
    }}
    >
        <img src={Icon} alt="dumb-bell" style={{width:'40px' , height:'40px'}}/>
    </Stack>
  )
}

export default BodyPart