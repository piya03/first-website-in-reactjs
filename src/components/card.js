import React from 'react';



function Card(props) {
  return (
    <div className='card-container'>
      <div className='image-div'
        style={{
          backgroundImage: `url("${props.url}")`
        }}
      >

      </div>
      <div className='text-div'>
        <p className='discription'>{props.discription}</p>
        <p className='product-name'>{props.productName}</p>
      </div>
      <div className='border'></div>
    </div>
  );
}

export default Card;
