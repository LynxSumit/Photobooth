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
    <div>
    <Typography variant="body1" color="initial">Preview OF Image</Typography>
      <img src={imgSrc} alt="" height={600}  />
<Stack sx={{display : "flex", width : "40vw", margin : "auto", gap : "2vmax", marginTop : ".8vmax" }}>
      <Button variant='contained' type='button' onClick={() => {navigate("/") ; setImgSrc(null)}}  >
      Change Photo
      </Button>
      <Button type='button' variant='contained' onClick={() => navigate("/select-Frame")}  >
Continue
      </Button>

</Stack>
    </div>
  )
}

export default Preview
