import React from 'react'
import { Box , Typography , Stack } from '@mui/material'

function ExerciseVideos({exerciseVideos, name}) {
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p='20px'>
      <Typography variant='h4'  mb="33px"> Watch <span style={{color:'#ff2626' , textTransform:'capitalize'}}>{name}</span> exercise videos. </Typography>
    </Box>
  );
}

export default ExerciseVideos