import { m, type Variants } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { Terminal } from "../components/Terminal";
import { personal } from "../data/personal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ui } from "../lib/icons";
import { asset } from "../lib/url";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const initial = reduced ? false : "hidden";

  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-28">
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div aria-hidden="true" className="hero-glow absolute -right-32 top-10 size-[42rem] max-w-[120vw]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <m.div variants={container} initial={initial} animate="show">
          <m.p variants={item} className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="ping-soft absolute inset-0 rounded-full bg-accent" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            {personal.availability}
          </m.p>

          <m.h1 variants={item} id="hero-title" className="mt-7 text-7xl font-semibold leading-none tracking-tighter sm:text-8xl lg:text-9xl">
            {personal.name}
          </m.h1>
          <m.p variants={item} className="mt-5 font-mono text-sm text-accent-text sm:text-base">{personal.title}</m.p>
          <m.p variants={item} className="mt-6 max-w-xl text-xl font-medium leading-snug sm:text-2xl">{personal.headline}</m.p>
          <m.p variants={item} className="mt-4 max-w-xl leading-relaxed text-muted">{personal.description}</m.p>

          <m.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href={asset(personal.resumePath)} download={personal.resumeDownloadName} className="btn btn-ghost">
              <ui.FileText size={16} aria-hidden="true" /> Download Resume
            </a>
          </m.div>

          <m.ul variants={item} className="mt-8 flex items-center gap-1 text-muted">
            <li><a className="icon-btn" href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GithubIcon className="size-5" /></a></li>
            <li><a className="icon-btn" href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedinIcon className="size-5" /></a></li>
            <li><a className="icon-btn" href={`mailto:${personal.email}`} aria-label="Send an email"><ui.Mail size={20} aria-hidden="true" /></a></li>
          </m.ul>
        </m.div>

        <m.div initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}>
          <Terminal />
        </m.div>
      </div>

      <a href="#about" aria-label="Scroll to the About section" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <span className="scroll-cue block h-10 w-px overflow-hidden bg-line" />
      </a>
    </section>
  );
}
