import Tilt from 'react-parallax-tilt';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub,} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Smartphone, Puzzle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import StaggerGroup, { staggerItemVariants } from '../components/ui/StaggerGroup';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJsSquare,
  react: FaReact,
  tailwind: SiTailwindcss,
  git: FaGitAlt,
  github: FaGithub,
  responsive: Smartphone,
  puzzle: Puzzle,
};
export default function Skills() {
  return (
    <section id="skills" className="relative ">
      <Container>
        <SectionHeading
          title="Skills & Technologies"
          description="The core tools I reach for when turning a design into a working, polished interface."
        />
        <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div key={skill.name} variants={staggerItemVariants}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable
                  glareMaxOpacity={0.08}
                  glareColor="#22d3ee"
                  glarePosition="all"
                  transitionSpeed={1500}
                  className="h-full"
                >
                  <div className="glass group flex h-full flex-col items-center gap-4 rounded-2xl px-5 py-8 text-center transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan/15 to-accent-secondary/15 text-cyan transition-transform duration-500 group-hover:scale-110">
                      <Icon size={26} />
                    </span>
                    <p className="font-accent text-sm font-medium text-text-primary">{skill.name}</p>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
