import React from 'react'
import Why_post from './why_post'


type Props = {}

export default function Why_a({}: Props) {

    const why = [
        {title: 'DOBRA LOKALIZACJA',
        desc: 'Nasz budynek znajduje się przy ulicy <a href="https://goo.gl/maps/vNLbBdmXMoNf7bpE9" target="_blank" style="color: #959595; transition: all 0.3s" onMouseOver="this.style.color=`#000`" onMouseOut="this.style.color=`#959595`">Józefa Szanajcy 5</a> na Warszawskiej Pradze Połnoc<br/><br/> 500 metrów od <span style="color: #2EB4FF">Ronda Starzyńskiego</span> <br/>1km od <span style="color: #5AA5FF">Dworca Wileńskiego</span>',
        img: '/map2.png',
        imgHover: '/budynek.png',
        option: 'left'},

        {title: 'NOWOCZESNE WYPOSAŻENIE',
        desc: 'W naszej szkole są rozwiązania technologiczne, które umożliwiają nauczanie w nowoczesny sposób. <br/><br/> Są to: interaktywne tablice multimedialne, sieć Wi-Fi, laboratoria z dostępem do sprzętu komputerowego oraz narzędzia edukacyjne online.',
        img: '/wyp.jpg',
        imgHover: '/sala12l.jpg',
        option: 'right'},

        {title: 'PRACOWNIE TECHNICZNE',
        desc: 'Sale wyposażone są w <span style="color: #2EB4FF">tablice interaktywne</span>, <span style="color: #5AA5FF">projektory</span> oraz <span style="color: #959595">komputery</span> z dostępem do internetu. <br/><br/>W pracowniach znajdują się switche, routery firmy CISCO oraz profesjonalne zestawy narzędzi.',
        img: '/sala13l.jpg',
        imgHover: '/sala14l.jpg',
        option: 'left'},

        {title: 'KADRA NAUCZYCIELSKA',
        desc: 'Nauczyciele w naszej szkole to eksperci, którzy pomogą Ci zdobyć praktyczne umiejętności i wiedzę z zakresu programowania, sieci komputerowych i innych zagadnień związanych z technologią informacyjną. <br/><br/>Nauczyciele ci są odpowiedzialni za prowadzenie zajęć praktycznych i teoretycznych oraz wspieranie uczniów w rozwijaniu ich kreatywności i innowacyjnych pomysłów.',
        img: '/nauczyciel.jpg',
        imgHover: '/nauczyciel.jpg',
        option: 'right'},

        {title: 'ATMOSFERA',
        desc: 'Profesorzy angażują się w indywiduwalne wsparcie uczniów, umożliwia to rozwijanie zainteresowań, pasji oraz umiejętności miękkich ucznia. <br/><br/>Zawsze jest czas i miejsce na własne projekty i pomysły, a nauczyciele są gotowi pomóc w ich realizacji.',
        img: '/atmosferal.jpg',
        imgHover: '/szachy.jpeg',
        option: 'left'},

        {title: 'PRAKTYKI',
        desc: 'Szkoła nawiązuje współprace z przedsiębiorstwami z branży IT, organizuje staże dla uczniów i zapewnia im dostęp do realnych zadań zawodowych. <br/><br/> Umożliwia to ucznią zdobycie praktycznego doświadczenia oraz zapoznania z wymaganiami runku pracy',
        img: '/praktyki2.jpg',
        imgHover: '/praktyki3l.jpg',
        option: 'right'},
        
    ]

  return (
    <section className='flex flex-col items-center justify-center gap-12'>
        {
            why.map((item, index) => (
                <Why_post title={item.title} desc={item.desc} img={item.img} imgHover={item.imgHover} option={index % 2 === 0 ? 'left' : 'right'} key={index} />
            ))
        }
    </section>
  )
}