import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../style/services.css";

const Video = () => {
  const [description, setDescription] = useState('Click on any button to see the description.');

  const updateDescription = (type) => {
    let desc = '';

    switch (type) {
        case 'sentiment':
            desc = 'Bounding boxes in video annotation involve drawing rectangular boxes around objects of interest within each frame of a video. These boxes specify the location and size of the objects. Used for object detection tasks, such as tracking vehicles, people, or animals across frames in a video. It is fundamental for applications like autonomous driving, security surveillance, and activity recognition.';
            break;
        case 'intent':
            desc = 'Polygon annotation involves drawing irregular shapes with multiple connected lines to outline the precise boundaries of objects in a video. This allows for more accurate localization than bounding boxes. Useful for annotating objects with complex shapes, such as buildings, trees, or specific regions in medical videos. It is essential in applications requiring detailed object localization, like satellite imagery analysis and biomedical research.';
            break;
        case 'entity':
            desc = 'Semantic segmentation in video annotation involves classifying each pixel in every frame into a predefined category. This creates a detailed map where each pixel is labeled with the class of the object it belongs to. Applied in tasks that require understanding of the entire scene, such as autonomous driving, where it is necessary to differentiate between road, pavement, vehicles, and pedestrians. It is also used in robotics and video surveillance for scene understanding.';
            break;
        case 'classification':
            desc = 'Keypoint annotation involves marking specific points of interest on objects within video frames. These points usually represent significant features like joints on a human body (e.g., elbows, knees) or facial landmarks (e.g., eyes, nose, mouth). Commonly used in human pose estimation, gesture recognition, and facial recognition. It is critical in sports analysis, animation, and developing interactive systems that respond to human movements.';
            break;
        case 'linguistic':
            desc = '3D cuboid annotation involves drawing three-dimensional boxes around objects in a video to capture their spatial properties and orientation in a 3D space. This annotation provides depth information along with the object location and size. Essential for applications that require understanding of an object position and volume in a 3D space, such as autonomous driving (for recognizing other vehicles and obstacles), robotics, and augmented reality.';
            break;
        default:
            desc = 'Click on any button to see the description.';
            break;
        }

    setDescription(desc);
  };

  return (
    <div className="main-section">
    <header>
      <div className="servies">
        <h1>Video Annotation</h1>
        <p>Precision Label</p>
      </div></header>
      <section className="content">
        <div className="container content-layout">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Comet_and_%27Churymoon%27_ESA19661632.gif/640px-Comet_and_%27Churymoon%27_ESA19661632.gif" alt="Data Annotation Example" />
          <div>
            <h2>Video Annotation</h2>
            <p className="text">Video annotation is the process of adding labels and tags to video data to prepare datasets for training machine learning models. These labels provide information about the content of the video, such as the objects present, their locations, and their movements.
                      Video annotation is used for leaving detailed and accurate feedback on top of your videos to make sure editors know exactly what to work on next. This process can consist of marking, commenting, and providing specific feedback on different aspects of a video. 

                      Annotating videos for feedback purposes serves as a communication tool between reviewers, instructors, or collaborators and the video creator. 
                      
                      On the other hand, by labeling and annotating videos, teams provide the necessary information for training machine learning models to recognize and analyze visual elements within the video frames  
                    </p>
          </div>
        </div>
      </section>
      <section className="types">
        <h2>Annotation Types</h2>
        <div className="annotation-types">
          <button className="btn" onClick={() => updateDescription('sentiment')}>Bounding Boxes</button>
          <button className="btn" onClick={() => updateDescription('intent')}>Polygon Annotation</button>
          <button className="btn" onClick={() => updateDescription('entity')}>Semantic Segmentation</button>
          <button className="btn" onClick={() => updateDescription('classification')}>Keypoint Annotation</button>
          <button className="btn" onClick={() => updateDescription('linguistic')}>3D Cuboid Annotation</button>
        </div>
        <p className="description">{description}</p>
      </section>
    </div>
  );
};

export default Video;
