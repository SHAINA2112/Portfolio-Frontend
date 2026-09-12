import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Container from "../components/ui/Container";
import { navLinks } from "../data/navLinks";
import { socials } from "../data/socials";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: SiGmail,
  instagram: FaInstagram,
};

export default function Footer() {
  return (
    <footer className="relative pt-28 pb-8">
      <Container>
        <div className="glass rounded-3xl px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-text-primary">
                Shaina<span className="text-cyan">.</span>
              </h3>
              <p className="mt-2 max-w-xs text-sm text-text-secondary">
                Frontend developer crafting elegant, responsive, and interactive
                web experiences.
              </p>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={700}
                    offset={-90}
                    className="cursor-pointer font-accent text-sm text-text-secondary transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-3">
              {socials.map(({ label, icon, href }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-cyan"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="font-accent text-xs text-text-secondary">
              © {new Date().getFullYear()}{" "}
              <span className="text-text-primary">Shaina</span>. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
