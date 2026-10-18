'use client';
import parse from 'html-react-parser';
import ArrowAnimation from '@/components/ArrowAnimation';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.set('.fade-in-later', {
                autoAlpha: 0,
                y: 30,
            });
            const tl = gsap.timeline({
                delay: 0.5,
            });

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
            });
        },
        { scope: containerRef },
    );

    // blur info div and make it smaller on scroll
    useGSAP(
        () => {
            if (window.innerWidth < 992) return;

            gsap.to('#info', {
                filter: 'blur(3px)',
                autoAlpha: 0,
                scale: 0.9,
                // position: 'sticky',
                scrollTrigger: {
                    trigger: '#info',
                    start: 'bottom bottom',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    // parallax effect on images
    useGSAP(
        () => {
            gsap.utils
                .toArray<HTMLDivElement>('#images > div')
                .forEach((imageDiv, i) => {
                    gsap.to(imageDiv, {
                        backgroundPosition: `center 0%`,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: imageDiv,
                            start: () => (i ? 'top bottom' : 'top 50%'),
                            end: 'bottom top',
                            scrub: true,
                            // invalidateOnRefresh: true, // to make it responsive
                        },
                    });
                });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-24 pb-14">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="mb-10 inline-flex gap-2 items-center group h-12"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>

                <div
                    className="top-0 min-h-[calc(100svh-100px)] flex"
                    id="info"
                >
                    <div className="relative w-full">
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mx-auto mb-6 max-w-[635px]">
                            <h1 className="fade-in-later opacity-0 text-4xl md:text-[60px] leading-none font-anton overflow-hidden">
                                <span className="inline-block">
                                    {project.title}
                                </span>
                            </h1>

                            <div className="fade-in-later opacity-0 flex gap-2">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.8)]"
                                    >
                                        <ExternalLink size={16} />
                                        Live site
                                    </a>
                                )}
                                {project.sourceCode && (
                                    <a
                                        href={project.sourceCode}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                                    >
                                        <Github size={16} />
                                        Source
                                    </a>
                                )}
                            </div>
                        </div>

                        {project.highlight && (
                            <div className="fade-in-later opacity-0 max-w-[635px] mx-auto mb-8">
                                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-primary shadow-[0_0_25px_-3px_hsl(var(--primary)/0.35)]">
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                                        <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                    </span>
                                    {project.highlight}
                                </span>
                            </div>
                        )}

                        <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
                            {project.metrics && project.metrics.length > 0 && (
                                <div className="fade-in-later">
                                    <p className="text-muted-foreground font-anton mb-3">
                                        Impact & Traction
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {project.metrics.map((metric) => (
                                            <div
                                                key={metric.label}
                                                className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/[0.07] p-5 backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-primary/[0.12]"
                                            >
                                                <div className="text-3xl sm:text-5xl font-anton text-primary tracking-wide">
                                                    {metric.value}
                                                </div>
                                                <div className="text-xs sm:text-sm text-foreground/80 uppercase tracking-wider mt-1.5 font-medium">
                                                    {metric.label}
                                                </div>
                                                <div className="absolute top-0 right-0 -mr-4 -mt-4 size-20 rounded-full bg-primary/20 blur-xl pointer-events-none" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Year
                                </p>

                                <div className="text-lg">{project.year}</div>
                            </div>
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Tech & Technique
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-border/70 bg-white/[0.03] px-3 py-1 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Description
                                </p>

                                <div className="text-lg prose-xl markdown-text">
                                    {parse(project.description)}
                                </div>
                            </div>
                            {project.role && (
                                <div className="fade-in-later">
                                    <p className="text-muted-foreground font-anton mb-3">
                                        My Role
                                    </p>

                                    <div className="text-lg">
                                        {parse(project.role)}
                                    </div>
                                </div>
                            )}
                        </div>

                        <ArrowAnimation />
                    </div>
                </div>

                <div
                    className="fade-in-later relative flex flex-col gap-4 max-w-[800px] mx-auto"
                    id="images"
                >
                    {project.images.map((image) => (
                        <div
                            key={image}
                            className="group relative w-full aspect-[750/400] overflow-hidden rounded-2xl border border-white/10 bg-background-light transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.4)]"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 50%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <a
                                href={image}
                                target="_blank"
                                className="absolute top-4 right-4 rounded-full bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
                            >
                                <ExternalLink />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
