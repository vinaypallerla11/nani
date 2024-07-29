import React from 'react';
import ReactPlayer from 'react-player';
import './Birthdays.css'; // Ensure the path is correct

const Birthday = ({ videoUrl }) => {
  return (
    <div className='container'>
      <div className='card'>
        <h1 className='head'>May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday bangaram!</h1>
        <hr className='horizantal'/>
          <div className='line'>
            <img src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1722248889/img2_txmh79.webp" alt="pic" className='pic'/>
            <img src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1722248889/img2_txmh79.webp" alt="pic" className='pic'/>
            <img src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1722248889/img2_txmh79.webp" alt="pic" className='pic'/>
          </div>
        <div className='rotate'>
            <div>
                {videoUrl && (
                    <ReactPlayer className="video" url={videoUrl} controls={true} />
                )}
            </div>
             <div>
                <h1 className='heading'>Happy Birthday Bangaram </h1>
                <p className='para'>You deserve all the happiness in the world, <br/>and I'm honored to be a part of your journey. <br/> Happy Birthday, my love!"On your special day<br/> and always, I'm grateful for the love and <br/>light you bring to my life.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Birthday;
