'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import WordFlip from '@/components/WordFlip';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

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
                className="container min-h-[100svh] md:h-[100svh] min-h-[530px] max-md:pt-24 max-md:pb-14 flex justify-between md:items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] max-md:w-full">
                    <h1 className="banner-title slide-up-and-fade leading-[.9] text-[15.5vw] xs:text-[64px] sm:text-[76px] md:text-[80px] font-anton max-md:w-full tracking-[0.02em] md:whitespace-nowrap max-md:mt-24">
                        <span className="text-primary">FULL STACK</span>
                        <br /> <span className="inline-block mt-3 max-md:ml-0 md:ml-4 leading-[.9]"><WordFlip/></span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 md:mt-[18px] text-[17px] xs:text-lg text-muted-foreground leading-Relaxed">
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
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="mt-8 banner-button slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] max-md:mt-[20vh] flex max-md:w-full max-md:justify-between md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade flex-1">
                        <h5 className="text-[36px] sm:text-[40px] md:text-4xl font-anton text-primary mb-1 md:mb-1.5 leading-none">
                            🤯
                        </h5>
                        <p className="text-muted-foreground text-[14px] xs:text-[15px] sm:text-base leading-tight mt-2 md:mt-0 max-w-[110px] sm:max-w-none mx-auto md:max-w-none md:mx-0">
                            Hours Spent Googling Code
                        </p>
                    </div>
                    <div className="slide-up-and-fade flex-1">
                        <h5 className="text-[36px] sm:text-[40px] md:text-4xl font-anton text-primary mb-1 md:mb-1.5 leading-none">
                            ♾️
                        </h5>
                        <p className="text-muted-foreground text-[14px] xs:text-[15px] sm:text-base leading-tight mt-2 md:mt-0 max-w-[110px] sm:max-w-none mx-auto md:max-w-none md:mx-0">
                            Experiments Gone Wrong
                        </p>
                    </div>
                    <div className="slide-up-and-fade flex-1">
                        <h5 className="text-[36px] sm:text-[40px] md:text-4xl font-anton text-primary mb-1 md:mb-1.5 leading-none">
                            🚀
                        </h5>
                        <p className="text-muted-foreground text-[14px] xs:text-[15px] sm:text-base leading-tight mt-2 md:mt-0 max-w-[110px] sm:max-w-none mx-auto md:max-w-none md:mx-0">
                            Skills Growing Every Day
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
