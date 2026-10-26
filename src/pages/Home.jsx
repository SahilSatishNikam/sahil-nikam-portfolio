import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Award,
  Layers,
  Linkedin,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  Briefcase,
  Terminal,
  Cpu,
  Sparkles,
  Server,
  Workflow,
  MapPin,
  Calendar,
} from 'lucide-react';
import {
  profile,
  skills,
  projects,
  experience,
  education,
  certification,
} from '../data';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';
import DeveloperTerminal from '../components/DeveloperTerminal';
import LiveBackground from '../components/LiveBackground';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const TYPEWRITER_WORDS = [
  'Software Developer',
  'Java Developer',
  'Spring Boot Developer',
  'Full Stack Developer',
];

export default function Home() {
  // Typewriter effect state
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('Software Developer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText('Software Developer');
      return;
    }

    const currentFullWord = TYPEWRITER_WORDS[wordIndex];
    let timer;

    if (!isDeleting) {
      // Typing characters
      if (displayText.length < currentFullWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullWord.slice(0, displayText.length + 1));
        }, 85);
      } else {
        // Word completed, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting characters
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullWord.slice(0, displayText.length - 1));
        }, 45);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const tickerItems = useMemo(
    () => [
      'JAVA',
      'SPRING BOOT',
      'REST APIS',
      'MYSQL',
      'SPRING DATA JPA',
      'HIBERNATE',
      'POSTGRESQL',
      'REACT.JS',
      'MAVEN',
      'POSTMAN',
      'GIT & GITHUB',
      'JAVA',
      'SPRING BOOT',
      'REST APIS',
      'MYSQL',
      'SPRING DATA JPA',
      'HIBERNATE',
      'POSTGRESQL',
      'REACT.JS',
      'MAVEN',
      'POSTMAN',
      'GIT & GITHUB',
    ],
    []
  );

  return (
    <main className="main-content">
      {/* Live background ambient lighting & floating subtle particles */}
      <LiveBackground />

      {/* ====================================================
          1. HERO SECTION WITH TYPEWRITER, PHOTO GLOW & TERMINAL
          ==================================================== */}
      <section className="hero-section" id="home">
        <div className="hero-container wrap">
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            className="hero-left"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {/* Active Position Badge */}
            <motion.div className="hero-badge-pill" variants={fadeUp}>
              <span className="pulse-indicator-emerald" />
              <span>Software Developer Intern @ Code Metric</span>
            </motion.div>

            <motion.span className="hero-greeting" variants={fadeUp}>
              {profile.tagline}
            </motion.span>

            <motion.h1 className="hero-name" variants={fadeUp}>
              {profile.name}
            </motion.h1>

            {/* Typewriter Dynamic Title */}
            <motion.div className="hero-typewriter-container" variants={fadeUp}>
              <span className="typewriter-prefix">I am a </span>
              <span className="typewriter-word-wrap">
                <span className="typewriter-text">{displayText}</span>
                <span className="typewriter-cursor" aria-hidden="true">
                  |
                </span>
              </span>
            </motion.div>

            <motion.p className="hero-specialization" variants={fadeUp}>
              {profile.specialization}
            </motion.p>

            <motion.p className="hero-lead" variants={fadeUp}>
              {profile.heroLead}
            </motion.p>

            {/* Hero Action Buttons */}
            <motion.div className="hero-actions" variants={fadeUp}>
              <motion.a
                href="#projects"
                className="btn btn-primary btn-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} />
              </motion.a>

              <motion.a
                href={profile.resume}
                download="SAHIL_NIKAM_SDE.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Me</span>
                <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div className="hero-social-row" variants={fadeUp}>
              <span className="social-label">CONNECT:</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="social-chip"
                aria-label="Send Email"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photograph with Animated Glow + Compact Developer Terminal */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          >
            {/* Glowing Photo Card */}
            <div className="hero-media-stack">
              <div className="profile-frame-outer">
                <div className="profile-frame-inner">
                  <img
                    src={profile.avatar}
                    alt="Sahil Nikam, Software Developer Intern at Code Metric"
                    className="profile-photo"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.classList.add(
                          'photo-missing-fallback'
                        );
                      }
                    }}
                  />
                </div>

                {/* Floating Contextual Badge */}
                <div className="hero-floating-badge">
                  <div className="badge-icon-wrap">
                    <Briefcase size={16} />
                  </div>
                  <div className="badge-text-wrap">
                    <span className="badge-title">Code Metric</span>
                    <span className="badge-sub">Software Developer Intern</span>
                  </div>
                </div>
              </div>

              {/* Developer Terminal Visual Simulation */}
              <DeveloperTerminal />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          2. TECH MARQUEE TICKER
          ==================================================== */}
      <div className="ticker-section" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems.map((tech, idx) => (
            <span key={idx} className="ticker-item">
              <span className="ticker-tech-content">
                <TechIcon name={tech} size={15} />
                <span className="ticker-text">{tech}</span>
              </span>
              <span className="ticker-spark">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ====================================================
          3. ABOUT SECTION
          ==================================================== */}
      <motion.section
        className="section-padding about-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        <div className="wrap">
          <motion.div className="section-header" variants={fadeInUp}>
            <span className="section-eyebrow">01 / BACKGROUND &amp; PHILOSOPHY</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-lead">
              Focused on engineering dependable backend services, clean database architectures, and maintainable software systems.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-narrative" variants={fadeInUp}>
              <p className="narrative-p highlight">{profile.about}</p>
              <p className="narrative-p">
                My academic journey in the{' '}
                <strong>{education.degree}</strong> program at{' '}
                <strong>{education.college}</strong> (
                {education.university}) established my strong foundation in core computer science, relational databases, object-oriented programming, and algorithms.
              </p>
              <p className="narrative-p">
                Furthering my hands-on enterprise capabilities, I completed the{' '}
                <strong>{certification.title}</strong> program from{' '}
                <strong>{certification.institution}</strong>, mastering Spring Boot, Spring Data JPA, Hibernate, and RESTful API engineering with MySQL.
              </p>
              <p className="narrative-p">
                I approach software with a focus on code readability, solid API contracts, proper testing via Postman, and collaborative version control with Git.
              </p>

              <div className="about-cta-row">
                <motion.a
                  href="#skills"
                  className="btn btn-outline"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Skills</span>
                  <ArrowDown size={15} />
                </motion.a>
                <motion.a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText size={15} />
                  <span>View Full Resume</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div className="about-cards-column" variants={fadeInUp}>
              <motion.div
                className="about-feature-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-icon-box">
                  <Server size={20} />
                </div>
                <h3>Backend Architecture</h3>
                <p>
                  Layered Spring Boot applications featuring clear separation of concerns across Controller, Service, and Repository layers for maintainability and testability.
                </p>
              </motion.div>

              <motion.div
                className="about-feature-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-icon-box">
                  <Database size={20} />
                </div>
                <h3>Relational Data Engineering</h3>
                <p>
                  Designing normalized schemas in MySQL, managing data integrity, and leveraging Spring Data JPA &amp; Hibernate for efficient ORM persistence.
                </p>
              </motion.div>

              <motion.div
                className="about-feature-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-icon-box">
                  <Workflow size={20} />
                </div>
                <h3>Practical Software Engineering</h3>
                <p>
                  Writing clean, readable code, structuring maintainable RESTful HTTP endpoints, and continuously expanding Java backend capabilities.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====================================================
          4. SKILLS SECTION (5 CATEGORIES)
          ==================================================== */}
      <motion.section
        className="section-padding skills-section"
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        <div className="wrap">
          <motion.div className="section-header" variants={fadeInUp}>
            <span className="section-eyebrow">02 / TECHNICAL TOOLKIT</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-lead">
              Structured into key domains representing my core backend focus and supporting development capabilities.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((groupObj, idx) => (
              <motion.div
                key={groupObj.group}
                className="skills-group-card"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="group-card-header">
                  <span className="group-number">0{idx + 1}</span>
                  <div>
                    <h3 className="group-title">{groupObj.group}</h3>
                    <span className="group-category">{groupObj.category}</span>
                  </div>
                </div>

                <div className="skills-pill-wrap">
                  {groupObj.items.map((skillItem) => (
                    <motion.span
                      key={skillItem}
                      className="skill-pill"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                    >
                      <TechIcon name={skillItem} size={15} />
                      <span>{skillItem}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====================================================
          5. PROJECTS SECTION (3D TILT & SOURCE LINKS)
          ==================================================== */}
      <motion.section
        className="section-padding projects-section"
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        <div className="wrap">
          <motion.div className="section-header" variants={fadeInUp}>
            <span className="section-eyebrow">03 / SELECTED PORTFOLIO WORK</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-lead">
              Practical software systems demonstrating backend architectures, relational persistence, and clean API design.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <motion.div className="projects-footer-note" variants={fadeInUp}>
            <span className="pulse-indicator-emerald" />
            <span>
              All project source codes and ongoing updates are maintained on GitHub.
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================
          6. PROFESSIONAL EXPERIENCE SECTION (TIMELINE)
          ==================================================== */}
      <motion.section
        className="section-padding experience-section"
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        <div className="wrap">
          <motion.div className="section-header" variants={fadeInUp}>
            <span className="section-eyebrow">04 / CAREER HISTORY</span>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-lead">
              Practical software development experience, hands-on engineering, and collaborative technical problem solving.
            </p>
          </motion.div>

          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="timeline-marker">
                  <Briefcase size={16} />
                </div>
                <div className="timeline-content-card">
                  <div className="card-top-row">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <span className="experience-company">{exp.company}</span>
                    </div>
                    <div className="experience-badge-wrap">
                      <span className="experience-period">
                        <Calendar size={12} className="inline-icon" />
                        {exp.period}
                      </span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="experience-desc">{exp.description}</p>
                  )}

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="experience-highlights">
                      <span className="highlights-label">Key Responsibilities:</span>
                      <ul>
                        {exp.highlights.map((h, i) => (
                          <li key={i}>
                            <CheckCircle2 size={14} className="check-icon" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="experience-tech-row">
                      {exp.technologies.map((t) => (
                        <span key={t} className="tech-tag">
                          <TechIcon name={t} size={13} />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====================================================
          7. EDUCATION & CERTIFICATION SECTION
          ==================================================== */}
      <motion.section
        className="section-padding education-section"
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        <div className="wrap">
          <motion.div className="section-header" variants={fadeInUp}>
            <span className="section-eyebrow">05 / ACADEMIC &amp; CREDENTIALS</span>
            <h2 className="section-title">Education &amp; Certification</h2>
            <p className="section-lead">
              Academic degree in computer applications paired with professional full stack software certification.
            </p>
          </motion.div>

          <div className="edu-cert-grid">
            {/* Education Card */}
            <motion.div
              className="credential-card"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="credential-card-top">
                <div className="credential-icon-box">
                  <GraduationCap size={22} />
                </div>
                <span className="credential-badge">Degree</span>
              </div>
              <h3 className="credential-title">{education.degree}</h3>
              <div className="credential-institution">
                <strong>{education.college}</strong>
                <span>
                  {education.university} &bull; {education.location}
                </span>
              </div>
              <p className="credential-description">{education.description}</p>
            </motion.div>

            {/* Certification Card */}
            <motion.div
              className="credential-card"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="credential-card-top">
                <div className="credential-icon-box">
                  <Award size={22} />
                </div>
                <span className="credential-badge">Certification</span>
              </div>
              <h3 className="credential-title">{certification.title}</h3>
              <div className="credential-institution">
                <strong>{certification.institution}</strong>
                <span>Professional Training Program</span>
              </div>
              <p className="credential-description">{certification.description}</p>
              <ul className="credential-bullets">
                {certification.highlights.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={13} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====================================================
          8. RESUME CTA SECTION
          ==================================================== */}
      <motion.section
        className="section-padding resume-section"
        id="resume"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        <div className="wrap">
          <motion.div className="resume-banner" variants={fadeInUp}>
            <div className="resume-banner-content">
              <span className="banner-eyebrow">PROFESSIONAL PROFILE</span>
              <h2 className="banner-title">Looking for a verified developer resume?</h2>
              <p className="banner-desc">
                Review my academic background, technical competencies, and developer experience in a clean, formatted PDF resume.
              </p>
              <div className="banner-buttons">
                <motion.a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-glow"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText size={16} />
                  <span>View Resume</span>
                </motion.a>
                <motion.a
                  href={profile.resume}
                  download="SAHIL_NIKAM_SDE.pdf"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </motion.a>
              </div>
            </div>

            <div className="resume-banner-art" aria-hidden="true">
              <div className="resume-preview-sheet">
                <div className="sheet-header">
                  <div className="sheet-avatar-circle" />
                  <div className="sheet-lines">
                    <div className="line title" />
                    <div className="line sub" />
                  </div>
                </div>
                <div className="sheet-body-lines">
                  <div className="line" />
                  <div className="line" />
                  <div className="line short" />
                </div>
                <div className="sheet-footer-badge">PDF DOCUMENT</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================
          9. CONTACT SECTION (VERIFIED INTERACTIVE CARDS)
          ==================================================== */}
      <motion.section
        className="section-padding contact-section"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        <div className="wrap">
          <motion.div className="section-header" variants={fadeInUp}>
            <span className="section-eyebrow">06 / GET IN TOUCH</span>
            <h2 className="section-title">Let’s Connect</h2>
            <p className="section-lead">
              Interested in collaborating, discussing software engineering opportunities, or reviewing technical projects? Reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="contact-cards-grid">
            {/* 1. Direct Email Card */}
            <motion.div
              className="contact-card primary-card"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon-wrap">
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">DIRECT EMAIL</span>
                <h3 className="contact-card-title">{profile.email}</h3>
                <p className="contact-card-desc">
                  The quickest way to reach me for opportunities, technical queries, or professional messages.
                </p>
              </div>
              <div className="contact-card-actions">
                <button
                  onClick={copyEmail}
                  className="btn btn-secondary btn-sm"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-primary btn-sm"
                >
                  <span>Open Email Client</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* 2. LinkedIn Card */}
            <motion.div
              className="contact-card"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon-wrap linkedin-wrap">
                <Linkedin size={24} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">PROFESSIONAL NETWORK</span>
                <h3 className="contact-card-title">LinkedIn Profile</h3>
                <p className="contact-card-desc">
                  Connect with me on LinkedIn to follow my ongoing developer journey, network, or discuss backend tech.
                </p>
              </div>
              <div className="contact-card-actions">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Visit LinkedIn profile"
                >
                  <span>Visit LinkedIn</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* 3. GitHub Card */}
            <motion.div
              className="contact-card"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon-wrap github-wrap">
                <Github size={24} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">SOURCE REPOSITORIES</span>
                <h3 className="contact-card-title">GitHub Profile</h3>
                <p className="contact-card-desc">
                  Explore my project source code, repository commits, Java architectures, and technical implementations.
                </p>
              </div>
              <div className="contact-card-actions">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Visit GitHub repositories"
                >
                  <span>Visit GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* 4. Current Status & Location Card */}
            <motion.div
              className="contact-card status-card"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon-wrap status-wrap">
                <MapPin size={24} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">CURRENT STATUS</span>
                <h3 className="contact-card-title">
                  Software Developer Intern
                </h3>
                <p className="contact-card-desc">
                  Working at <strong>Code Metric</strong> (starting October 2026). Based in <strong>India</strong>. Open to technical collaborations and engineering discussions.
                </p>
              </div>
              <div className="contact-card-actions">
                <div className="active-status-pill">
                  <span className="pulse-indicator-emerald" />
                  <span>Available for Technical Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
