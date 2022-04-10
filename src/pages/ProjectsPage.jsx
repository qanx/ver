import React from 'react'
import Projects from '../components/Projects/Projects';
import TopBar from '../components/TopBar/TopBar';

function ProjectsPage() {
  return (
    <div className="App">

    <div className='container polka-dot '>

      <div className='container__LandingCard'>
        <TopBar />
        <Projects/>
      </div>



    </div>

    

  </div>
);
  
}

export default ProjectsPage