import { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subjectLine = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subjectLine}&body=${bodyContent}`;
    setSubmitted(true);
  };

  const isEmailPlaceholder =
    !profile.email || profile.email.includes('YOUR_EMAIL');

  return (
    <main className="contact-page wrap section-padding">
      <Link className="back-link" to="/">
        <ArrowLeft size={16} />
        <span>Return Home</span>
      </Link>

      <div className="section-header">
        <span className="section-eyebrow">GET IN TOUCH / DIRECT LINE</span>
        <h1 className="section-title">Contact Sahil Nikam</h1>
        <p className="section-lead">
          Have an interesting software engineering opportunity, technical inquiry, or want to connect? Reach out below.
        </p>
      </div>

      <div className="contact-grid-layout">
        {/* Left Column: Direct Info */}
        <div className="contact-info-col">
          <div className="direct-card">
            <span className="direct-label">DIRECT EMAIL</span>
            <h2 className="direct-address">
              {isEmailPlaceholder ? 'YOUR_EMAIL@example.com' : profile.email}
            </h2>
            <p className="direct-text">
              {isEmailPlaceholder
                ? 'Update your email in src/data.js before publishing.'
                : 'Direct email is the fastest way to get in touch.'}
            </p>

            <div className="direct-actions">
              <button
                onClick={copyEmail}
                className="btn btn-secondary btn-sm"
                aria-label="Copy email address"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-outline btn-sm"
              >
                <span>Open Email App</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="social-links-card">
            <span className="direct-label">PROFESSIONAL PROFILES</span>
            <div className="channel-list">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-wrap">
                  <Linkedin size={18} />
                </div>
                <div className="channel-text">
                  <strong>LinkedIn</strong>
                  <small>View professional profile</small>
                </div>
                <ArrowUpRight size={15} className="channel-arrow" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-wrap">
                  <Github size={18} />
                </div>
                <div className="channel-text">
                  <strong>GitHub</strong>
                  <small>Inspect repositories and contributions</small>
                </div>
                <ArrowUpRight size={15} className="channel-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-col">
          <div className="contact-form-wrapper">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-sub">
              Submitting initiates your email client with your message pre-populated.
            </p>

            {submitted && (
              <div className="form-success-banner" role="status">
                <CheckCircle2 size={16} />
                <span>Email client initiated with your message details.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
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
                  placeholder="e.g. Backend Development Inquiry"
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

              <button type="submit" className="btn btn-primary btn-block">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
