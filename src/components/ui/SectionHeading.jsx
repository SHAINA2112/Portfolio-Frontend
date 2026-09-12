import ScrollReveal from './ScrollReveal';
import { cn } from '../../utils/cn';

export default function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <div
      className={cn(
        'mb-14 flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <ScrollReveal direction="down">
          <span className="font-accent text-xs font-medium uppercase tracking-[0.3em] text-cyan">
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.08}>
        <h2 className="max-w-2xl text-4xl font-semibold text-text-primary sm:text-5xl">{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.16}>
          <p className="max-w-xl text-base leading-relaxed text-text-secondary">{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
