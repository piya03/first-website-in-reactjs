import React from 'react'
import './banner.css'

// const prevbtn = document.querySelector('.prevbtn')
// const nextbtn = document.querySelector('.nextbtn')
// const imageSlider = document.querySelector('.imageSlider')
// let count = 0;
// prevbtn.addEventListener('click', prevSlide)
// nextbtn.addEventListener('click', nextSlide)
let array = [
    'https://www.fashos.com/pub/media/wysiwyg/home/banner3-22-08.jpg',
    'https://www.fashos.com/pub/media/wysiwyg/home/banner2-22-08.jpg',
    'https://www.fashos.com/pub/media/wysiwyg/home/banner1-22-08.jpg',
]
// function prevSlide (){
  
//   imageSlider.animate([{opacity: '.2'},{opacity:'1'}],
//                      {duration:1000, fill: 'forwards'})
//    if(count === 0){
//     count = array.length;
//   }
//   count--;
//   imageSlider.style.backgroundImage = `url(${array[count]})`
//   console.log(imageSlider)
  
// }
// function nextSlide (){
//   imageSlider.animate([{opacity: '.2'},{opacity:'1'}],
//                      {duration:1000, fill: 'forwards'})
//   if(count ===array.length -1){
//     count =-1;
//   }
//   count++;
//   imageSlider.style.backgroundImage = `url(${array[count]})`
//   console.log(imageSlider)
  
// }

function Banner() {
    const [count,setCount] = React.useState(0)

    const imageSliderRef = React.useRef(null)

    React.useEffect(() => {
        const imageSlider = imageSliderRef.current
        imageSlider.style.backgroundImage = `url(${array[count]})`
    }, [])
    function prevSlide (){
        const imageSlider = imageSliderRef.current
        imageSlider.animate([{opacity: '.2'},{opacity:'1'}],
                           {duration:1000, fill: 'forwards'})
         if(count === 0){
          setCount(array.length - 1);
          imageSlider.style.backgroundImage = `url(${array[array.length - 1]})`
        } else {
            setCount(count - 1)
        imageSlider.style.backgroundImage = `url(${array[count - 1]})`

        }
                console.log(imageSlider)
        
      }

      function nextSlide (){
        const imageSlider = imageSliderRef.current
        imageSlider.animate([{opacity: '.2'},{opacity:'1'}],
                         {duration:1000, fill: 'forwards'})
        console.log("count value in nextSlide", count)
        
        if(count === array.length - 1){
          setCount(0)
          imageSlider.style.backgroundImage = `url(${array[0]})`
        } else {
            setCount(count + 1)
            imageSlider.style.backgroundImage = `url(${array[count + 1]})`
            console.log(imageSlider)
        }
        
       
        
      }
    return (
        <>
            <div className="imageSlider" ref={imageSliderRef}>
                <div className="btn1  prevbtn" onClick={prevSlide} >
                    {"<"}
                </div>
                <div onClick={nextSlide} className="btn1  nextbtn">
                    {">"}
                </div>
                {/* <button type="button" className="btn1  prevbtn" onClick={prevSlide}><i className="fa fa-greater-than"></i></button>
                <button type="button" className="btn1  nextbtn" onClick={nextSlide}><i className="fa fa-greater-than"></i></button> */}
            </div>
        </>
    )
}

export default Banner;