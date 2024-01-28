import React from "react";
import SpecialOfferImage from '../persnalAsset/SpecialOfferImage.png'
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img src={SpecialOfferImage} width={773} height={687} className="object-contain w-full"/>

      </div>
      <div className='flex flex-1 flex-col'>
        
        <h2 className=' font-palanquin text-4xl capitalize  font-bold max-w-lg '>
        About Our
        <span className=' text-red-500'> Dream</span> Company
        
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'> Dream Company is a leading HR solutions provider committed to helping businesses thrive through effective human resource management. </p>
      <p className='mt-6 lg:max-w-lg info-text'>With a focus on innovation
          and client satisfaction, we deliver tailored HR solutions to meet your unique
          organizational needs.</p>
      <div className='mt-11'>
      <Button  label = "View Details" />
      </div>
      

    </div>
      


    </section>
  );
};

export default SpecialOffer;
