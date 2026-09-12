import { Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';
import StaggerGroup, { staggerItemVariants } from '../components/ui/StaggerGroup';
import { certifications } from '../data/certifications';
export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 ">
      <Container>
        <SectionHeading
          title="Certifications"
          description="Courses and certifications that have shaped how I build on the web."
        />
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={staggerItemVariants}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <GlassCard className="flex h-full flex-col overflow-hidden rounded-2xl">
                  <div className={`flex h-28 items-center justify-center bg-linear-to-br ${cert.gradient} opacity-80`}>
                    <img 
                    src={cert.img}
                    alt={cert.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-display text-base font-semibold text-text-primary">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-xs text-text-secondary">{cert.org}</p>
                    </div>
                    <span className="mt-4 flex items-center gap-1 font-accent text-xs text-cyan">
                      View <ArrowUpRight size={12} />
                    </span>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
