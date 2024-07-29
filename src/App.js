import React from 'react';
import './App.css';
import Birthday from './Birthday';

function App() {
  const videoUrl = "https://res.cloudinary.com/ddehbjyiy/video/upload/v1722252547/video_wf3vbi.mp4";
  return (
    <div className=''>
      <div className="App">
        <Birthday  videoUrl={videoUrl} />
      </div>
    </div>
    
  );
}

export default App;
