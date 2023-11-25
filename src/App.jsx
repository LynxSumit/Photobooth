import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route, useNavigate, Router, Navigate } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Preview from "./pages/Preview.jsx"
import SelectFrame from "./pages/SelectFrame.jsx"
import CustomWebcam from './components/CustomWebcam.jsx'
import ImageMerger from './pages/ImageMerger.jsx'

function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(null);
  
  useEffect(() => {
  // if(  localStorage.getItem("imgSrc")){
  //   setImgSrc(JSON.stringify(localStorage.getItem("imgSrc")));
  // }  -- TODO
  
  if(!imgSrc){
    <Navigate to={"/"}/>
  }
  }, [imgSrc]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home imgSrc={imgSrc} setImgSrc={setImgSrc}/>} />
      
        <Route path='/click-photo' exact element={ <CustomWebcam imgSrc={imgSrc} setImgSrc={setImgSrc}/>} />
      {imgSrc &&   <Route path='/preview' exact element={ <Preview imgSrc={imgSrc} setImgSrc={setImgSrc}/>} />}
      {   <Route path='/select-Frame/*' exact element={ <SelectFrame setSelectedFrame={setSelectedFrame} />} />}
    {   <Route path='/image-merge' exact element={ <ImageMerger imgSrc={imgSrc} frame={selectedFrame} />} />}

     
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
