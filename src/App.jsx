
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Smartphone,
  BrainCircuit
} from "lucide-react";
import ParticleSculpture from "./components/ParticleSculpture.jsx";

const projects = [
  {
    number: "01",
    name: "KIA",
    description: "A personal AI voice assistant built with Python.",
    tech: "PYTHON · AI · AUTOMATION",
    icon: BrainCircuit
  },
  {
    number: "02",
    name: "Vibe Market",
    description: "A modern mobile marketplace experience.",
    tech: "FLUTTER · DART",
    icon: Smartphone
  },
  {
    number: "03",
    name: "PennyPal",
    description: "A personal finance management concept.",
    tech: "UI/UX · MOBILE DEVELOPMENT",
    icon: Code2
  }
];

const skills = [
  "JavaScript", "React", "Python", "Flutter",
  "Dart", "HTML", "CSS", "UI/UX Design"
];

export default function App() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">D<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-contact" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">INDEPENDENT DEVELOPER · CREATIVE THINKER</p>

          <h1>
            Building ideas<br />
            into digital<br />
            <span>experiences.</span>
          </h1>

          <p className="hero-description">
            I'm Onyemaechi Daniel — a developer and creative
            problem solver exploring the intersection of
            technology, design and innovation.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a href="#about" className="secondary-btn">
              Discover more
            </a>
          </div>
        </div>

        <div className="hero-art">
          <ParticleSculpture />
          <div className="art-label">
            <span>01 / DIGITAL MATTER</span>
            <span>FORM · ENERGY · MOTION</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BASED IN NIGERIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>PORTFOLIO © 2026</span>
        </div>
      </section>

      <section className="about section" id="about">
        <p className="eyebrow">01 — ABOUT ME</p>
        <div className="about-content">
          <h2>Curious mind.<br /><span>Creative builder.</span></h2>
          <p>
            I'm an aspiring software developer and ADSE student
            at Aptech. I enjoy turning ideas into functional
            digital experiences, learning new technologies and
            solving real-world problems through code.
          </p>
        </div>
      </section>

      <section className="skills section" id="skills">
        <p className="eyebrow">02 — MY TOOLKIT</p>
        <h2>Technologies I work with.</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill"
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
              <ArrowUpRight size={16} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <p className="eyebrow">03 — SELECTED WORK</p>
        <h2>Ideas into reality.</h2>
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <Icon size={25} />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>{project.tech}</span>
                  <ArrowUpRight size={18} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">04 — GET IN TOUCH</p>
        <h2>Have an idea?<br /><span>Let's build it.</span></h2>

        <a href="mailto:your-email@example.com" className="primary-btn">
          Start a conversation <Mail size={17} />
        </a>

        <div className="socials">
          <a href="https://github.com/onyemaechid19-ctrl"
             target="_blank" rel="noreferrer">
            <Github /> GitHub
          </a>
          <a href="https://linkedin.com/"
             target="_blank" rel="noreferrer">
            <Linkedin /> LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 ONYEMAECHI DANIEL</span>
        <span>DESIGNED WITH INTENTION.</span>
      </footer>
    </main>
  );
}
