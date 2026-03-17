'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="my-experience">
            <div className="container">
                <SectionTitle title="MY EXPERIENCE" />

                <div className="group/experiences relative" ref={containerRef}>
                    <div className="flex flex-col max-md:gap-10">
                        {MY_EXPERIENCE.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="experience-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/experiences:opacity-30 md:hover:!opacity-100 transition-all opacity-100 md:opacity-100"
                            >
                                <div className="flex gap-2 items-baseline text-xl text-muted-foreground font-anton mb-2 uppercase">
                                    {item.company.includes(' · ') ? (
                                        <>
                                            <span>{item.company.split(' · ')[0]}</span>
                                            <span className="text-base uppercase opacity-70">
                                                · {item.company.split(' · ')[1]}
                                            </span>
                                        </>
                                    ) : (
                                        item.company
                                    )}
                                </div>
                                <div className="">
                                    <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton transition-all duration-1000 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left mt-3.5 mb-2.5">
                                        {item.title}
                                    </h4>
                                    <p className="mt-2 text-base text-muted-foreground font-medium">
                                        {item.duration}
                                    </p>
                                    {item.description && (
                                        <div
                                            className="mt-4 text-lg text-muted-foreground/80 leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: item.description,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
