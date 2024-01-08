/* eslint-disable react/no-unescaped-entities */

import { Box, Button, Typography } from "@mui/joy";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectFrame from "./SelectFrame";

import { useNavigate } from "react-router-dom";
import SelectImage from "../SelectImage";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor : '#e3c7c5', width : '100vw'
              }}
            >
              <Button
                onClick={() => navigate("/select-frames")}
                variant="soft"
                color="danger"
                size="lg"
              >
                Let's Go
              </Button>
            </Box>
  )
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage/>
          }
        />
        <Route path="/select-frames" element={<SelectFrame />} />
        <Route path="/select-image" element={<SelectImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
