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
];

export default function MansoryDemo() {
    const { t } = useTranslation();
    return (
        <div dir="ltr" id="gallery" className=' h-[100vh] mx-auto px-4 sm:px-6 lg:px-8   max-[750px]:h-[120vh]'>
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
        </div>
    )
}
