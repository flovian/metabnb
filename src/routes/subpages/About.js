import React from 'react'

const About = () => {
  return <>
    <div className='px-16 py-12 grid sm:grid-cols-3 gap-3 place-content-center place-items-center bg-gradColor'>
        <div className='col-span-1 text-white font-redRose'>
            <h2 className='text-5xl mb-7'>Metabnb NFTs</h2>
            <p className='mb-8 text-lg'>
                Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTS. These NFTs gives our customer access to loads of our exclusive services.
            </p>
            <div>
                <button className='text-base bg-white rounded-lg px-8 py-2'>
                    <span className='learn-btn'>Learn more</span>
                </button>
            </div>
        </div>
        <div className='col-span-2 order-first sm:order-last'>
            <img className='sm:h-picH h-walletH' src="./images/pics.png" alt="" />
        </div>
    </div>
  </>
}

export default About
