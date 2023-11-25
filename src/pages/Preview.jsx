import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material'
import {  useNavigate } from 'react-router-dom'

const Preview = ({imgSrc , setImgSrc}) => {
const navigate = useNavigate()
useEffect(() => {
    
  
    if(!imgSrc){
      navigate("/")
    }
    }, [imgSrc, navigate]);
  return (
    <div className='preview'>
    <Typography variant="body1" color="initial">Preview OF Image</Typography>
    <Stack sx={{height : "100%", gap: "2vmax"}}>
      <img src={imgSrc} alt="" />

<Stack sx={{display : "flex", gap: "2vmax"}}>
      <Button variant='contained' type='button' onClick={() => {navigate("/") ; setImgSrc(null)}}  >
      Change Photo
      </Button>
      <Button type='button' variant='contained' onClick={() => navigate("/select-Frame")}  >
Continue
      </Button>

</Stack>
    </Stack>
    </div>
  )
}

export default Preview
