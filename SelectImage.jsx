import {  Box } from '@mui/joy'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import {  Button } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/joy/Snackbar';
import { PlaylistAddCheckCircleRounded, Timelapse } from '@mui/icons-material';

const SelectImage = () => {
    const [open, setOpen] = React.useState(false);
const navigate = useNavigate();

            const handleDownloadImage = () => {
             
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();
                img.src = selectedImage;
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const frame = new Image();
                    frame.src = selectFrame;
                    frame.onload = () => {
                        ctx.drawImage(frame, 0, 0, img.width-20, img.height-20);
                        const link = document.createElement('a');
                        link.download = 'image.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    };
                };
       
            };
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectFrame, setSelectFrame] = useState(null);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };
        console.log(selectedImage)

        reader.readAsDataURL(file);
    };

    const handleCaptureImage = () => {
       setOpen(true)
    };

    useEffect(() => {
        const res = localStorage.getItem('selectedFrame');
        if (res) {
            setSelectFrame(res);
        }
    }, []);
    const handleGoBack = () => {
        localStorage.clear();
        navigate("/select-frames") 
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor : '#e3c7c5', width : '100vw' }}>
<Button sx={{ my : 'auto',  }} onClick={handleGoBack} variant='solid' color='danger' >
    Go Back
</Button>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%',my : 'auto'  }}>
                        {selectFrame && <img style={{ height: '30vmax', width: '30vmax', zIndex: 1, position: 'absolute' }} src={selectFrame} alt="Selected Frame" />}
                        {
                            selectedImage && 
                        <img style={{ height: '28vmax', width: '28vmax', zIndex: 0,  }} src={selectedImage} alt="Selected Image" />
                        }
                       
                    </Box>
          <Box sx={{  display : 'flex', flexDirection : {xs : 'column', md : 'row'}, gap : 2, mx : 'auto', my : 'auto'}}>

            <Button variant="soft" color='danger'   component="label">
                Select Image
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageSelect} />
            </Button>
            <Button disabled={!selectedImage} variant="soft" color='danger' onClick={handleDownloadImage}>
                        Download Combined Image
                    </Button>
            <Button variant="soft" color='danger'  onClick={handleCaptureImage}>
                Capture Image
            </Button>
          </Box>
          <Snackbar
        variant="soft"
        color="danger"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        startDecorator={<Timelapse />}
        endDecorator={
          <Button
            onClick={() => setOpen(false)}
            size="sm"
            variant="soft"
            color="danger"
          >
            Dismiss
          </Button>
        }
      >
        Coming soon
      </Snackbar>
        </Box>
    );
};

export default SelectImage
