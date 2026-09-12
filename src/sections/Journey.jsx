import { GraduationCap, Briefcase } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import { timeline } from '../data/timeline';
export default function Journey() {
  return (
    <section id="journey" className="relative ">
      <Container>
        <SectionHeading
          title="My Journey"
          description="How my path through study and practice has taken shape, year by year."
        />
        <div className="relative mx-auto max-w-2xl">
          {/* vertical line */}
          <div
            className="absolute left-3.75 top-0 h-full w-px sm:left-1/2 sm:-translate-x-1/2"
            style={{ background: 'linear-gradient(var(--accent-cyan), var(--accent-secondary), transparent)' }}
          />
          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const Icon = item.type === 'education' ? GraduationCap : Briefcase;
              const isRight = i % 2 === 1;
              return (
                <div
                  key={item.title}
                  className={`relative flex items-start gap-6 sm:items-center ${
                    isRight ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-0 z-10 sm:left-1/2 sm:-translate-x-1/2">
                    <ScrollReveal direction="none" delay={i * 0.05}>
                      <div className="glass-strong flex h-8 w-8 items-center justify-center rounded-full text-cyan shadow-[0_0_18px_rgba(34,211,238,0.4)]">
                        <Icon size={14} />
                      </div>
                    </ScrollReveal>
                  </div>
                  <div className={`w-full pl-12 sm:w-1/2 sm:pl-0 ${isRight ? 'sm:pl-12' : 'sm:pr-12'}`}>
                    <ScrollReveal direction={isRight ? 'left' : 'right'} delay={i * 0.06}>
                      <GlassCard hover={false} className="p-6">
                        <span className="font-accent text-xs font-medium uppercase tracking-wider text-cyan">
                          {item.year}
                        </span>
                        <h3 className="mt-2 font-display text-lg font-semibold text-text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-accent text-xs text-text-secondary">{item.place}</p>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {item.description}
                        </p>
                      </GlassCard>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
