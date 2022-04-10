import React from 'react'
import Hero from '../components/Hero/Hero'
import TopBar from '../components/TopBar/TopBar'

function Home() {
  return (
    <div className="App">

    <div className='container polka-dot '>

      <div className='container__LandingCard'>
        <TopBar />
        <Hero />
      </div>



    </div>

    

  </div>
  )
}

export default Home