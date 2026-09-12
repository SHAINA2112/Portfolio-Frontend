import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';
import StaggerGroup, { staggerItemVariants } from '../components/ui/StaggerGroup';
import { projects } from '../data/projects';
export default function Projects() {
  return (
    <section id="projects" className="relative pb-34 ">
      <Container>
        <SectionHeading
          title="Projects"
          description="A handful of projects that show how I approach structure, motion, and detail."
        />
        <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div key={project.title} variants={staggerItemVariants}>
              <GlassCard className="group h-full overflow-hidden rounded-2xl">
                <div className="relative aspect-video overflow-hidden">
                  {/*bg on the image section */}
                    <img src={project.image} alt={project.title} />

                  <div
                    className={`h-full w-full  opacity-70 transition-transform duration-700 ease-out group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-bg-primary/30 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="glass-strong flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-transform hover:scale-110"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="glass-strong flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-transform hover:scale-110"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-glass px-3 py-1 font-accent text-xs text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
