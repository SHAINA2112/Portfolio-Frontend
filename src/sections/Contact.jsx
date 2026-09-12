import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import ScrollReveal from "../components/ui/ScrollReveal";
import FloatingField from "../components/ui/FloatingField";
import MagneticButton from "../components/ui/MagneticButton";
import { socials } from "../data/socials";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: SiGmail,
  instagram: FaInstagram,
};

// Backend URL — set VITE_API_URL in a .env file for local dev / prod.
// Falls back to localhost so it works out of the box while developing.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialForm = { name: "", email: "", subject: "", message: "", website: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    setSubmitError("");

    if (Object.keys(fieldErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // includes honeypot "website" field, ignored by real users
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setSubmitError(
        err.message === "Failed to fetch"
          ? "Couldn't reach the server. Please check your connection and try again."
          : err.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative ">
      <Container>
        <SectionHeading
          title="Let's build something together"
          description="Have a project in mind or just want to say hi? My inbox is open."
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Info column */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <GlassCard
              hover={false}
              className="flex h-full flex-col justify-between gap-8 p-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cyan">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-wide text-text-secondary">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-text-primary">
                      shaheenakhtarbsr12@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cyan">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-wide text-text-secondary">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-text-primary">
                      Bhakkar, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-3 font-accent text-xs uppercase tracking-wide text-text-secondary">
                  Find me on
                </p>
                <div className="flex gap-3">
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
              </div>
            </GlassCard>
          </ScrollReveal>
          {/* Form column */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <GlassCard hover={false} className="p-8">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FloatingField
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                  />
                  <FloatingField
                    label="Your Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                  />
                </div>
                <FloatingField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.subject}
                />
                <FloatingField
                  label="Message"
                  name="message"
                  as="textarea"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                />

                {/* Honeypot field — invisible to real users, bots tend to fill every field */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
                  aria-hidden="true"
                />

                <MagneticButton
                  type="submit"
                  variant="primary"
                  className="mt-2 self-start"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending <Loader2 size={15} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </MagneticButton>

                <AnimatePresence>
                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 font-accent text-sm text-accent-tertiary"
                    >
                      <CheckCircle2 size={16} /> Message sent — I'll get back to
                      you soon.
                    </motion.p>
                  )}
                  {submitError && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 font-accent text-sm text-red-400"
                    >
                      <AlertCircle size={16} /> {submitError}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
