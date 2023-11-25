import { Button, Container, Stack } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const CustomWebcam = ({imgSrc , setImgSrc}) => {
    const webcamRef = useRef(null);
    const navigate = useNavigate()
    console.log(imgSrc)
    const retake = () => {
        setImgSrc(null);
      };
    const capture = useCallback(() => {

        const img = webcamRef.current.getScreenshot();
        setImgSrc(img);
      }, [setImgSrc]);

      useEffect(() => {
        
        // webcamRef.set({
        //   width: 320,
        //   height: 480,
        //   align:'center',
        //   image_format: 'jpeg',
        //   jpeg_quality: 100
        // });
      }, [imgSrc, navigate]);
  return (
    <Container className="container">
    {imgSrc ? (
      <img src={imgSrc} alt="webcam" />
    ) : (
      <Webcam width={320} height={480 } imageSmoothing  ref={webcamRef} />
    )}
    <Stack sx={{display : "flex", width : "40vw", margin : "auto", gap : "2vmax", marginTop : ".8vmax" }} className="btn-container" >
        {imgSrc ? (
          <Button variant="contained" color="secondary" onClick={retake}>Retake photo</Button>
        ) : (
          <Button variant="contained" color="secondary"  onClick={capture}>Capture photo</Button>
        )}
        <Button disabled={!imgSrc}  type="button" onClick={() => navigate("/preview")}   color='success' variant='contained'>
        Preview
        
        </Button>
      </Stack>
  </Container>
  );
};

export default CustomWebcam;