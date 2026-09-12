import { motion } from "framer-motion";
import { useRef } from "react";
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
const textItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
const floatingTags = [
  "Frontend",
  "Creative Coding",
  "ReactJS",
  "AI Integration",
  "UI Motion",
  "Responsive",
  "JavaScript",
  "Interactive UI",
];
export default function About() {
  const constraintsRef = useRef(null);
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-2 flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-1/4 h-120 w-120 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-6 md:px-12 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <motion.h2
            variants={textItem}
            className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl"
          >
            Engineering Emotion
            <br />
            <span className="bg-linear-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Through Code.
            </span>
          </motion.h2>
          <motion.div
            variants={textItem}
            className="space-y-6 text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
          >
            <p>
              I enjoy transforming simple ideas into clean, modern and
              interactive web experiences. Every project helps me improve my
              creativity, problem-solving skills and attention to detail.
            </p>
            <p>
              My goal is to create websites that not only look beautiful but
              also feel smooth, meaningful and enjoyable for everyone who uses
              them.
            </p>
          </motion.div>
          <motion.div variants={textItem} className="mt-10">
            <p className="text-3xl italic font-serif text-cyan-500/70">
              Shaheen.
            </p>
          </motion.div>
        </motion.div>
        {/* RIGHT SIDE */}
        <div
          ref={constraintsRef}
          className="
          relative
          min-h-105
          md:min-h-130
          w-full
          overflow-hidden
          rounded-3xl
          border
          border-slate-300/40
          dark:border-white/10
          dark:bg-transparent
          bg-white/60
          backdrop-blur-xl
          shadow-xl
          shadow-slate-300/20
          dark:shadow-none
          flex
          items-center
          justify-center
          p-6
        "
        >
          <div
            className="
            relative
            z-10
            flex
            flex-wrap
            justify-center
            items-center
            content-center
            gap-3
            md:gap-4
            w-full
            h-full
          "
          >
            {floatingTags.map((tag, index) => (
              <motion.div
                key={tag}
                drag={window.innerWidth >= 768}
                dragConstraints={constraintsRef}
                dragElastic={0.15}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  rotateX: 8,
                  rotateY: -8,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  cursor-grab
                  select-none
                  rounded-2xl
                  px-5
                  py-3
                  md:px-6
                  md:py-4
                  border
                  border-slate-300/50
                  dark:border-white/10
                  bg-transparent
                  dark:bg-slate-800/40
                  backdrop-blur-xl
                  shadow-lg
                  shadow-slate-300/30
                  dark:shadow-none
                  text-slate-700
                  dark:text-slate-200
                  hover:border-cyan-400/50
                  hover:text-cyan-500
                  dark:hover:text-cyan-300
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_10px_rgba(34,211,238,.9)]
                  "
                  />
                  <span
                    className="
                    text-sm
                    md:text-base
                    lg:text-lg
                    font-semibold
                    tracking-wide
                  "
                  >
                    {tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-400/5 via-transparent to-purple-500/5 pointer-events-none" />
          <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-[100px]" />
          <div className="absolute -right-20 bottom-10 h-52 w-52 rounded-full bg-purple-500/10 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
