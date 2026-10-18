import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
    // eslint ignores unused variables starting with _
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, onMouseEnter }: Props) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector(
            '#arrow-line',
        ) as SVGPathElement;
        const arrowCurb = externalLinkSVGRef.current?.querySelector(
            '#arrow-curb',
        ) as SVGPathElement;
        const box = externalLinkSVGRef.current?.querySelector(
            '#box',
        ) as SVGPathElement;

        gsap.set(box, {
            opacity: 0,
            strokeDasharray: box?.getTotalLength(),
            strokeDashoffset: box?.getTotalLength(),
        });
        gsap.set(arrowLine, {
            opacity: 0,
            strokeDasharray: arrowLine?.getTotalLength(),
            strokeDashoffset: arrowLine?.getTotalLength(),
        });
        gsap.set(arrowCurb, {
            opacity: 0,
            strokeDasharray: arrowCurb?.getTotalLength(),
            strokeDashoffset: arrowCurb?.getTotalLength(),
        });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, {
            autoAlpha: 1,
        })
            .to(box, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                arrowLine,
                {
                    opacity: 1,
                    strokeDashoffset: 0,
                },
                '<0.2',
            )
            .to(arrowCurb, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                externalLinkSVGRef.current,
                {
                    autoAlpha: 0,
                },
                '+=1',
            );
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 md:hover:translate-x-3 transition-all duration-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex gap-2 md:gap-5 items-start md:pr-10">
                <div className="font-anton text-muted-foreground transition-colors group-hover:text-primary">
                    _{(index + 1).toString().padStart(2, '0')}.
                </div>
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                            {project.title}
                            <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    ref={externalLinkSVGRef}
                                >
                                    <path
                                        id="box"
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <path id="arrow-line" d="M10 14 21 3"></path>
                                    <path id="arrow-curb" d="M15 3h6v6"></path>
                                </svg>
                            </span>
                        </h4>
                        {project.highlight && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs xs:text-sm font-sans font-medium text-primary shadow-[0_0_20px_-3px_hsl(var(--primary)/0.35)] transition-all group-hover:border-primary group-hover:bg-primary/20">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                </span>
                                {project.highlight}
                            </span>
                        )}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 text-muted-foreground text-xs">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-border/70 px-2.5 py-1 transition-colors group-hover:border-primary/40 group-hover:text-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <span className="ml-auto max-md:hidden self-center font-anton text-2xl text-muted-foreground">
                    {project.year}
                </span>
            </div>
        </TransitionLink>
    );
};

export default Project;
