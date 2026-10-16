import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

const MARQUEE_TEXT = "LET'S WORK TOGETHER";

const Footer = () => {
    // two identical halves so translateX(-50%) loops seamlessly
    const half = (
        <div className="flex shrink-0">
            {[...Array(4)].map((_, i) => (
                <span
                    key={i}
                    className="flex items-center gap-8 pr-8 text-[14vw] sm:text-[10vw] font-anton leading-none text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.25)] transition-colors hover:text-foreground/10"
                >
                    {MARQUEE_TEXT}
                    <span className="text-[0.35em] text-primary [-webkit-text-stroke:0]">
                        ✦
                    </span>
                </span>
            ))}
        </div>
    );

    return (
        <footer className="relative overflow-hidden pb-6" id="contact">
            <div className="flex w-max animate-marquee py-8" aria-hidden>
                {half}
                {half}
            </div>

            <div className="container text-center border-t border-border/50 pt-16">
                <p className="text-lg text-muted-foreground">
                    Have a project in mind?
                </p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="group inline-flex items-center gap-3 mt-5 mb-12 text-2xl xs:text-3xl sm:text-5xl font-anton break-all hover:text-primary transition-colors"
                >
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-no-repeat bg-left-bottom pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                        {GENERAL_INFO.email}
                    </span>
                    <ArrowUpRight className="size-[1em] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Rashel Shah. All rights
                        reserved.
                    </p>
                    <ul className="flex gap-6">
                        {SOCIAL_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="capitalize hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
