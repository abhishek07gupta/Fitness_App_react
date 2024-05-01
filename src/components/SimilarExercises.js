import React from 'react'
import { Box, Stack , Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

function SimilarExercises({equipmentExercises,targetMuscleExercises ,target ,equipment}) {
  return (
    <Box sx={{mt:{lg:'100px' , xs:'0px'}}} p='20px'>
      <Typography variant='h4' mb='33px'>
        Other Exercises that target <span style={{color:'#ff2626' , textTransform:'capitalize'}}>{target}</span>.
      </Typography>
      <Stack direction='row' sx={{p:'2' , position:'relative' ,mb:{lg:'50px' , xs:'15px'}}}>
        {targetMuscleExercises? <HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
      </Stack>
      <Typography variant='h4' mt='24px' mb='33px'>
        Other Exercises using <span style={{color:'#ff2626' , textTransform:'capitalize'}}>{equipment}</span>.
      </Typography>
      <Stack direction='row' sx={{p:'2' , position:'relative'}}>
        {equipmentExercises? <HorizontalScrollBar data={equipmentExercises}/>:<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises