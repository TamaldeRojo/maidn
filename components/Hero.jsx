// import React from 'react'
// import Slider from 'react-slick'
'use client'
import Slider from "react-slick";
import Slide from "./Slide"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Hero() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
      };

      const slideData = [
        {
            id: 2,
            img: "/banner.png",
            title: "maybe2",
            mainTitle: "maybe2",
            price: "300",
        },
        {
            id: 3,
            img: "/banner2.png",
            title: "maybe2",
            mainTitle: "maybe2",
            price: "300",
        }
      ]

    
  return (
    <div>
        <div className="container pt-6 lg:pt-0 block">
            
    <Slider {...settings}> {slideData.map((item)=> (
        <Slide 
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
        />
    ))} </Slider>
        </div>
    </div>
  )
}

export default Hero