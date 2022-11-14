import React, { useState } from 'react'
import Footer from './Footer'
import About from './subpages/About'
import PhotoSlides from './subpages/PhotoSlides'
import Wallet from './subpages/Wallet'

const Home = () => {
  return <>
    <div className='mt-44 md:mt-30 lg:mt-5 relative'>
        <header className='mx-10 sm:mx-16 h-100 lg:h-auto grid place-items-center place-content-center lg:grid-cols-2 gap-10'>
            <div className=''>
                <p className='font-redRose text-3xl sm:text-4xl md:text-5.5xl font-bold mb-6'>
                    Rent a <span className='text-secondary-200 capitalize font'>place</span> away from <span className='text-secondary-200 capitalize font'>Home</span> in the <span className='text-secondary-200 capitalize font'>Metaverse</span>
                </p>
                <p className='font-redRose'>
                    We provide you access to luxury and affordable houses in the metaverse, get a chance to turn you imagination to reality at your comfort zone.
                </p>
                <div className='mt-3'>
                    <input className='border-gray-200 border-2 rounded-l-md focus:outline ring-0 h-8 p-1 text-xs w-48' type="search" name="search" id="search" placeholder='Search for location' />
                    <button className='bg-gradColor rounded-r-md p-1 h-8 w-28 text-xs text-white' type="submit">Search</button>
                </div>
            </div>
            <div className='flex lg:h-100 h-100'>
                <div className='flex flex-col gap-3 justify-end mr-3'>
                    <img className='headerImg' src="./images/headerImages/image4.png" alt='' />
                    <img className='headerImg' src="./images/headerImages/image6.png" alt='' />
                </div>
                <div className='flex flex-col gap-3 justify-start'>
                    <img className='headerImg' src="./images/headerImages/image3.png" alt='' />
                    <img className='headerImg' src="./images/headerImages/image5.png" alt='' />
                </div>
            </div>
        </header>
        <main className='lg:mt-0 mt-44'>
            <div className='bg-gradColor mt-5 h-18 w-full flex justify-evenly items-center'>
                <div>
                    <img className='scale-90 md:scale-100' src="./images/mbtoken.png" alt="MbToken" />
                </div>
                <div>
                    <img className='scale-90 md:scale-100' src="./images/metamask.png" alt="METAMASK" />
                </div>
                <div>
                    <img className='scale-90 md:scale-100' src="./images/opensea.png" alt="openSeas" />
                </div>
            </div>
            <div className='my-8 mx-16'>
                <p className='text-2xl sm:text-3xl md:text-5xl font-redRose font-bold text-center'>Inspiration for your next adventure</p>
            </div>
            <PhotoSlides />
            <About />
            <Footer />
        </main>
    </div>
  </>
}

export default Home
