import React from 'react'
import { Box , Typography , Stack } from '@mui/material'

function ExerciseVideos({exerciseVideos, name}) {
  // console.log(exerciseVideos)
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p='20px'>
      <Typography variant='h4'  mb="33px"> Watch <span style={{color:'#ff2626' , textTransform:'capitalize'}}>{name}</span> exercise videos. </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
      sx={{direction:{lg:'row'},gap:{lg:'110px' ,xs:'0px'}}}>
         {exerciseVideos?.slice(0,5).map((item , index)=>(
          <a key={index} className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='blank' rel='norefferer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color='#000'>
                {item.video.title.slice(0,25)}
              </Typography>
              <Typography variant='h8' color='#000'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
         ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos