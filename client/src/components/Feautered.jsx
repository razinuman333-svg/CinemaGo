import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Blur from './Blur'

function Feautered() {

    const navigate=useNavigate()

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>


      <div className='relative flex items-center justify-between pt-20 pb-10'>

        <Blur top='0' right='-80px'/>

      <p className='font-medium text-lg text-gray-300'>Now Showing</p>

      <button onClick={()=>navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300'>
        View All
        <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5'/>
      </button>

      </div>
     

      <div></div>

      <div></div>


    </div>
  )
}

export default Feautered
