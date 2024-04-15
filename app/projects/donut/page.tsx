import React from 'react';
import ProjectLayout from '@/components/main/ProjectLayout';
import ProjectInfo from '@/components/main/ProjectInfo';

const ProjectPage = () => {
  return (
    <ProjectInfo
    framework="Python (what a surprise)"
      backend="I am not sure if it really counts as a backend, but I use flask to serve the API for the model"
      lessons="It all begins and ends with the quality of the data. I learned a lot about data preprocessing and how to increase the quality of the data. I also learned about the importance of a good model and how to evaluate it."
      challenges="The model is only as good as the annotaed data. If it was annoted by an OCR, the results will most likely never be better than the results of the OCR"
      projectDescription="My bachelors thesis analyses weather Document Understanding Transformers can improve the accuracy and efficency in data processing. Therfore I created a pipeline that uses the Donut-archiecture to parse data."
      minorDescriptionLeft="In the long term this should be usable by the customer"
      minorDescriptionRight="The fast pace of the environment does pose a challenge to the project as almost every day, new and sometimes better models are released."
      imagePath="/donut.png"/>
  );
};

export default ProjectPage;
