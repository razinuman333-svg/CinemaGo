import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

  const navigate=useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 
    md:px-16 lg:px-36 bg-[url("/hero.jpg")] bg-cover bg-center h-screen'>

      <h1 className='text-5xl md:text-[70px] font-semibold max-w-110'>Superman</h1>

      <div className='flex items-center gap-4'>
        <span>Action | Adventure | Sci-Fi</span>

        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4.5 h-4.5'/> 2025
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
        </div>

      </div>

      <p className='max-w-md text-gray-300'>When Superman gets drawn into conflicts at home and abroad, his actions are questioned, giving tech billionaire Lex Luthor the opportunity to get the Man of Steel out of the way for good. Will intrepid reporter Lois Lane and Superman's four-legged companion, Krypto, be able to help him before it's too late?</p>

      <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull rounded-full font-medium cursor-pointer transition'>
        Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </button>

    </div>
  )
}

export default Hero
