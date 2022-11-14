import React from 'react'
import { Link } from 'react-router-dom'
import {IoClose} from 'react-icons/io5'

const Root = ({setShow}) => {
  return <>
    <div className='flex justify-center items-center avg:w-3/4'>
        <nav className='w-full'>
            <ul className='flex flex-col avg:flex-row h-64 avg:h-auto justify-between avg:items-center avg:justify-evenly'>
                <li className='flex avg:items-center justify-between avg:h-full'>
                    <Link onClick={()=>setShow(false)} className='link' to='/'>Home</Link>
                    <button onClick={()=>setShow(false)} className='text-3xl text-white avg:hidden'><IoClose /></button>
                </li>
                <li>
                    <Link onClick={()=>setShow(false)} className='link' to='/places'>Place to Stay</Link>
                </li>
                <li>
                    <Link onClick={()=>setShow(false)} className='link' to='/nfts'>NFTs</Link>
                </li>
                <li>
                    <Link onClick={()=>setShow(false)} className='link' to='/community'>Community</Link>
                </li>
            </ul>
        </nav>
    </div>
  </>
}

export default Root
