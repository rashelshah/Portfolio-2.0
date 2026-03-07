'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text-en span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.name-text-en span', {
                delay: 0.5,
                y: '-150%',
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to(
                '.name-text-hi span',
                {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.2,
                },
                '<0.1',
            );

            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text-hi span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>

            <p className="name-text-en flex px-4 pt-8 pb-4 text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
                <span className="inline-block translate-y-[150%] pt-8 pb-2">R</span>
                <span className="inline-block translate-y-[150%] pt-8 pb-2">A</span>
                <span className="inline-block translate-y-[150%] pt-8 pb-2">S</span>
                <span className="inline-block translate-y-[150%] pt-8 pb-2">H</span>
                <span className="inline-block translate-y-[150%] pt-8 pb-2">E</span>
                <span className="inline-block translate-y-[150%] pt-8 pb-2">L</span>
            </p>
            <p className="name-text-hi flex px-4 pt-8 pb-4 text-[20vw] lg:text-[200px] font-hind font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
                <span className="inline-block translate-y-[150%] pt-8 pb-4 leading-[1.2]">रा</span>
                <span className="inline-block translate-y-[150%] pt-8 pb-4 leading-[1.2]">शी</span>
                <span className="inline-block translate-y-[150%] pt-8 pb-4 leading-[1.2]">ल</span>
            </p>
        </div>
    );
};

export default Preloader;
