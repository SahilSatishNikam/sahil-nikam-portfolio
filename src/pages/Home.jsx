import { useState, useEffect } from 'react';
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
  Send,
  CheckCircle2,
  Copy,
  Check,
  Briefcase,
  Terminal,
  Cpu,
  Sparkles,
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

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const roles = [
  'Software Developer',
  'Java Backend Engineer',
  'Spring Boot Specialist',
  'RESTful API Developer',
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  // Dynamic role title cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subjectLine = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subjectLine}&body=${bodyContent}`;
    setFormSubmitted(true);
  };

  const handleResumeClick = (e) => {
    fetch(profile.resume, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          setShowResumeNotice(true);
        }
      })
      .catch(() => {
        setShowResumeNotice(true);
      });
  };

  const isEmailPlaceholder =
    !profile.email || profile.email.includes('YOUR_EMAIL');

  const tickerItems = [
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
  ];

  return (
    <main className="main-content">
      {/* ====================================================
          1. HERO SECTION WITH AMBIENT ORBS & PROFILE FLOAT
          ==================================================== */}
      <section className="hero-section" id="home">
        {/* Animated background ambient glowing lights */}
        <div className="hero-ambient-glow orb-1" aria-hidden="true" />
        <div className="hero-ambient-glow orb-2" aria-hidden="true" />
        <div className="hero-ambient-grid" aria-hidden="true" />

        <div className="hero-container wrap">
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            className="hero-left"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {profile.isOpenToOpportunities && (
              <motion.div className="availability-pill" variants={fadeUp}>
                <span className="pulse-indicator" />
                <span>{profile.availabilityText}</span>
              </motion.div>
            )}

            <motion.span className="hero-greeting" variants={fadeUp}>
              {profile.tagline}
            </motion.span>

            <motion.h1 className="hero-name" variants={fadeUp}>
              {profile.name}
            </motion.h1>

            <motion.div className="hero-title-container" variants={fadeUp}>
              <span className="role-prefix">Specializing as </span>
              <div className="role-slider-wrapper">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="hero-role-animated"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p className="hero-specialization" variants={fadeUp}>
              {profile.specialization}
            </motion.p>

            <motion.p className="hero-lead" variants={fadeUp}>
              {profile.heroLead}
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <motion.a
                href="#projects"
                className="btn btn-primary btn-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore My Projects</span>
                <ArrowDown size={16} />
              </motion.a>

              <motion.a
                href={profile.resume}
                download="SAHIL_NIKAM_SDE.pdf"
                onClick={handleResumeClick}
                className="btn btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.a>

              <a href="#contact" className="hero-text-link">
                <span>Get In Touch</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            <motion.div className="hero-social-row" variants={fadeUp}>
              <span className="social-label">CONNECT:</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="social-chip"
                aria-label="Send Email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Actual Professional Profile Photo with Shimmer Frame */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="profile-frame-outer">
              <div className="profile-frame-inner">
                <img
                  src={profile.avatar}
                  alt="Sahil Nikam, Software Developer"
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

              {/* Floating Contextual Badge with counter-float */}
              <div className="hero-floating-badge">
                <div className="badge-icon-wrap">
                  <Code2 size={16} />
                </div>
                <div className="badge-text-wrap">
                  <span className="badge-title">Backend Focus</span>
                  <span className="badge-sub">Java &bull; Spring Boot</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          2. INFINITE TECH MARQUEE TICKER
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
          3. ABOUT ME SECTION (SCROLL-TRIGGERED STAGGER)
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
              Focused on engineering dependable backend systems, structured databases, and readable software solutions.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-narrative" variants={fadeInUp}>
              <p className="narrative-p highlight">{profile.about}</p>
              <p className="narrative-p">
                My academic journey in the <strong>Bachelor of Computer Science (BCS)</strong> program provided a solid grounding in software fundamentals, algorithms, and database systems. Further strengthening my practical skills, I completed the <strong>Java Full Stack Development</strong> certification from <strong>Fortune Cloud</strong>, immersing myself in real-world Java enterprise patterns, REST API construction, and persistent data layers.
              </p>
              <p className="narrative-p">
                I believe that good software is built with intention: clear architecture, thorough testing with tools like Postman, and collaborative version control using Git.
              </p>

              <div className="about-cta-row">
                <motion.a
                  href="#skills"
                  className="btn btn-outline"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore My Toolkit</span>
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
                whileHover={{ y: -4, borderColor: 'var(--accent-blue)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-icon-box">
                  <Terminal size={20} />
                </div>
                <h3>Clean Backend Architecture</h3>
                <p>
                  Layered Spring Boot applications featuring clear boundaries across Controller, Service, and Repository layers for maintainability and testability.
                </p>
              </motion.div>

              <motion.div
                className="about-feature-card"
                whileHover={{ y: -4, borderColor: 'var(--accent-blue)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-icon-box">
                  <Database size={20} />
                </div>
                <h3>Relational Data Engineering</h3>
                <p>
                  Designing normalized schemas in MySQL and PostgreSQL, managing transactions, and leveraging Spring Data JPA and Hibernate for reliable data access.
                </p>
              </motion.div>

              <motion.div
                className="about-feature-card"
                whileHover={{ y: -4, borderColor: 'var(--accent-blue)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-icon-box">
                  <Cpu size={20} />
                </div>
                <h3>Continuous Learning</h3>
                <p>
                  Committed to exploring modern software tools, deepening Java 8+ features, and continuously refining development workflows.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====================================================
          4. TECHNICAL SKILLS SECTION (DYNAMIC REVEAL)
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
              Organized into distinct groups representing my core backend focus and supporting development capabilities.
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
          5. PROJECTS SECTION (STAGGERED CARDS)
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
            <span className="pulse-indicator" />
            <span>
              All project source codes and ongoing updates are maintained on GitHub. Specific repository links can be configured in <code>src/data.js</code>.
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================
          6. PROFESSIONAL EXPERIENCE SECTION (TIMELINE ANIMATION)
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
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>

                  <p className="experience-desc">{exp.description}</p>

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

                  <div className="experience-tech-row">
                    {exp.technologies.map((t) => (
                      <span key={t} className="tech-tag">
                        <TechIcon name={t} size={13} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="config-hint-box" variants={fadeInUp}>
            <small>
              Note: Current employer details, tenure dates, and project assignments are fully editable via <code>src/data.js</code>.
            </small>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================
          7. EDUCATION & CERTIFICATIONS SECTION
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
              Academic degree in computer science paired with professional full stack software certification.
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
                <span>{education.university} &bull; {education.location}</span>
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
          8. RESUME CTA SECTION (SHIMMER BANNER)
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
              <span className="banner-eyebrow">PROFESSIONAL DOSSIER</span>
              <h2 className="banner-title">Looking for a verified developer profile?</h2>
              <p className="banner-desc">
                Review my comprehensive academic background, verified coursework, technical competencies, and development experience in a formatted resume.
              </p>
              <div className="banner-buttons">
                <motion.a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleResumeClick}
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
                  onClick={handleResumeClick}
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

          {showResumeNotice && (
            <div className="resume-notice-box">
              <div className="notice-inner">
                <p>
                  <strong>Resume File Setup:</strong> Place your PDF at{' '}
                  <code>public/resume/SAHIL_NIKAM_SDE.pdf</code> to enable direct one-click viewing and downloading.
                </p>
                <button
                  onClick={() => setShowResumeNotice(false)}
                  className="notice-dismiss-btn"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* ====================================================
          9. CONTACT SECTION
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
            <h2 className="section-title">Contact</h2>
            <p className="section-lead">
              Have a question, software development opportunity, or want to discuss technical projects? Send a message directly.
            </p>
          </motion.div>

          <div className="contact-grid-layout">
            {/* Left: Contact Info & Direct Links */}
            <motion.div className="contact-info-col" variants={fadeInUp}>
              <div className="direct-card">
                <span className="direct-label">DIRECT EMAIL</span>
                <h3 className="direct-address">
                  {isEmailPlaceholder ? 'YOUR_EMAIL@example.com' : profile.email}
                </h3>
                <p className="direct-text">
                  {isEmailPlaceholder
                    ? 'Update your email address in src/data.js before publishing.'
                    : 'The quickest way to get in touch for technical inquiries or discussions.'}
                </p>

                <div className="direct-actions">
                  <motion.button
                    onClick={copyEmail}
                    className="btn btn-secondary btn-sm"
                    aria-label="Copy email address"
                    whileTap={{ scale: 0.95 }}
                  >
                    {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                  </motion.button>
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn btn-outline btn-sm"
                  >
                    <span>Open Email Client</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="social-links-card">
                <span className="direct-label">PROFESSIONAL CHANNELS</span>
                <div className="channel-list">
                  <motion.a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="channel-item"
                    whileHover={{ x: 4 }}
                  >
                    <div className="channel-icon-wrap">
                      <Linkedin size={18} />
                    </div>
                    <div className="channel-text">
                      <strong>LinkedIn</strong>
                      <small>Connect with Sahil Nikam</small>
                    </div>
                    <ArrowUpRight size={15} className="channel-arrow" />
                  </motion.a>

                  <motion.a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="channel-item"
                    whileHover={{ x: 4 }}
                  >
                    <div className="channel-icon-wrap">
                      <Github size={18} />
                    </div>
                    <div className="channel-text">
                      <strong>GitHub</strong>
                      <small>Browse code repositories</small>
                    </div>
                    <ArrowUpRight size={15} className="channel-arrow" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Right: Functional Message Form */}
            <motion.div className="contact-form-col" variants={fadeInUp}>
              <div className="contact-form-wrapper">
                <h3 className="form-title">Send a Direct Message</h3>
                <p className="form-sub">
                  Fill in your message below. Submitting will open your default email client with your message pre-filled.
                </p>

                {formSubmitted && (
                  <motion.div
                    className="form-success-banner"
                    role="status"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 size={16} />
                    <span>Email client initiated with your message details.</span>
                  </motion.div>
                )}

                <form onSubmit={handleFormSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Alex Sharma"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. alex@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      placeholder="e.g. Software Development Project"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Write your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-block btn-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={16} />
                    <span>Compose &amp; Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
