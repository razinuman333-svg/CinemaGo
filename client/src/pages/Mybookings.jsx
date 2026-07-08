import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import Blur from '../components/Blur'

function Mybookings() {

  const currency=import.meta.env.VITE_CURRENCY
  const [bookings,setBookings]=useState()
  const [isLoading,setIsLoading]=useState(true)


  const getMyBookings=async()=>{
     setBookings(dummyBookingData)
     setIsLoading(false)
  }

  useEffect(()=>{
      getMyBookings()
  },[])

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <Blur top='100px' left='100px'/>
      <div>
        <Blur bottom='0px' left='600px'/>
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>
      {bookings.map((item,index)=>(
        <div key={index} className='flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20
        rounded-lg mt-4 p-2 max-w-3xl'>
          <div className='flex flex-col md:flex-row'>
            <img className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded' src={item.show.movie.poster_path}/>
            <div className='flex flex-col p-4'>
            <p>{item.show.movie.title}</p>
            </div>

          </div>

        </div>
      ))}
      
    </div>
  ) : (
    <Loading/>
  )
}

export default Mybookings
