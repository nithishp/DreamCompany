import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import heroImage from '../persnalAsset/heroImage.png'
import heroImage2 from '../persnalAsset/heroImage2.png'

const Hero = () => {
  return (
    <section id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-none font-bold xl:whitespace-nowrap'>
          <span className='xl:whitespace-nowrap xl:bg-white z-10 pr-10'>Get Your</span>
          <br />
          <span className='text-red-500 inline-block mt-3 '>Dream</span> <span>Company</span>
          
        </h1>
        <p className='mt-6 mb-14 font-montserrat text-slate-gray text-lg sm:max-w-sm'>get Your dream Job that will make your life 100x better!!!</p>
        <Button  label = "Register Now" iconURL = {arrowRight}/>
        <div className='justify-start items-start flex flex-wrap w-full mt-20 gap-16'>
        {statistics.map((item) => (
          <div key={item.label} className='flex flex-col max-sm:flex-auto justify-center items-center'>
            <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
            <p className='text-slate-gray font-montserrat leading-7'>{item.label}</p>
          </div>
        ))
        }
        </div>

      </div>
      <div className="flex flex-1 relative justify-center items-center xl:min-h-screen max-xl:py-40  bg-cover bg-center  ">
        <img src={heroImage2} width={610} height={500} alt='Shoe COllection' className='object-contain relative z-10'/>
      </div>
    </section>
  )
}

export default Hero