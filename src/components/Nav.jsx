import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profile } from '../data';

const NAV_ITEMS = [
  { label: 'Home', href: '/#home', id: 'home' },
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Skills', href: '/#skills', id: 'skills' },
  { label: 'Projects', href: '/#projects', id: 'projects' },
  { label: 'Experience', href: '/#experience', id: 'experience' },
  { label: 'Education', href: '/#education', id: 'education' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Scroll depth tracking for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section scrollspy observer
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by visibility ratio or top position
          visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-shell">
        <Link
          className="brand"
          to="/#home"
          onClick={close}
          aria-label="Sahil Nikam - Home"
        >
          <span className="brand-mark">SN</span>
          <span className="brand-text">
            <span className="brand-name">Sahil Nikam</span>
            <span className="brand-sub">Software Developer Intern</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu backdrop */}
        {open && (
          <div className="nav-backdrop" onClick={close} aria-hidden="true" />
        )}

        <nav id="primary-nav" className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={close}
              >
                <span>{item.label}</span>
                {isActive && <span className="nav-active-pill" />}
              </a>
            );
          })}

          <div className="nav-actions-group">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="nav-resume-btn"
              onClick={close}
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
            <a href="/#contact" className="nav-cta-btn" onClick={close}>
              <span>Let’s Talk</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
