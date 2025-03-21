import { BrowserRouter, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Contact from "./pages/contact";


import Audio from "./pages/services/audio/audio";
import Image from "./pages/services/image/image";
import Text from "./pages/services/text/text";
import Video from "./pages/services/video/video";


import Drone_satellites from "./pages/usecases/drone_satellites/drone_satellites";
import Facial_recognitio from "./pages/usecases/facial_recognition/facial_recognition";
import Self_driving_cars from "./pages/usecases/self_driving_cars/self_driving_cars";
import Video_motion_tracking from "./pages/usecases/video_motion_tracking/video_motion_tracking";
import Sports_annotation from "./pages/usecases/sports_annotation/sports_annotation";

function App() {
  return (
    
        <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Header/><Home/><Footer/></>}/>
            <Route path="/audio" element={<><Header/><Audio/><Footer/></>}/>
            <Route path="/image" element={<><Header/><Image/><Footer/></>}/>
            <Route path="/text" element={<><Header/><Text/><Footer/></>}/>
            <Route path="/video" element={<><Header/><Video/><Footer/></>}/>
            <Route path="/drone_satellites" element={<><Header/><Drone_satellites/><Footer/></>}/>
            <Route path="/facial_recognitio" element={<><Header/><Facial_recognitio/><Footer/></>}/>
            <Route path="/Self_driving_cars" element={<><Header/><Self_driving_cars/><Footer/></>}/>
            <Route path="/Video_motion_tracking" element={<><Header/><Video_motion_tracking/><Footer/></>}/>
            <Route path="/Sports_annotation" element={<><Header/><Sports_annotation/><Footer/></>}/>
            <Route path="/contact" element={<><Header/><Contact/><Footer/></>}/>
          </Routes>   
        </BrowserRouter>
      </div>
    
  );
}

export default App;