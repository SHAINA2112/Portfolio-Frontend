import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { scroller } from "react-scroll";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Container from "../components/ui/Container";
import MagneticButton from "../components/ui/MagneticButton";
import { socials } from "../data/socials";
const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: SiGmail,
  instagram: FaInstagram,
};
export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      <Container className="grid grid-cols-1 items-center gap-12 overflow-hidden lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 flex flex-col items-start gap-6 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="glass rounded-full px-4 py-1.5 my-2 font-accent text-sm text-text-secondary"
          >
            Hey, I'm Shaheen
          </motion.span>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-text-primary sm:text-6xl">
            Building interfaces
            <br />
            with <span className="text-gradient">precision</span> &amp; craft
          </h1>
          <div className="font-accent text-xl text-text-secondary sm:text-2xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Student",
                2000,
              ]}
              wrapper="span"
              speed={45}
              className="text-cyan"
              repeat={Infinity}
            />
          </div>
          <p className="max-w-md text-base leading-relaxed text-text-secondary">
            I design and build fast, accessible, and visually refined web
            experiences, turning ambitious ideas into user friendly interfaces.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              variant="primary"
              as="a"
              href="/Resume.docx"
              download
            >
              Download Resume
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              as="button"
              type="button"
              onClick={() =>
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 700,
                  offset: -90,
                })
              }
            >
              Get in Touch
            </MagneticButton>
          </div>
          <div className="flex items-center gap-3 pt-4">
            {socials.map(({ label, icon, href }) => {
              const Icon = iconMap[icon];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-cyan"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </motion.div>
        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="
              relative
              order-1
              mx-auto
              flex
              h-85
              w-full
              max-w-[320px]
              items-center
              justify-center
              overflow-hidden
              sm:h-95
              sm:max-w-90
              md:h-105
              md:max-w-100
              lg:order-2
              lg:h-auto
              lg:max-w-md
              lg:overflow-visible
              "
          style={{ perspective: 1000 }}
        >
          {/* Glow behind image */}
          <div
            className="absolute h-72 w-72 rounded-full opacity-40 blur-[80px]"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-cyan), var(--accent-secondary))",
            }}
          />
          {/* Portrait with mouse parallax tilt */}
          <div
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
              lg:h-150
              "
          >
            {/* Ambient Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
            absolute
            h-48
            w-48
            sm:h-60
            sm:w-60
            lg:h-105
            lg:w-105
            rounded-full
            bg-linear-to-tr
            from-cyan-400/20
            to-purple-500/20
            blur-3xl
            
            dark:from-cyan-500/40
            dark:to-purple-600/40
          "
            />
            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [-18, 18, -18],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
            absolute
            left-0
            top-6
            h-20
            w-20
            sm:left-2
            sm:h-24
            sm:w-24
            md:left-4
            md:h-28
            md:w-28
            lg:left-0
            lg:top-16
            lg:h-44
            lg:w-44
            flex
            items-center
            justify-center
            rounded-3xl
            border
            
            bg-white/70
            shadow-xl
            shadow-slate-300/20
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-transparent
            dark:shadow-none
          "
            >
              <span
                className="text-3xl
                sm:text-4xl
                lg:text-7xl 
                font-bold text-cyan-500 opacity-80"
              >
                {"</>"}
              </span>
            </motion.div>
            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [18, -18, 18],
                rotate: [5, -5, 5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
            absolute
            bottom-4
            right-0
            h-20
            w-20
            sm:right-2
            sm:h-24
            sm:w-24
            md:right-4
            md:h-28
            md:w-28
            flex
            items-center
            justify-center
            rounded-full
            border
            
            bg-white/70
            shadow-xl
            
            backdrop-blur-xl
            lg:bottom-16
            lg:right-0
            lg:h-52
            lg:w-52
            dark:border-white/10
            dark:bg-transparent
            dark:shadow-none
          "
            >
              <svg
                className="h-8
                w-8
                sm:h-10
                sm:w-10
              text-purple-500 opacity-70 lg:h-20 lg:w-20 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
            {/* Profile Card */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
            relative
            z-10
            h-62.5
            w-47.5
            sm:h-72.5
            sm:w-55
            md:h-85
            md:w-62.5
            lg:h-105
            lg:w-[320px]
            overflow-hidden
            rounded-4xl
            border
            border-transparent
            bg-white/60
            shadow-2xl
            shadow-cyan-300/20
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-transparent
            dark:shadow-[0_0_40px_rgba(6,182,212,.15)]
          "
            >
              <img
                src="/SHAINA.png"
                alt="Shaheen"
                className="h-full w-full object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent dark:from-black/40" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
