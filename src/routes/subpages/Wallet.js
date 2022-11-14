import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

const Wallet = ({setOpen}) => {
  return <>
    <div className='fixed z-50 left-0 top-0 w-full h-screen bg-black bg-opacity-60 grid place-content-center place-items-center'>
        <div className='h-walletH w-walletW bg-white rounded-lg shadow-tertiary shadow-md font-redRose scale-60 sm:scale-75 md:scale-100'>
            <div className='flex justify-between pt-8 pb-4 px-6'>
                <span className='font-bold text-2xl'>Connect Wallet</span>
                <button onClick={()=>setOpen(false)}><IoMdClose /></button>
            </div>
            <div className='px-8 py-4 flex flex-col gap-4'>
                <p>Choose your preferred wallet:</p>
                <div className='flex flex-col gap-4'>
                    <div className='px-3 py-3 flex justify-between items-center gap-32 bg-wimp-100 rounded-xl border border-wimp-200'>
                        <span className='flex items-center gap-4'>
                            <span>
                                <img src="./images/metamask-color.png" alt="Metamask" />
                            </span>
                            <span className='text-lg font-semibold'>Metamask</span>
                        </span>
                        <span><AiOutlineRight /></span>
                    </div>
                    <div className='px-3 py-3 flex justify-between items-center gap-32 border border-wimp-200 rounded-xl'>
                        <span className='flex items-center gap-4'>
                            <span>
                                <img src="./images/walletconnect.png" alt="WalletConnect" />
                            </span>
                            <span className='text-lg font-semibold'>WalletConnect</span>
                        </span>
                        <span><AiOutlineRight /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Wallet
