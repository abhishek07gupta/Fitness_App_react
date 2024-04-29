import React , {useEffect,useState} from 'react'
import { Pagination , Box , Stack , Typography } from '@mui/material'
import { fetchData , exerciseOptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises , setExercises , bodyPart}) {
  console.log(exercises)
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 5
  const indexOfLastExercise = currentPage* exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate=(e,value)=>{
    setCurrentPage(value);

    window.scroll({top:1800 , behavior: 'smooth'})
  }
  useEffect(()=>{
    const fetchExerciseDatta= async()=>{
      let exerciseData = []

      if(bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=50', exerciseOptions);
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10`, exerciseOptions);

      }
      setExercises(exerciseData);
    }
    fetchExerciseDatta();
  },[bodyPart])
  return (
    <Box id="exercises"
    mt='50px'
    p='20px'
    sx={{mt:{lg:'110px'}}}
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'
      sx={{gap:{lg:'110px' , xs:'50px'}}}
      >
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length> exercisesPerPage && (
          <Pagination  
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises