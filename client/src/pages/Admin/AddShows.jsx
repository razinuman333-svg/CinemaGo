import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets'
import Loading from '../../components/Loading'
import Text from '../../components/Admin/Text'

function AddShows() {


  const currency=import.meta.env.VITE_CURRENCY
  const [nowPlayngMovies,setNowPlayingMovies]=useState()
  const [selectedMovies,setSelectedMovies]=useState()
  const [dateTimeSelection,setDateTimeSelection]=useState()
  const [dateTimeInput,setDateTimeInput]=useState()
  const [showPrice,setShowPrice]=useState()


  const fetchNowPlayingMovies=()=>{
    setNowPlayingMovies(dummyShowsData)
  }




  useEffect(()=>{
    fetchNowPlayingMovies()
  },[])



  return nowPlayngMovies.length > 0 ? (
    <>

    <Text text1='Add' text2='Shows'/>
      
    </>
  ) : <Loading/>
}

export default AddShows
