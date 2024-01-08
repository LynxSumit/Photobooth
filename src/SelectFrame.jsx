import { Box, Button } from '@mui/joy';
import React from 'react';
import R1 from './assets/R1.png'
import R2 from './assets/R2.png'
import R3 from './assets/R3.png'
import S1 from './assets/S1.png'
import S2 from './assets/S2.png'
import S3 from './assets/S3.png'
import right from './assets/right.png'
import left from './assets/left.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SelectFrame() {
    const navigate= useNavigate();
    const [currentFrame, setCurrentFrame] = useState(0);

const handleClick = () => {
    const selectedFrame = Object.values(frames)[currentFrame];
  
    localStorage.setItem('selectedFrame', selectedFrame.src);
    navigate("/select-image");
};
    const handleNextFrame = () => {
        setCurrentFrame((prevFrame) => (prevFrame + 1) % Object.values(frames).length);
    };

    const handlePrevFrame = () => {
        setCurrentFrame((prevFrame) => (prevFrame - 1 + Object.values(frames).length) % Object.values(frames).length);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: 'row', alignItems: 'center', height: '100vh',backgroundColor : '#e3c7c5', width : '100vw' }}>
            <Box sx={{my: 'auto', display: 'flex', justifyContent: 'center', overflowX: 'scroll', width: '100%' }}>
                <Button color='neutral' sx={{ marginRight: '10px',height : 'fit-content' , my : 'auto',textAlign: 'center', backgroundColor: 'transparent'}} onClick={handlePrevFrame}>
                    <img src={left} alt="Previous" style={{ height: "40px", width: "40px" }} />
                </Button>
                <img
                onClick={handleClick}
                    src={Object.values(frames)[currentFrame].src}
                    alt={Object.values(frames)[currentFrame].name}
                    style={{ height: "30vmax", width: "30vmax", margin: "10px" }}
                />
                <Button color='neutral' sx={{ marginLeft: '10px',height : 'fit-content' , my : 'auto',textAlign: 'center', backgroundColor: 'transparent'}} onClick={handleNextFrame}>
                    <img src={right} alt="Next" style={{ height: "40px", width: "40px" }} />


                </Button>
            </Box>
        </Box>
    );
}

export default SelectFrame;

const frames ={
    frame1: {
        name: "frame1",
        src: R1
    },
    frame2: {
        name: "frame1",
        src: R2
    },
    frame3: {
        name: "frame1",
        src: R3
    },
    frame4: {
        name: "frame1",
        src: S1
    },
    frame5: {
        name: "frame1",
        src: S2
    },
    frame6: {
        name: "frame1",
        src: S3
    },
}
