import React from 'react'
import Why_post from './why_post'


type Props = {}

export default function Why_a({}: Props) {

    const why = [
        {title: 'DOBRA LOKALIZACJA',
        desc: 'Nasz budynek znajduje się przy ulicy <a href="https://goo.gl/maps/vNLbBdmXMoNf7bpE9" target="_blank" style="color: #959595; transition: all 0.3s" onMouseOver="this.style.color=`#000`" onMouseOut="this.style.color=`#959595`">Józefa Szanajcy 5</a><br/><br/> 500 metrów od <span style="color: #2EB4FF">Ronda Starzyńskiego</span> <br/>1km od <span style="color: #5AA5FF">Dworca Wileńskiego</span>',
        img: '/map2.png',
        imgHover: '/budynek.png',
        option: 'left'},

        {title: 'NOWOCZESNE WYPOSAŻENIE',
        desc: 'W naszej szkole są rozwiązania technologiczne, które umożliwiają nauczanie w nowoczesny sposób. <br/><br/> Są to interaktywne tablice multimedialne, sieć Wi-Fi, laboratoria z dostępem do sprzętu komputerowego oraz narzędzia edukacyjne online.',
        img: '/wyp.jpg',
        imgHover: '/tablica.jpg',
        option: 'right'},

        {title: 'PRACOWNIE TECHNICZNE',
        desc: 'Sale wyposażone są w <span style="color: #2EB4FF">tablice interaktywne</span>, <span style="color: #5AA5FF">projektory</span> oraz <span style="color: #959595">komputery</span> z dostępem do internetu',
        img: '/sala.png',
        imgHover: '/stanowisko2.jpg',
        option: 'left'},

        {title: 'KADRA NAUCZYCIELSKA',
        desc: 'W naszej szkole pracują wykwalifikowani nauczyciele, którzy są w stanie pomóc każdemu uczniowi w rozwoju jego umiejętności',
        img: '/nauczyciel.png',
        imgHover: '/nauczyciel2.jpg',
        option: 'right'},
        
    ]

  return (
    <section className='flex flex-col items-center justify-center gap-12'>
        {
            why.map((item, index) => (
                <Why_post title={item.title} desc={item.desc} img={item.img} imgHover={item.imgHover} option={item.option} key={index} />
            ))
        }
    </section>
  )
}