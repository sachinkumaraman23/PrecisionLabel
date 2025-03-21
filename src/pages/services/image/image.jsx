import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../style/services.css";

const Image = () => {
  const [description, setDescription] = useState('Click on any button to see the description.');

  const updateDescription = (type) => {
    let desc = '';

    switch (type) {
        case 'sentiment':
            desc = 'Bounding boxes are rectangles drawn over images to identify and locate objects within the image. This annotation type is commonly used in object detection tasks, where the goal is to detect and classify objects within an image.';
            break;
        case 'intent':
            desc = 'Polygon annotation involves drawing precise shapes around objects in images. This method is useful for annotating objects with complex shapes and boundaries, such as buildings, roads, or natural features.';
            break;
        case 'entity':
            desc = 'Semantic segmentation is the process of labeling each pixel in an image with a class. This type of annotation is used in tasks where understanding the context and precise location of objects is important, such as autonomous driving and medical imaging.';
            break;
        case 'classification':
            desc = 'Instance segmentation not only labels each pixel in an image but also distinguishes between different instances of the same object class. This is crucial for tasks that require differentiation between individual objects, such as counting the number of people in a crowd.';
            break;
        case 'linguistic':
            desc = 'Keypoint annotation involves marking specific points on objects within an image. This is often used in applications like pose estimation, facial recognition, and gesture recognition, where understanding the position and movement of key points is essential.';
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
        <h1>Image Annotation</h1>
        <p>Precision Label</p>
      </div></header>
      <section className="content">
        <div className="container content-layout">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Intersection_over_Union_-_object_detection_bounding_boxes.jpg/640px-Intersection_over_Union_-_object_detection_bounding_boxes.jpg" alt="Data Annotation Example" />
          <div>
            <h2>Image Annotation</h2>
            <p className="text">Image annotation is the process of labeling images with metadata, which can include information about objects, boundaries, and other relevant details within the image. This process is essential in training machine learning models, particularly for computer vision tasks such as object detection, image segmentation, and image classification. By providing annotated images, these models can learn to recognize and interpret visual information more accurately.</p>
          </div>
        </div>
      </section>
      <section className="types">
        <h2>Annotation Types</h2>
        <div className="annotation-types">
          <button className="btn" onClick={() => updateDescription('sentiment')}>Bounding Boxes</button>
          <button className="btn" onClick={() => updateDescription('intent')}>Polygons</button>
          <button className="btn" onClick={() => updateDescription('entity')}>Semantic Segmentation</button>
          <button className="btn" onClick={() => updateDescription('classification')}>Instance Segmentation</button>
          <button className="btn" onClick={() => updateDescription('linguistic')}>Keypoint Annotation</button>
        </div>
        <p className="description">{description}</p>
      </section>
    </div>
  );
};

export default Image;
