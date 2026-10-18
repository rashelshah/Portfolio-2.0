'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" className="pb-24 md:pb-40" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-12">
                    {Object.entries(MY_STACK).map(([key, value], index) => (
                        <div
                            className="grid sm:grid-cols-12 border-t border-border/50 pt-8"
                            key={key}
                        >
                            <div className="sm:col-span-5">
                                <p className="slide-up text-xs font-medium tracking-widest text-primary mb-2">
                                    {(index + 1).toString().padStart(2, '0')}
                                </p>
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {key}
                                </p>
                            </div>

                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap max-sm:mt-6">
                                {value.map((item) => (
                                    <div
                                        className="slide-up flex gap-3.5 items-center leading-none"
                                        key={item.name}
                                    >
                                        <div>
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width="40"
                                                height="40"
                                                className="max-h-10"
                                            />
                                        </div>
                                        <span className="text-2xl capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
