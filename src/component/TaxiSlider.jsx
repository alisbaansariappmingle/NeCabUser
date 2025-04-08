// TaxiSlider.jsx
import React from 'react';
// import Slider from 'react-slick';
import taxiImage from '../img/banner3.jpg'; // Replace with your actual image path

const TaxiSlider = () => {
  

  return (
    <div className="mt-2 px-1">
     
        <div className="rounded-xl overflow-hidden">
          <img
            src={taxiImage}
            alt="Taxi Slide"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
     
    </div>
  );
};

export default TaxiSlider;
