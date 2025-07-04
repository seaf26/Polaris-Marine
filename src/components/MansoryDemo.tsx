import React from 'react'
import Masonry from './Masonry';
import img1 from '../assets/IMG-20250626-WA0018.jpg';
import img2 from '../assets/IMG-20250626-WA0019.jpg';
import img3 from '../assets/IMG-20250626-WA0020.jpg';
import img4 from '../assets/IMG-20250626-WA0021.jpg';
import img5 from '../assets/IMG-20250626-WA0022.jpg';
import img6 from '../assets/IMG-20250626-WA0023.jpg';
import img7 from '../assets/IMG-20250626-WA0024.jpg';
import img8 from '../assets/IMG-20250626-WA0025.jpg';
import img9 from '../assets/IMG-20250626-WA0026.jpg';
import img10 from "../assets/IMG-20250704-WA0029.jpg"
import im11 from "../assets/IMG-20250704-WA0030.jpg"
import img12 from "../assets/IMG-20250704-WA0031.jpg"
import img13 from "../assets/IMG-20250704-WA0032.jpg"
import img14 from "../assets/IMG-20250704-WA0033.jpg"
import { useTranslation } from 'react-i18next';

const items = [
    { id: "1", img: img1, url: "#", height: 400 },
    { id: "2", img: img2, url: "#", height: 350 },
    { id: "3", img: img3, url: "#", height: 420 },
    { id: "4", img: img4, url: "#", height: 380 },
    { id: "5", img: img5, url: "#", height: 360 },
    { id: "6", img: img6, url: "#", height: 410 },
    { id: "7", img: img7, url: "#", height: 390 },
    { id: "8", img: img8, url: "#", height: 370 },
    { id: "9", img: img9, url: "#", height: 430 },
    {id:"10" , img: img10, url:'#', height:400},
    { id: "11", img: im11, url: "#", height: 380 },
    { id: "12", img: img12, url: "#", height: 410 },
    { id: "13", img: img13, url: "#", height: 390 },
    { id: "14", img: img14, url: "#", height: 420 },



    


];

export default function MansoryDemo() {
    const { t } = useTranslation();
    return (
        <section dir="ltr" id="gallery" className='py-20 mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold text-center text-blue-600 mb-10'>{t('galleryTitle')}</h1>
        <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
            />
        </section>
    )
}
