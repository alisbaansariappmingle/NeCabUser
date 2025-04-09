import React from 'react';
import cardimg1 from '../img/card2img1.jpg'; // City rides image
import cardimg2 from '../img/card2img2.jpg'; // Outstation image

const Welcome = () => {
  const welcomeservice = [
    {
      img: cardimg1,
      title: "City rides",
      desc: "Offer your fare Agree on a fair price directly with a driver"
    },
    {
      img: cardimg2,
      title: "Outstation",
      desc: "Comfortable rides to other cities: on your schedule and for a fair fare"
    }
  ];

  return (
    <section className='bg-[#e4ffe3] text-center px-4 py-10'>
      <h3 className='text-2xl font-bold text-black'>Welcome</h3>
      <h2 className='text-xl md:text-3xl font-bold text-yellow-500 mt-2'>ONE APP, MANY SERVICES</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto mt-10 '>
        {welcomeservice.map((item, index) => (
          <div
            key={index}
            className='bg-[#f0ffe8] py-12 shadow-md hover:shadow-md transition-shadow duration-300 rounded-xl p-4 w-full max-w-sm mx-auto flex flex-col items-center hover:shadow-yellow-200'
          >
            <img src={item.img} alt={item.title} className="w-40 h-32 object-contain rounded-md mb-4 bg-white" />
            <h4 className='text-xl font-bold text-black mb-2'>{item.title}</h4>
            <p className='text-green-600 text-sm'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Welcome;
