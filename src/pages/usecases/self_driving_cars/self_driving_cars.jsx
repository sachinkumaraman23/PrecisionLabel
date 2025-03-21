import React from 'react'
import face_recognition from '../../../assets/sdc1.jpg'
import face_recognition2 from '../../../assets/sdc2.jpg'
import "../../../style/usecases.css";

const Self_driving_cars = () => {
  return (
    <div className="use">
      <header className='header'>
      <div className="usecase">
        <h1>Self Driving Cars</h1>
        <p>Precision Label</p>
      </div></header>
    <div className="recognition-container">
  <div className="image-section">
    <img className='img1 imgsec' src={face_recognition} alt="Facial Recognition" />
    <img className='img2 imgsec' src={face_recognition2} alt="Facial Recognition" />

  </div>
  <div className="text-section">
    {/* <div className='head'><h1><div className='blue'>Self</div> Driving Cars</h1></div> */}
    <div className="Pcontent">
    Artificial intelligence (AI) is revolutionizing the development of self-driving cars, making autonomous vehicles a reality. By integrating advanced machine learning algorithms, AI enables these cars to perceive their surroundings, interpret complex data from sensors like cameras, LiDAR, and radar, and make real-time decisions to navigate safely and efficiently. AI systems in self-driving cars continuously learn and adapt from vast amounts of driving data, improving their ability to handle diverse road conditions, recognize obstacles, and predict the actions of other road users. This technological advancement promises to enhance road safety, reduce traffic congestion, and provide greater mobility options, particularly for those unable to drive. However, challenges remain, including ensuring robust safety standards, addressing ethical considerations, and achieving widespread public acceptance.
    </div>
     
    <p className='quest'><strong>How  does the AI in<span style={{backgroundColor:"rgb(179, 179, 247)" ,paddingLeft:"1vh",paddingRight:"1vh"}}> self-driving cars </span>  works?</strong></p>
    <p>
    AI in self-driving cars uses sensors and cameras to gather data about the environment. It processes this data with machine learning algorithms to recognize objects, interpret road conditions, and make driving decisions, enabling the car to navigate safely and autonomously.

    </p>
  </div>
</div>
</div>
  )
}

export default Self_driving_cars