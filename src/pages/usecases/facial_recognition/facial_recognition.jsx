import React from 'react'
import face_recognition from '../../../assets/face_recognition.jpg'
import face_recognition2 from '../../../assets/face3.jpg'
import "../../../style/usecases.css";

const Facial_recognition = () => {
  return (
    <div className="use">
      <header className='header'>
      <div className="usecase">
        <h1>Facial Recognition</h1>
        <p>Precision Label</p>
      </div></header>
  <div className="recognition-container">
  <div className="image-section">
    <img className='img1 imgsec' src={face_recognition} alt="Facial Recognition" />
    <img className='img2 imgsec' src={face_recognition2} alt="Facial Recognition" />

  </div>
  <div className="text-section">
    {/* <div className='head'><h1><div className='blue'>FACIAL</div> RECOGNITION</h1></div> */}
    <div className="Pcontent">
    Facial recognition system is a technology capable of identifying or verifying a person
      from a digital image or a video frame from a video source. The system is being used in
      many ways such as Mobile phones, cybersecurity, checkpoint gates, etc. face including
      videos three divisions like face detection, Face Capture, Face match The face detection
      process is an important process that detects and locates human faces in images &amp; also.
  import Facial_recognition from './facial_recognition';

    </div>
     
    <p className='quest'><strong>How <span style={{backgroundColor:"rgb(179, 179, 247)" ,paddingLeft:"1vh",paddingRight:"1vh"}}> facial recognition</span> technology works?</strong></p>
    <p>
      Computer Vision used for Video Cameras for Face Recognition Computer vision helps
      to conclude actions through a sequence of images or video Computer vision provides
      security through FACE ID advanced technology.
    </p>
  </div>
</div>
</div>


  )
}

export default Facial_recognition