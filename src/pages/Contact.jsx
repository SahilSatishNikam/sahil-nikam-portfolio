import { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <main className="contact-page wrap section-padding">
      <Link className="back-link" to="/">
        <ArrowLeft size={16} />
        <span>Return Home</span>
      </Link>

      <div className="section-header">
        <span className="section-eyebrow">GET IN TOUCH / DIRECT CHANNELS</span>
        <h1 className="section-title">Connect with Sahil Nikam</h1>
        <p className="section-lead">
          Interested in software development collaborations, backend engineering discussions, or reviewing technical projects? Reach out through any of the verified channels below.
        </p>
      </div>

      <div className="contact-cards-grid">
        {/* 1. Direct Email Card */}
        <motion.div
          className="contact-card primary-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -4 }}
        >
          <div className="contact-card-icon-wrap">
            <Mail size={26} />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">DIRECT EMAIL</span>
            <h2 className="contact-card-title">{profile.email}</h2>
            <p className="contact-card-desc">
              Direct email is the most reliable way to reach me for job opportunities, technical inquiries, or engineering questions.
            </p>
          </div>
          <div className="contact-card-actions">
            <button
              onClick={copyEmail}
              className="btn btn-secondary btn-sm"
              aria-label="Copy email address"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
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

        {/* 2. LinkedIn Profile Card */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="contact-card-icon-wrap linkedin-wrap">
            <Linkedin size={26} />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">PROFESSIONAL NETWORK</span>
            <h2 className="contact-card-title">LinkedIn Profile</h2>
            <p className="contact-card-desc">
              Connect on LinkedIn to stay updated on my developer trajectory, backend projects, and engineering discussions.
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

        {/* 3. GitHub Profile Card */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          whileHover={{ y: -4 }}
        >
          <div className="contact-card-icon-wrap github-wrap">
            <Github size={26} />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">CODE REPOSITORIES</span>
            <h2 className="contact-card-title">GitHub Profile</h2>
            <p className="contact-card-desc">
              Inspect open-source repositories, Java &amp; Spring Boot architectures, MVC implementations, and database schemas.
            </p>
          </div>
          <div className="contact-card-actions">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label="Visit GitHub profile"
            >
              <span>Visit GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* 4. Current Status Card */}
        <motion.div
          className="contact-card status-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -4 }}
        >
          <div className="contact-card-icon-wrap status-wrap">
            <MapPin size={26} />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">CURRENT POSITION &amp; LOCATION</span>
            <h2 className="contact-card-title">Software Developer Intern</h2>
            <p className="contact-card-desc">
              Working at <strong>Code Metric</strong> (starting October 2026). Based in <strong>India</strong>. Open for technical collaborations and developer networking.
            </p>
          </div>
          <div className="contact-card-actions">
            <div className="active-status-pill">
              <span className="pulse-indicator-emerald" />
              <span>Available for Technical Discussions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
