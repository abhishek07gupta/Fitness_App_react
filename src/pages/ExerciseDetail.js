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
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseData)
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`,videosOptions)
      setexerciseVideos(exerciseVideoData.contents);
      const targetMuscleData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseData.target}`,exerciseOptions)
      setTargetMuscleExercises(targetMuscleData)
      const equipmentData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseData.equipment}`,exerciseOptions)
      setEquipmentExercises(equipmentData)
    }

    fetchExerciseData();
  },[id])
  
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} target={exerciseDetail.target} equipment={exerciseDetail.equipment}/>
    </Box>
  )
}

export default ExerciseDetail