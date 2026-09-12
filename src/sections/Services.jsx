import { Palette, Code, MonitorSmartphone, Layout, Smartphone, Monitor,Zap,} from "lucide-react";
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';
import StaggerGroup, { staggerItemVariants } from '../components/ui/StaggerGroup';
import { motion } from 'framer-motion';
import { services } from '../data/services';
export const iconMap = { palette: Palette, code: Code, layout: Layout, smartphone: Smartphone};
export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <Container>
        <SectionHeading
          title="Services"
          description="A focused set of frontend capabilities I bring to every project I take on."
        />
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.title} variants={staggerItemVariants}>
                <GlassCard className="h-full p-8 ">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan/20 to-accent-secondary/20 text-cyan">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
