import Image from 'next/image'
import TestLanding from '@components/test-landing'
import { Lexend } from '@next/font/google'
import Desc from '@components/desc'

const inter = Lexend({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='bg-black text-white'>
      <TestLanding />
      <Desc />
    </section>
  )
}
