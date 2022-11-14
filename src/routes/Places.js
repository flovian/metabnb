import React from 'react'
import Footer from './Footer'
import {IoOptionsOutline} from 'react-icons/io5'
import {AiTwotoneStar} from 'react-icons/ai'

const Places = () => {
    const photos = [
    {
        id: 1,
        url: './images/placesImg/one.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 2,
        url: './images/placesImg/two.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 3,
        url: './images/placesImg/three.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 4,
        url: './images/placesImg/four.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 5,
        url: './images/placesImg/five.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 6,
        url: './images/placesImg/six.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 7,
        url: './images/placesImg/seven.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 8,
        url: './images/placesImg/eight.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 9,
        url: './images/placesImg/nine.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 10,
        url: './images/placesImg/ten.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 11,
        url: './images/placesImg/eleven.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 12,
        url: './images/placesImg/twelve.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 13,
        url: './images/placesImg/thirteen.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 14,
        url: './images/placesImg/fourteen.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 15,
        url: './images/placesImg/fifteen.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 16,
        url: './images/placesImg/sixteen.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
  ]
  return <>
    <div className='mt-5'>
        <div className='mx-16 mb-8 grid gap-3 grid-cols-2 md:grid-cols-10'>
            <span className='sectionBtn'>Restaurant</span>
            <span className='sectionBtn'>Cottage</span>
            <span className='sectionBtn'>Castle</span>
            <span className='sectionBtn'>fantast city</span>
            <span className='sectionBtn'>beach</span>
            <span className='sectionBtn'>Carbins</span>
            <span className='sectionBtn'>Off-grid</span>
            <span className='sectionBtn'>Farm</span>
            <span className='col-span-2 sm:col-span-1 md:col-span-2 py-1 px-3 rounded-lg border-2 border-tertiary text-xs flex items-center'>
                <input className='w-5/6 focus:outline-0' type="search" name="search" id="search" placeholder='Location' />
                <label htmlFor="search"><IoOptionsOutline /></label>
            </span>
        </div>
        <div className='imageCard mb-12'>
            {
                photos.map(photo => {
                    const {id,url,name,price,distance,duration} = photo
                    return <>
                        <div className='border-2 border-tertiary rounded-xl p-2 h-92 font-redRose text-xs' key={id}>
                            <img className='h-3/4 w-full' src={url} alt={name} />
                            <div className='flex items-center justify-between gap-2 mt-4'>
                                <div className='flex flex-col justify-between text-xs'>
                                    <p className='mb-2 text-xs semiLg:text-s4 midLg:text-xs'>{name}</p>
                                    <p className='text-xs sm:text-s1 semiLg:text-s2 midLg:text-s1'>{distance}</p>
                                </div>
                                <div className='flex flex-col justify-between text-right'>
                                    <p className='mb-2 font-bold'>{price}</p>
                                    <p className='text-xs sm:text-s1 semiLg:text-s2 midLg:text-s1'>{duration}</p>
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <span><AiTwotoneStar className='text-secondary-200' /></span>
                                <span><AiTwotoneStar className='text-secondary-200' /></span>
                                <span><AiTwotoneStar className='text-secondary-200' /></span>
                                <span><AiTwotoneStar className='text-secondary-200' /></span>
                                <span><AiTwotoneStar className='text-secondary-200' /></span>
                            </div>
                        </div>
                    </>
                })
            }
        </div>
        <Footer />
    </div>
  </>
}

export default Places
