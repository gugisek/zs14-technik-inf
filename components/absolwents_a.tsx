import React from 'react'
import Absolwents_post from './absolwents_post'
import Absolwent_a from './absolwent_a'

type Props = {}

export default function Absolwents_a({}: Props) {
    
    const absol = [
        {name: 'Jonatan Dajtrowski', where: 'Polsko - Japońska Akademia Technik Komputerowych w Warszawie', direction: 'Informatyka', option: 'left'},
        {name: 'Michał Garwoliński', where: 'Wyższa Szkoła Filmowa w Warszawie', direction: 'Fotografia', option: 'right'},
        {name: 'Szymon Banaszczyk', where: 'Wojskowa Akademia Techniczna w Warszawie', direction: 'Bezpieczeństwo narodowe', option: 'left'},
        {name: 'Konrad Raszuk', where: 'Wyższa Szkoła Bankowa w Warszawie', direction: 'Programowanie (Frontend Dev)', option: 'right'},
        {name: 'Michał Popiński', where: 'Wyższa Uczelnia Informatyki Stosowanej w Warszawie', direction: 'Informatyka', option: 'left'},
        {name: 'Jakub Reizler', where: 'Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie', direction: 'Człowiek w cyberprzestrzeni', option: 'right'},
        {name: 'Bartek Paczesny', where: 'Politechnika Warszawska', direction: 'Computer Science', option: 'left'},
   
    ]
  return (
    <section className='flex flex-col items-center justify-center gap-9 w-full'>
        <Absolwent_a />
        {
            absol.map((item, index) => (
                <Absolwents_post key={index} name={item.name} where={item.where} direction={item.direction} option={index % 2 === 0 ? 'left' : 'right'} />
            ))
        }
        </section>
  )
}