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

                            <div className="sm:col-span-7 flex gap-3 flex-wrap max-sm:mt-6">
                                {value.map((item) => (
                                    // outer wrapper is driven by the GSAP scrub, so the hover lift lives on the inner chip
                                    <div className="slide-up" key={item.name}>
                                        <div className="flex items-center gap-3 rounded-full border border-border/60 bg-white/[0.03] py-2 pl-2.5 pr-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.6)]">
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width="28"
                                                height="28"
                                                className="size-7 object-contain"
                                            />
                                            <span className="text-lg capitalize leading-none">
                                                {item.name}
                                            </span>
                                        </div>
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
