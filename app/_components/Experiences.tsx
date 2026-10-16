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
                    {/* timeline rail */}
                    <div
                        className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/70 via-border to-transparent"
                        aria-hidden
                    />
                    <div className="flex flex-col max-md:gap-4">
                        {MY_EXPERIENCE.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="experience-item group relative pl-10 leading-none py-6 md:group-hover/experiences:opacity-30 md:hover:!opacity-100 transition-opacity duration-300"
                            >
                                <span
                                    className="absolute left-0 top-[26px] size-[15px] rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.8)]"
                                    aria-hidden
                                />
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
                                    <p className="mt-3 inline-block rounded-full border border-border/70 px-3 py-1 text-sm leading-none text-muted-foreground font-medium">
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
