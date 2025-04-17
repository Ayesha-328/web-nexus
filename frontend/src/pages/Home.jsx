import React from 'react'
import {Hero} from '../components/Hero'
import {Cards} from '../components/Cards'

const Home = () => {
  return (
    <>
    {/* Lofi music */}
    <audio autoPlay loop hidden>
        <source src="/lofi.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    <Hero />
    <Cards />
    </>
  )
}

export default Home