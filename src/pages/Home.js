import React from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SeachExercise from '../components/SeachExercise'

function Home() {
  return (
    <Box>
      <HeroBanner/>
      <SeachExercise/>
      <Exercises/>
    </Box>
  )
}

export default Home