import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (

    <div className='pt-10 bg-gray-900'>
    <hr />
    <div className='flex flex-col items-center'>
    <Image src="/images/transparent-white.png" width={300} height={300} alt="Logo" className='w-[10rem]'/>
    <p>Speckless LLC All Rights Reserved</p>
    </div>
    </div>
  )
}