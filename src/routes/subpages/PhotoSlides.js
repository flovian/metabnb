import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'

const PhotoSlides = () => {
  const photos = [
    {
        id: 1,
        url: './images/photoslides/one.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 1,
        url: './images/photoslides/two.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 1,
        url: './images/photoslides/three.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 1,
        url: './images/photoslides/four.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 1,
        url: './images/photoslides/five.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 1,
        url: './images/photoslides/six.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 1,
        url: './images/photoslides/seven.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
    {
        id: 1,
        url: './images/photoslides/eight.png',
        name: 'Desert king',
        price: '1MBT per night',
        distance: '2345km away',
        duration: 'available for 2weeks stay'
    },
  ]
  return <>
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
  </>
}

export default PhotoSlides
