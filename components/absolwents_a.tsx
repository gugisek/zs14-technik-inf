import React from 'react'
import Absolwents_post from './absolwents_post'

type Props = {}

export default function Absolwents_a({}: Props) {
    
    const absol = [
        {name: 'Jonatan Dajtrowski 4s', where: 'Polsko - Japońska Akademia Technik Komputerowych w Warszawie', direction: 'Informatyka', option: 'left'},
        {name: 'Kamil Socha 4s', where: 'Wojskowa Akademia Techniczna w Warszawie', direction: 'Informatyka', option: 'right'},
    ]
  return (
    <section className='flex flex-col items-center justify-center gap-9 w-full'>
        {
            absol.map((item, index) => (
                <Absolwents_post key={index} name={item.name} where={item.where} direction={item.direction} option={item.option} />
            ))
        }
        </section>
  )
}