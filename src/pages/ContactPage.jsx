import React from 'react'
import Contact from '../components/Contact/Contact'
import TopBar from '../components/TopBar/TopBar'

function ContactPage() {
  return (
    <div className="App">

    <div className='container polka-dot '>

      <div className='container__LandingCard'>
        <TopBar />
        <Contact />
      </div>



    </div>

    

  </div>
  )
}

export default ContactPage