import { FaPhoneAlt } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa";
import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaPhoneAlt size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
      title: "24x7 Helpline",
      description: (
        <>
          Available to help you at any moment: <br />
          <span className="font-semibold">3456765443</span>
        </>
      ),
    },
    {
      icon: <FaRupeeSign size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
      title: "No Extra KMs Charge",
      description:
        "We do not charge based on KMs. No extra fare. Get peace of mind so drivers don’t overcharge by detouring.",
    },
    {
      icon: <FaTaxi size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
      title: "Assured Cab",
      description:
        "If you have Booking Confirmation, rest assured you will get cab.",
    },
    {
      icon: <FaSatelliteDish size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
      title: "GPS Enabled",
      description:
        "Each Cab is GPS Enabled. Now track cab as they arrive to pick you up.",
    },
    {
        icon: <FaSatelliteDish size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
        title: "Dedicated Cab",
        description:
          "just for you",
      },
      {
        icon: <FaSatelliteDish size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
        title: "Home Pickup & Drop",
        description:
          "Your pick-up address can be anywhere in pick-up city and drop address can be anywhere in destination city including Airport.",
      },
      {
        icon: <FaSatelliteDish size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
        title: "On-Time Cab",
        description:
          "Using Predictive Algorithm using GPS and Traffic Conditions, each cab is tracked for On-Time Arrival. ",
      },
      {
        icon: <FaSatelliteDish size={40} className="text-yellow-500 mb-3 border-2 p-2 rounded-full" />,
        title: "Multi Payment Options",
        description:
          "By Cash at the end of Journey or Pre-Pay via Net-Banking, Credit Card, PayTM wallet plus many more.",
      },
  ];

  return (
    <div className="py-12 px-4 bg-white text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-gray-700">
            {feature.icon}
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
