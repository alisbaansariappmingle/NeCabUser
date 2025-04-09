import React from 'react'
import halfcar from "../img/halfcar.png"

const EarnWith = () => {
    return (
        
            <div className="bg-[#e4ffe3] border-y-[10px] border-yellow-500" style={{ borderImage: 'linear-gradient(154deg, #f5c100, #029e5b) 1' }}>
                <div className=" py-16 flex flex-col md:flex-row items-center justify-between">

                    {/* Text Content */}
                    <div className="md:w-1/2 px-20">
                        <p className="text-2xl text-yellow-500 font-semibold mb-2">For Drivers</p>
                        <h2 className="text-4xl font-bold text-black mb-4">DO YOU WANT TO <br /> EARN WITH US</h2>
                        <p className="text-xl text-green-600 mb-6">
                            Join us and start earning with our reliable <br /> platform for drivers.
                        </p>
                        <ul className="text-green-700 font-bold text-lg space-y-2">
                            <li>Luxury cars</li>
                            <li>Fixed price</li>
                            <li>Good application</li>
                            <li>Stable orders</li>
                            <li>Cash payment</li>
                            <li>Minimum fee</li>
                        </ul>
                    </div>

                    {/* Car Image */}
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
                        <img src={halfcar} alt="Taxi Car" className="w-96 object-contain" />
                    </div>

                </div>
            </div>

        
    )
}

export default EarnWith