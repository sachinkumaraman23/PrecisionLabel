import React from 'react'
import face_recognition from '../../../assets/ds.jpg'
import face_recognition2 from '../../../assets/ds2.jpg'
import '../../../style/usecases.css'
const Drone_satellites = () => {
  return (
    <div className="use">
      <header className='header'>
      <div className="usecase">
        <h1>AI in Drones and Satellites</h1>
        <p>Precision Label</p>
      </div></header>
    <div className="recognition-container">
  <div className="image-section">
    <img className='img1 imgsec' src={face_recognition} alt="Facial Recognition" />
    <img className='img2 imgsec' src={face_recognition2} alt="Facial Recognition" />

  </div>
  <div className="text-section">
    {/* <div className='head'><h1><div className='blue'>AI in Drones and</div> Satellites</h1></div> */}
    <div className="Pcontent">
    AI in drone satellites is transforming the capabilities and efficiency of these high-tech devices. By leveraging machine learning algorithms, AI enables drone satellites to autonomously process vast amounts of data from onboard sensors and cameras. This capability allows them to make real-time decisions for tasks such as adjusting flight paths, avoiding obstacles, and optimizing energy use. In applications ranging from Earth observation to communication and disaster monitoring, AI-driven drone satellites can analyze environmental conditions, detect changes, and respond promptly without human intervention.    </div>
    <p className='quest'><strong>How  does the AI in<span style={{backgroundColor:"rgb(179, 179, 247)" ,paddingLeft:"1vh",paddingRight:"1vh"}}> drones, satellites </span>  works?</strong></p>
    <p>
    AI in drone satellites processes data from onboard sensors and cameras to navigate and perform tasks autonomously. It uses machine learning algorithms to analyze environmental data, adjust flight paths, and make real-time decisions, ensuring efficient operation for tasks like Eˀarth observation, communication, and disaster monitoring
    </p>
  </div>
</div>
</div>
  )
}

export default Drone_satellites