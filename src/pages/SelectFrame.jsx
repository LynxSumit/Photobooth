import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button, ImageList, ImageListItem, Stack } from '@mui/material'
import R1 from "../assets/R1.png"
import R2 from "../assets/R2.png"
import R3 from "../assets/R3.png"
import S1 from "../assets/S1.png"
import S2 from "../assets/S2.png"
import S3 from "../assets/S3.png"
import { useNavigate } from 'react-router-dom'
// import ImageMerger from './ImageMerger'
const SelectFrame = ({selectedFrame, setSelectedFrame}) => {
    // const [] = useState(null);

    const navigate = useNavigate()
  return (
    <div>
<Typography variant="caption" fontSize={"4vmax"} color="GrayText" margin={"10px"} borderBottom={"2px solid gray "}>Choose Frame</Typography>  


<Stack sx={{display :"flex",justifyContent : "center", flexDirection : {md:"row", sm : "column" },flexWrap : "wrap", margin : "1vmax auto" , width: "auto", height: "auto", padding :"1vmax", border : "1px solid black" }} variant="woven" >
      {itemData.map((item) => (
        <Button key={item.img} onClick={()=> {setSelectedFrame(item.img); navigate("/image-merge") /* localStorage.setItem("frame", selectedFrame) --TODO */ }} >

          <img
           
          style={{margin : "auto", height: 400, width : 400 }} 
            // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}`}
            
            loading="lazy"
          />
        </Button>
      
      ))}
    </Stack>
    {/* <img src={imgSrc}/> */}
   
  </div>
  )
}

export default SelectFrame

const itemData =[
    {
      img:  R1

    },
    {
      img:  R2

    },
    {
      img:  R3

    },
    {
      img:  S1

    },
    {
      img:  S2

    },
    {
      img:  S3

    },

]
