import React from 'react';
import './popularitems.css'
import Card from './card.js'
import Label  from './label.js'
import Button from './button'
import Video from './video'

const videos = ['https://www.youtube.com/embed/aBRJUdGdn00','https://www.youtube.com/embed/rBKkPsqHijY','https://www.youtube.com/embed/YUBEb_qFbI0']
function LatestVideo() {
  return (
    <div className='latest-video-container popularItem-container'>
      <div className='latest-video-upper popularItem-upper'>
      <Label label="Latest Videos" />

     <Button  name="View More Videos"/>
     </div>
     <div className='all-video'>
         {videos.map((each, index)=>{
             return (
                <Video key={index} url={each}/>

             )
         })}
   

     </div>

    </div>
  );
}

export default LatestVideo;
