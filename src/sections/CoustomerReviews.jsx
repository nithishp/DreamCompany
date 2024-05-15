import React from 'react'
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'

const CoustomerReviews = () => {
  return (
    <section className='max-container' id='reviews'>
      <h3 className='font-bold text-center text-4xl font-palanquin'>
        What Our <span className='text-red-500'>
          Customer </span>
        Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our satified customer about their expcentional expirence with us
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <ReviewCard
          key={review.customerName}
          imgURL ={review.imgURL}
          customerName ={review.customerName}
          rating = {review.rating}
          feedback = {review.feedback}
          />
        ))}

      </div>
      
    </section>
  )
}

export default CoustomerReviews