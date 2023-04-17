"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {}

export default function Absolwent_a({}: Props) {

    const [ readMore, setReadMore ] = React.useState(false)

    const extraContent = (
      <span>
        Czy to wiedza o bramkach logicznych 
czy o multiplekserach, a nawet systemy 
liczbowe takie jak binarny czy 
heksadecymalny. Jestem bardzo 
zadowolony także z uzyskanych 
kwalifikacji zawodowych ;) Zdanych 
na jednym z najlepszych poziomów 
w szkole.
        <br/><br/>
        Ogólnie jeżeli włoży się trochę 
czasu w naukę to z łatwością idzie 
przejść przez technikum z wynikami 
zadowalającymi was, waszych 
rodziców, a także kadrę nauczającą.
        <br/><br/>
        Na co uważać? <br></br>
Fizyka. Informatyka. 
Matematyka. Najważniejsze, nawet 
nie wiecie jak bardzo. <br></br>
Cały profil informatyka opiera się 
na tych 3 zagadnieniach.
        <br/><br/>
        Na rozszerzonej informatyce 
uczy się stricte pod maturę, 
a najlepiej jest trafić profesora 
Miodzia, bo ten to potrafi 
przygotować, w miesiąc niezbyt 
wymagającej nauki skok z 12% 
do ponad 50%. Więc jest progres.
        <br/><br/>
        Fizyka, jeżeli ktoś myśli o studiach to klucz. Bardzo potrzebna. 
Wszelkie pojęcia związane 
z rezystancją, natężeniem prądu, 
różne prawa pojawią się na różnych 
przedmiotach na uczelniach. A całość 
fizyki jest osobnym przedmiotem, 
który jeżeli ktoś myśli o Wacie, 
niezdany kosztuje 800zł za poprawę. 
Więc warto się do tego przyłożyć!
        <br/><br/>
        Bo nawet najmniejsze braki będą 
się za wami ciągnęły!
        <br/><br/>
        Matematyka w ZS14 jest na 
bardzo wysokim poziomie. Od samego 
początku uczy się tego co 
najważniejsze do matury 
i ewentualnie do przyszłej edukacji 
po maturze. Nie będę oszukiwał, 
ale zajęcia matematyki były jednymi 
z najciekawszych na jakie się 
uczęszczało. No, ale w końcu 
królowa nauk.
        <br/><br/>
        Jeżeli będziecie mieli jakieś 
problemy do dyspozycji macie 
nauczycieli, którzy z chęcią 
wysłuchają waszych problemów 
i doradzą. Pedagogów, i psycholog 
dostępną w razie rozterek czy 
komplikacji w różnym zakresie. 
Więc naprawdę nie bójcie się pytać 
o pomoc jeżeli wybierzecie te 
Technikum, sam potrzebowałem 
nie raz porady w różnych 
kwestiach i zawsze mogłem liczyć na 
cudownych ludzi jacy tutaj pracują.
        <br/><br/>
        No to chyba wszystko co mogę 
wam przekazać. Jeżeli chcecie to 
złóżcie do nas kandydaturę ;)
        <br/><br/>
        Myślę że wam się spodoba, każdy 
znajdzie tu swoje miejsce, odnajdzie 
siebie i pozwoli ukierunkować się co 
w życiu mu się podoba i co chce 
robić. 
Sprawdźcie, a nie pożałujecie ;) 
Gwarantuje wam to!
        <br/><br/>
        A i pamiętajcie, 
że PROF. MIODZIO RULES!!
        <br/><br/>
        Kamil Socha<br></br>
Technik informatyk<br></br>
Rocznik 2018 - 2022<br></br>
Obecnie student I roku Informatyki -
Wojskowa Akademia Techniczna w Warszawie
      </span>
    )


  return (
    <motion.section
    initial={{opacity: 0, x: 200}}
        whileInView={{opacity: 1, x: 0}}
        whileHover={{scale: 1.02, transition: {duration: 0.2}}}
        transition={{duration: 1}}
        whileTap={{ scale: 0.9 }}
        
        id="kamil"
        className={`${readMore ? 'bg-[#ffffff73] text-[#3d3d3d] transition-all duration-300' : 'bg-[#fdfdfd]'} flex flex-col lg:w-3/5 w-[90%] px-10 py-7 gap-5 justify-between items-center drop-shadow-2xl lg:rounded-[57px] rounded-[57px]`}>
            <div  className='w-full justify-between items-center flex lg:flex-row flex-col'>
                <div>
                    <p className='w-full text-[#3d3d3d] text-xl font-black'>
                    Kamil Socha<span className='text-black text-xs font-normal pl-1'> TECHNIK INFORMATYK</span>
                    </p>
                    <p className='text-black'>
                    Wojskowa Akademia Techniczna w Warszawie
                    </p>
                </div>
                <div>
                    <p className='text-black lg:text-right text-center lg:pt-0 pt-5 font-medium leading-4'>
                        Informatyka<br></br>
                        <span className='text-black text-xs font-normal'>kierunek studiów</span>
                    </p>
                    
                </div>
            </div>
            <p className='text-black text-lg'>
            Co dało mi moje 
ukochane technikum? <br></br>Dzięki wspaniałej 
kadrze nauczającej zyskałem naprawdę 
sporo wiedzy, co odzwierciedla się 
aktualnie na studiach. Wszelkie zagadnienia 
od Pani Kamili z Urządzeń techniki 
komputerowej pojawiły się już 
w Watowskim programie, trochę lekko 
rozszerzone. Natomiast ta bazowa wiedza 
naprawdę ułatwia pierwsze dwa semestry 
na studiach.
{
                readMore && extraContent
            } 
            </p>
                   
        
        {readMore ? 
        <a onClick={() => setReadMore(!readMore) } 
        href='#kamil' 
        
        className='text-center pt-1 flex flex-row items-center justify-center gap-2 text-[#5C5C5C] font-medium'>
          ZWIŃ TEKST
          <Image
              src='/more.svg'
              alt='more'
              width={30}
              height={30}
              className='mb-[5px] rotate-180'
              />
        </a>
        :
        <a onClick={() => setReadMore(!readMore) }
        href='#absolwent' 
        className='text-center pt-1 flex flex-row items-center justify-center gap-2 text-[#5C5C5C] font-medium'>
          ROZWIŃ WIĘCEJ 
          <Image
              src='/more.svg'
              alt='more'
              width={30}
              height={30}
              className='mt-[5px]'
          />
        </a>
        }
    </motion.section>
  )
}