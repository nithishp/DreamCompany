import React from 'react'
import Button from '../components/Button'
import {shoe8} from '../assets/images'
import { SuperImage } from '../assets/images'
const SuperQuality = () => {
  return (
    <section  className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        
          <h2 className=' font-palanquin text-4xl capitalize  font-bold max-w-lg '>
          We Provide You
          <span className=' text-red-500'> Dream</span> Jobs
          
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>We provide you with resources necessary to get your dream job. You can get your dream job much easier than ever!!!</p>
        <p className='mt-6 lg:max-w-lg info-text'>So  Register with us as soon as possible to get your dream job.</p>
        <div className='mt-11'>
        <Button  label = "View Details" />
        </div>
        

      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={SuperImage} alt='SuperQualityImage' width={570} height={522} className='object-contain'/>

      </div>
    </section>
  )
}

export default SuperQuality