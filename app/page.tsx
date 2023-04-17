import Image from 'next/image'
import Hero from '@components/hero'
import { Lexend } from '@next/font/google'
import Desc from '@components/desc'
import Who from '@components/who'
import Who_a from '@components/who_a'
import Abilities from '@components/abilities'
import Abilities_a from '@components/abilities_a'
import Why from '@components/why'
import Why_a from '@components/why_a'
import Footer from '@components/footer'
import Absolwents from '@components/absolwents'
import Absolwents_a from '@components/absolwents_a'


const inter = Lexend({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='bg-black text-white flex flex-col items-center justify-center gap-10 overscroll-y-none overflow-x-hidden bg-cover' style={{backgroundImage: 'url(bg.svg)'}}>
      <Hero />
      <Who />
      <Who_a />
      <Abilities />
      <Abilities_a />
      <Why />
      <Why_a />
      <Absolwents />
      <Absolwents_a />
      <Footer />
      
    </section>
  )
}
