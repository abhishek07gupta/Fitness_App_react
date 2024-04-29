import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions , fetchData} from '../utils/fetchData'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({})

  const {id} = useParams();
  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseData = await fetchData(`${exerciseDBUrl}/exercises/${id}`,exerciseOptions)
      setExerciseDetail(exerciseData)
    }

    fetchExerciseData();
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail