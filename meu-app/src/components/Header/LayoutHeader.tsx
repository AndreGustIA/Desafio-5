import Header from "./Header";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import React, { useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import style from "./LayoutHeader.module.css";
import ColetaSeletiva from "../../pages/ColetaSeletiva/ColetaSeletiva";
import PorQueFazer from "../../pages/PorQueFazer/PorQueFazer";
import CoresDeColeta from "../../pages/CoresDeColeta/CoresDeColeta";
import SepararLixo from "../../pages/Lixo/Lixo";
import Jogo from "../../pages/Jogo/Jogo";
import Dashboard from "../../pages/Dashboard/dashboard";
import Login from "../../pages/Login/Login";

const pages =  [
  { path: "/coletaSeletiva", label: "Coleta Seletiva", component: <ColetaSeletiva /> },
  { path: "/PorQueFazer", label: "Por Que Fazer", component: <PorQueFazer /> },
  { path: "/CoresDeColeta", label: "Cores de Coleta", component: <CoresDeColeta />},
  { path: "/separarlixo", label: "Separar Lixo", component: <SepararLixo /> },
  { path: "/jogo", label: "Jogo", component: <Jogo /> },
  { path: "/login", label: "Login", component: <Login /> },
  { path: "/dashboard", label: "Dashboard", component: <Dashboard /> }
];

const LayoutHeader: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const swiperRef = useRef<SwiperType | null >(null);

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const activeIndex = pages.findIndex(p => p.path === location.pathname);

    const isSwiperRoute = activeIndex !== -1;
    const showSwiper = isMobile && isSwiperRoute;

    useEffect(() => {
        if (showSwiper && swiperRef.current && activeIndex !== -1) {
            swiperRef.current.slideTo(activeIndex);
        }
    }, [activeIndex, showSwiper]);


    return (
        <>
            {!showSwiper && <Header/>}

            {showSwiper ? (
                    <Swiper
                        className={style.swiper}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                            navigate(pages[swiper.activeIndex].path);
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        initialSlide={activeIndex >= 0 ? activeIndex : 0}
                        >
                        {pages.map((p, index) => (
                            <SwiperSlide key={index}>
                            {p.component}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                        <Outlet />
                    )}
        </>
    )
}

export default LayoutHeader;