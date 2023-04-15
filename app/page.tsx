import Image from 'next/image'
import Hero from '@components/hero'
import { Lexend } from '@next/font/google'
import Desc from '@components/desc'
import Who from '@components/who'
import Who_a from '@components/who_a'
import Abilities from '@components/abilities'
import Abilities_a from '@components/abilities_a'

const inter = Lexend({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='bg-black text-white flex flex-col items-center justify-center gap-10' style={{backgroundImage: 'url(bg.svg)'}}>
      <Hero />
      <Desc />
      <Who />
      <Who_a />
      <Abilities />
      <Abilities_a />
    </section>
  )
}
