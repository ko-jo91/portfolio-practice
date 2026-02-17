import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import babe from '../assets/babe.jpg'
import babe1 from '../assets/babe1.jpg'
import babe2 from '../assets/babe2.jpg'
import babe3 from '../assets/babe3.jpg'
import babe4 from '../assets/babe4.jpg'
import babe5 from '../assets/babe5.jpg'


const Home = () => {
  let datum = [
    {
      id: 1,
      photo: babe,
      name: 'Baiden',
      profession: 'Data Analyst',
      review: 'Kojo always does amazing work for my projects. Never a dull moment.'
    },
    {
      id: 2,
      photo: babe1,
      name: 'Sophi',
      profession: 'Developer',
      review: 'His websites are always functional and you get what you asked for.'
    },
    {
      id: 3,
      photo: babe2,
      name: 'Abigail',
      profession: 'Tester',
      review: 'Employing the services of Kojo has always been one of my best decisions with regards to my E-Commerce site.'
    },
    {
      id: 4,
      photo: babe3,
      name: 'Titi',
      profession: 'Backend Developer',
      review: 'I collaborate with Addo and I must say, working with him is always a brezze with no roadblocks😙.'
    },
    {
      id: 5,
      photo: babe4,
      name: 'Bunny',
      profession: 'QA Manager',
      review: 'I can attest to the exceptional services when I employed Mr. Acquah.'
    },
    {
      id: 6,
      photo: babe5, 
      name: 'Stacey',
      profession: 'Software Engineer',
      review: 'Top notch products and delivery from Kojo.'
    }
  ]
  return (
    <div>
      <Hero />
      <div className='bg-linear-to-br from-emerald-300 via-gray-100 shadow-2xl rounded-2xl to-sky-500 h-100 mx-8 sm:mx-15 mb-20 flex justify-center px-20 items-center'>
      <Skills />
      </div>
      <h1 className='text-center text-4xl tracking-tight font-semibold'>Reviews From Peers</h1>
      <div className='mt-10 mb-10 justify-items-center grid grid-cols-1 justify-center px-20 gap-x-16 gap-y-7 md:grid-cols-2 lg:grid-cols-3'>
        {datum.map(data => (<Reviews
          key={data.id}
          photo={data.photo}
          name={data.name}
          profession={data.profession}
          review={data.review} />
        ))}

      </div>

      <Footer />
    </div>
  )
}

export default Home
