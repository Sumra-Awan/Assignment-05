import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/banner1.jpg)] bg-cover"
      style={{ backgroundSize: "30%", backgroundPosition: "left 80px top 130px" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p> 
            <p data-aos="zoom-in-up">Sumra</p>
            <p data-aos="zoom-in-up">Awan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
