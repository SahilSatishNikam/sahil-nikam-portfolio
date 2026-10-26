import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Education', href: '/#education' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container wrap">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-logo">Sahil Nikam</span>
            <p className="footer-tagline">
              Software Developer Intern at Code Metric specializing in Java, Spring Boot, REST APIs, and database engineering.
            </p>
            <div className="footer-social-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="footer-social-btn"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="footer-social-btn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="footer-social-btn"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-summary-col">
            <span className="footer-col-title">Professional Focus</span>
            <p className="footer-focus-text">
              Building maintainable server-side architectures, reliable relational data layers, and clean RESTful APIs.
            </p>
            <div className="footer-back-to-top">
              <button
                onClick={scrollToTop}
                className="back-to-top-btn"
                aria-label="Scroll back to top of page"
              >
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {currentYear} Sahil Nikam. All rights reserved.
          </p>
          <p className="footer-built-with">
            Designed with intent &bull; Built with React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
