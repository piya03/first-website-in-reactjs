import React from 'react';
import './popularitems.css'
import Card from './card.js'
import Label from './label.js'
import Button from './button'

// const backgroundImg = ['https://contents.mediadecathlon.com/p794205/k$836490da73ca440fc752e1f831a3e5dc/soft-140-summer-men-s-active-walking-shoes-black-white.jpg?&f=800x800',
//   'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/6a8f277daf5f4748a739a998016785f4_9366/Asweerun_Shoes_White_F36340_01_standard.jpg',
//   'https://rukminim1.flixcart.com/image/714/857/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p36fkykfjqt.jpeg?q=50',
//   'https://dks.scene7.com/is/image/GolfGalaxy/18BROWGHST11XXXXXFTW_Black_Pink_Blue?wid=1080&fmt=jpg'
// ];

const cardsData = [{
  productName: "nike shoes",
  discription: "this is nike shoes",
  url: 'https://contents.mediadecathlon.com/p794205/k$836490da73ca440fc752e1f831a3e5dc/soft-140-summer-men-s-active-walking-shoes-black-white.jpg?&f=800x800',

},
{
  productName: "addidas shoes",
  discription: "this is addidas shoes",
  url: 'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/6a8f277daf5f4748a739a998016785f4_9366/Asweerun_Shoes_White_F36340_01_standard.jpg',
},
{
  productName: "khadim shoes",
  discription: "this is khadim shoes",
  url: 'https://rukminim1.flixcart.com/image/714/857/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p36fkykfjqt.jpeg?q=50',

},
{
  productName: "puma shoes",
  discription: "this is puma shoes",
  url: 'https://dks.scene7.com/is/image/GolfGalaxy/18BROWGHST11XXXXXFTW_Black_Pink_Blue?wid=1080&fmt=jpg',

}

];



function PopularItems() {
  return (
    <div className='popularItem-container '>
      <div className='popularItem-upper'>
        <Label label='Populer Items' />

        <Button name="View all Items" />
      </div>
      <div className='popularItem-bottom'>

        {cardsData.map((card,index)=>{
          return (
            <Card productName={card.productName} discription={card.discription} url={card.url} key={index}/>
          )
        })}
        {/* <Card productName="nike shoes" discription="this is nike shoes" />
        <Card productName="puma shoes" discription="this is puma shoes" />
        <Card productName="khadim shoes" discription="this is khadim shoes" />
        <Card productName="joe shoes" discription="this is joe shoes" /> */}
      </div>

    </div>
  );
}

export default PopularItems;
