import React from 'react'
import Carousel from '../home/Carousel'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200" id='about'>
      <div className="hero-content flex-col lg:flex-row">
        {/* <img src="https://www.scotaid.org.uk/wp-content/uploads/2022/10/sadqasinglepage-paraimg.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
        <Carousel/>
        <div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6 font-bold">Main aim of this website is to  provide unconditional help to poor and needy in the society by donating leftover food.</p>
          <p className="py-6 font-semibold">Welcome to Warm Hugs, a food donation management web app that connects donors with agents. Our mission is to help reduce food waste and provide meals for those in need.

            We understand the importance of connecting donors with agents who can distribute the donated food to those who require it. Our web app makes it easy for you to donate your surplus food, whether it's from your kitchen, events, or restaurants. Our platform will then connect you with agents who can distribute your donations to local food banks, shelters, and community organizations.

            We believe in the power of community and the impact that we can make when we work together. Every little bit counts, and every meal you donate can bring comfort, hope, and warmth to someone in need. Our goal is to create a better community for all, where everyone has access to nutritious meals.

            Join us today and become a part of the Warm Hugs family. Help make a difference in someone's life and help combat hunger in your community.</p>
          
        </div>
      </div>
      
    </div>
  )
}

export default About