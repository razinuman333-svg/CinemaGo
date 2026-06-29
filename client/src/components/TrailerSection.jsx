import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player/youtube'
import Blur from './Blur'

function TrailerSection() {

    const [currentTrailer,setCurrentTrailer]=useState(dummyTrailers[0])
  return (

    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden '>

        <p className='text-gray-300 font-medium text-lg  max-w-[960px] mx-auto'>Trailers</p>
          
          <div className='mt-6 relative '>
            <Blur top='-100px' right='-100px'/>
            <ReactPlayer className='mx-auto max-w-full' width='960px' height='540px' url={currentTrailer.videoUrl} controls={false}/>
          </div>


          <div className=' bg-red-900 group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
            {dummyTrailers.map((trailer)=>(
              <div key={trailer.image} className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300
              transition max-md:h-60 md:max-h-60 cursor-pointer' onClick={()=>setCurrentTrailer(trailer)}>
                <img src={trailer.image} className=''/>

              </div>
              
            ))
          
          
          }

          </div>


      
    </div>
  )
}

export default TrailerSection
