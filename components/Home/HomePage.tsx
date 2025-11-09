import React from 'react'
import Hero from '@/components/Home/Hero/Hero'
import About from '@/components/Home/About/About'
import Skills from '@/components/Home/Skills/Skills'
import Project from '@/components/Home/Projects/Project'
import Services from '@/components/Home/Services/Services'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
     <Hero />
     <About />
     <Skills />
     <Project />
     <Services />
    </div>
  )
}

export default HomePage