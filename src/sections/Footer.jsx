import React from 'react'
import favicon from '../persnalAsset/logo-wbg.png'
import {socialMedia} from '../constants'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex flex-wrap items-start justify-between gap-20 max-lg:flex-col'>
    <div className='flex flex-col items-start'>
    <a href="/"><img src={favicon} height={70} width={70}/></a>
      <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>@ Developed & Designed by Nithish</p>
    <div className='flex items-center gap-5 mt-8'> 
    {socialMedia.map((icon)=>(
<div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
<img src={icon.src}
alt = {icon.alt}
width={24}
height={24}
onClick={()=>(window.open(icon.href))}
/>

</div>

    ))}

    </div>
    </div>


      </div>
      
    </footer>
  )
}

export default Footer