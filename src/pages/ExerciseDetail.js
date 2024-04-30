import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions , fetchData , videosOptions} from '../utils/fetchData'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseData)
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`,videosOptions)
      setexerciseVideos(exerciseVideoData.contents);
    }

    fetchExerciseData();
  },[id])

  console.log(exerciseVideos)
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail