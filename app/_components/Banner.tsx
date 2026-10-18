'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import WordFlip from '@/components/WordFlip';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
    { icon: '🤯', label: 'Hours Spent Googling Code' },
    { icon: '♾️', label: 'Experiments Gone Wrong' },
    { icon: '🚀', label: 'Skills Growing Every Day' },
];

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // entrance: columns rise + de-blur once the preloader strips start to lift
    useGSAP(
        () => {
            const firstLoad = !document.documentElement.dataset.ready;

            gsap.from('.hero-col', {
                y: 60,
                opacity: 0,
                filter: 'blur(12px)',
                duration: 1.1,
                ease: 'power3.out',
                stagger: 0.15,
                // ponytail: 2.6s matches the preloader's strip-reveal start, tie to a label if that timeline grows
                delay: firstLoad ? 2.6 : 0.5,
                // a leftover filter would make children's backdrop-filter sample the wrong layer
                clearProps: 'filter',
            });
        },
        { scope: containerRef },
    );

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[100svh] md:h-[100svh] min-h-[530px] max-md:pt-24 max-md:pb-14 flex justify-between md:items-center max-md:flex-col relative"
                ref={containerRef}
            >
                <div className="hero-col max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] max-md:w-full">
                    <span className="slide-up-and-fade inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm text-primary max-md:mt-20 mb-6">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                        Open to work
                    </span>
                    <h1 className="banner-title slide-up-and-fade leading-[.9] text-[15.5vw] xs:text-[64px] sm:text-[76px] md:text-[80px] font-anton max-md:w-full tracking-[0.02em] md:whitespace-nowrap">
                        <span className="text-shine">FULL STACK</span>
                        <br />{' '}
                        <span className="inline-block mt-3 max-md:ml-0 md:ml-4 leading-[.9]">
                            <WordFlip />
                        </span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 md:mt-[18px] text-[17px] xs:text-lg text-muted-foreground leading-relaxed">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Rashel
                        </span>
                        . A web developer and student who enjoys turning ideas
                        into interactive digital experiences. Whether it’s
                        designing smooth user interfaces or optimizing
                        performance, I aim to create web solutions that are both
                        functional and engaging.
                    </p>
                    <div className="slide-up-and-fade mt-8 flex flex-wrap gap-3">
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}`}
                            variant="primary"
                            className="banner-button"
                        >
                            Hire Me
                        </Button>
                        <Button
                            as="link"
                            href="/#selected-projects"
                            variant="no-color"
                            className="border border-foreground/20 hover:border-foreground hover:text-background"
                        >
                            View Work
                        </Button>
                    </div>
                </div>

                <div className="hero-col md:absolute bottom-[10%] right-[4%] max-md:mt-[20vh] flex max-md:w-full max-md:justify-between md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    {STATS.map(({ icon, label }) => (
                        <div
                            key={label}
                            className="slide-up-and-fade flex-1"
                        >
                            <h5 className="text-[36px] sm:text-[40px] md:text-4xl font-anton text-primary mb-1 md:mb-1.5 leading-none">
                                {icon}
                            </h5>
                            <p className="text-muted-foreground text-[14px] xs:text-[15px] sm:text-base leading-tight mt-2 md:mt-0 max-w-[110px] sm:max-w-none mx-auto md:max-w-none md:mx-0">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
