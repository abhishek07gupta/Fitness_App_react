import React, { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SeachExercise from '../components/SeachExercise'

function Home() {
  const [bodyPart,setBodyPart] =useState('All')
  const [exercise,setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SeachExercise bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
      <Exercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
    </Box>
  )
}

export default Home