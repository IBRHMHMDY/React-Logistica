import React from 'react'
import { Header, Hero, About, Facts, Services, Features, Pricing, Quote, Team, Testimonials, Footer } from '../../sections';

const Home = () => {
  return (
   <div className="home">
      <Header/>
      <Hero/>
      <About/>
      <Facts/>
      <Services/>
      <Features/>
      <Pricing/>
      <Quote/>
      <Team/>
      <Testimonials/>
      <Footer/>
   </div>
  )
}

export default Home