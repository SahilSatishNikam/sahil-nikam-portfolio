import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Layers,
  Code2,
  ExternalLink,
} from 'lucide-react';
import { projects } from '../data';
import TechIcon from '../components/TechIcon';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/#projects" replace />;

  const isGithubConfigured =
    project.github && !project.github.includes('YOUR_GITHUB');
  const hasDemo = Boolean(project.demo && project.demo.trim() !== '');

  return (
    <main className="detail-page wrap section-padding">
      <Link className="back-link" to="/#projects">
        <ArrowLeft size={16} />
        <span>Back to all projects</span>
      </Link>

      <div className="detail-top-card">
        <div className="detail-header-copy">
          <div className="detail-meta-pills">
            <span className="project-number">PROJECT #{project.number}</span>
            <span className="project-category">{project.category}</span>
            <span className="project-status-badge">{project.status}</span>
          </div>

          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-summary-lead">{project.summary}</p>

          <div className="detail-action-bar">
            {isGithubConfigured ? (
              <a
                className="btn btn-primary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                <span>View on GitHub</span>
              </a>
            ) : (
              <span className="btn btn-disabled">
                <Github size={16} />
                <span>Repository URL in data.js</span>
              </span>
            )}

            {hasDemo && (
              <a
                className="btn btn-secondary"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </div>

        <div className={`detail-hero-visual accent-${project.accent}`}>
          <div className="visual-glass-panel">
            <span className="visual-code-tag">SYSTEM COMPONENT</span>
            <h2 className="visual-big-title">
              {project.title.split(' ').slice(0, 2).join(' ')}
              <br />
              <em>{project.title.split(' ').slice(2).join(' ') || 'APPLICATION'}</em>
            </h2>
            <div className="visual-specs-row">
              <span>ARCHITECTURE: MVC / LAYERED</span>
              <span>DATA: RELATIONAL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-sections-grid">
        <section className="detail-block">
          <div className="block-header">
            <Layers size={18} className="block-icon" />
            <h3>Problem Solved</h3>
          </div>
          <p className="block-body-text">{project.problemSolved}</p>
        </section>

        <section className="detail-block">
          <div className="block-header">
            <Code2 size={18} className="block-icon" />
            <h3>System Overview</h3>
          </div>
          <p className="block-body-text">{project.description}</p>
        </section>

        <section className="detail-block full-width">
          <div className="block-header">
            <CheckCircle2 size={18} className="block-icon" />
            <h3>Key Implemented Highlights</h3>
          </div>
          <ul className="detail-highlights-list">
            {project.highlights.map((highlight, index) => (
              <li key={index}>
                <CheckCircle2 size={16} className="item-icon" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="detail-block full-width">
          <div className="block-header">
            <Layers size={18} className="block-icon" />
            <h3>Technology Stack</h3>
          </div>
          <div className="detail-tech-chips">
            {project.stack.map((item) => (
              <span key={item} className="tech-badge-large">
                <TechIcon name={item} size={16} />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="detail-footer-nav">
        <div>
          <span className="nav-eyebrow">CONTINUE EXPLORING</span>
          <h3 className="nav-heading">Check out other software projects</h3>
        </div>
        <Link className="btn btn-outline" to="/#projects">
          <span>Return to Projects</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
