import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import heroImage from '../persnalAsset/heroImage.png'
import heroImage2 from '../persnalAsset/heroImage2.png'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
       
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-none font-bold xl:whitespace-nowrap'>
          <span className='xl:whitespace-nowrap xl:bg-white z-10 pr-10'>Get Your</span>
          <br />
          <span className='text-red-500 inline-block mt-3 '>Dream</span> <span>Company</span>
          
        </h1>
        <p className='mt-6 mb-14 font-montserrat text-slate-gray text-lg sm:max-w-sm'>get Your dream Job that will make your life 100x better!!!</p>
        <Link to='/register'>
        <Button  label = "Register Now" iconURL = {arrowRight}/>
        </Link>
        <div className='justify-start items-start flex flex-wrap w-full mt-20 gap-16'>
      
          <div  className='flex flex-col max-sm:flex-auto justify-center items-center'>
            <p className='text-4xl font-palanquin font-bold'><CountUp start={0} end={32} duration={2} delay={0}/>+</p>
            <p className='text-slate-gray font-montserrat leading-7'>Shop</p>
          </div>
          <div  className='flex flex-col max-sm:flex-auto justify-center items-center'>
            <p className='text-4xl font-palanquin font-bold'><CountUp start={0} end={97} duration={2} delay={0}/>+</p>
            <p className='text-slate-gray font-montserrat leading-7'>Brands</p>
          </div>
          <div  className='flex flex-col max-sm:flex-auto justify-center items-center'>
            <p className='text-4xl font-palanquin font-bold'><CountUp start={0} end={157} duration={2} delay={0}/>+</p>
            <p className='text-slate-gray font-montserrat leading-7'>Clients</p>
          </div>
        
        </div>

      </div>
      <div className="flex flex-1 relative justify-center items-center xl:min-h-screen max-xl:py-40  bg-cover bg-center  ">
        <img src={heroImage2} width={610} height={500} alt='Shoe COllection' className='object-contain relative z-10'/>
      </div>
    </section>
  )
}

export default Hero