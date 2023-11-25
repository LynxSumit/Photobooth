import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Webcam from "react-webcam";
import CustomWebcam from '../components/CustomWebcam'
import { Button, ButtonGroup, Input, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  // backgroundColor: "GrayText",
  color : "white",
  marginBottom : "2vmax",
  padding: theme.spacing(1),
}));


const Home = ({imgSrc, setImgSrc}) => {
   const navigate = useNavigate()
   const fileChnageHandler =(e) => {
     
     setImgSrc(e.target.files[0])
    }
   
    const  onFileUpload = (e) => {
      e.preventDefault()
setImgSrc(URL.createObjectURL(imgSrc))
// JSON.parse(localStorage.setItem('imgSrc', imgSrc)) -- TODO
console.log(imgSrc)
navigate("/preview")
    }

   
  return (
    <div className='home'>
   
    <Div>{"Select or Capture Image."}</Div>

               <div id="registerImage">
              
              <Tooltip placement='top' title={imgSrc && imgSrc.name}>
              <Button
              //  onClick={onFileUpload}
  variant="contained"
  component="label"
>
  Upload File
  <input
     type="file"
                name="avatar"
                accept="image/*"
                onChange={fileChnageHandler}
                hidden
  />
</Button>
              </Tooltip>
 
           

            </div>
            
<Button type='button' disabled={!imgSrc} onClick={onFileUpload}  color='success' variant='contained' >Preview</Button>
   
   {
    !imgSrc &&
    <Button   variant="contained"
  component="label" type='button' onClick={() => navigate("/click-photo")} >

Click Photo
    </Button>
   }
<ButtonGroup color="secondary" aria-label="medium secondary button group">
    
      </ButtonGroup>
  
    </div>
  )
}

export default Home
