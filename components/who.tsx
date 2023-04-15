import React from 'react'
import Image from 'next/image';

type Props = {}

export default function Who({}: Props) {
  return (
    <section className='bg-[#A3A3A3] mx-[20%] rounded-[97px] px-28 py-20 leading-tight flex flex-row justify-between my-0 mt-10 ' id='scrolled'>
        <h1 className='text-[90px] font-extrabold p-0 m-0 w-2/3'>KIM JEST TECHNIK <span className='text-[#535353]'>INFORMATYK?</span></h1>
        <Image
            src='/cursor.svg'
            alt='cursor'
            width={400}
            height={400}

        />
    </section>
  )
}