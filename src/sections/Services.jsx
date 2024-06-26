import React from 'react'
import {services} from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex max-sm:flex-col flex-1 flex-wrap gap-9' id='products'> 
    
    {services.map((items)=>(
      <ServiceCard key ={items.label} label={items.label} subtext={items.subtext} imageURL={items.imgURL}/>
    ))}

    </section>
  )
}

export default Services