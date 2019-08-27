import React from 'react';
import './popularitems.css'


function Video(props) {
    const url = props.url
  return (
      <div className='video'>
    <iframe width="100%" height="100%" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default Video;
// src="https://www.youtube.com/embed/aBRJUdGdn00"