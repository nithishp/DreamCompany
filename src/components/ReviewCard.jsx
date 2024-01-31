import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,feedback,rating}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        
        <img src={imgURL} height={120} width={120} className='rounded-full object-cover' alt="Customer Image" />
        
        <p className='info-text font-montserrat mt-6 w-[70%] text-center'>{feedback}</p>
        <img src={star}/>
        {rating}
        <h3 className='font-bold font-palanquin text-2xl'>{customerName}</h3>

    </div>
  )
}

export default ReviewCard