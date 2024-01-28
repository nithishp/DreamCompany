import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center leading-none border bg-red-600 rounded-full text-white px-7 py-4 font-montserrat text-lg gap-2 '>
        {label}
    {iconURL &&<img src={iconURL} alt="icon" className='ml-2 rounded-full w-5 h-5' />
}
    </button>
  )
}

export default Button