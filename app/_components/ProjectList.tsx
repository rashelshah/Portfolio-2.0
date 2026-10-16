'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PREVIEW_W = 360;
const PREVIEW_H = 225;

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const [activeSlug, setActiveSlug] = useState<string | null>(null);

    const activeProject = PROJECTS.find((p) => p.slug === activeSlug);

    // Scroll animation
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

    // hover preview trails the cursor
    useGSAP(() => {
        const el = previewRef.current;
        if (!el || window.innerWidth < 768) return;

        gsap.set(el, { xPercent: -50, yPercent: -50, x: -999, y: -999 });
        const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
        const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });

        const onMove = (e: MouseEvent) => {
            const vw = window.innerWidth;
            // parked in the right-hand area so the hovered title stays readable;
            // follows the cursor's Y, with a little horizontal parallax
            const target = vw * 0.66 + (e.clientX / vw - 0.5) * 80;
            x(
                Math.min(
                    Math.max(target, PREVIEW_W / 2 + 16),
                    vw - PREVIEW_W / 2 - 16,
                ),
            );
            y(e.clientY);
        };

        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="MY PROJECTS" />

                <div className="group/projects relative" ref={containerRef}>
                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={projectListRef}
                        onMouseLeave={() => setActiveSlug(null)}
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
                                onMouseEnter={setActiveSlug}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div
                ref={previewRef}
                aria-hidden
                className="max-md:hidden fixed top-0 left-0 z-[3] pointer-events-none"
                style={{ width: PREVIEW_W, height: PREVIEW_H }}
            >
                <div
                    className={`relative size-full overflow-hidden rounded-2xl border border-white/15 bg-background-light shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.35)] transition-all duration-500 ease-out ${
                        activeProject
                            ? 'scale-100 opacity-100'
                            : 'scale-75 opacity-0'
                    }`}
                >
                    <AnimatePresence>
                        {activeProject?.images[0] && (
                            <motion.div
                                key={activeProject.slug}
                                className="absolute inset-0"
                                initial={{ opacity: 0, scale: 1.15 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                            >
                                <Image
                                    src={activeProject.images[0]}
                                    alt=""
                                    fill
                                    sizes={`${PREVIEW_W}px`}
                                    className="object-cover object-top"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
