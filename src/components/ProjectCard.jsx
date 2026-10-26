import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, CheckCircle2, Layers, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechIcon from './TechIcon';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isGithubConfigured =
    project.github &&
    !project.github.includes('YOUR_GITHUB') &&
    project.github.trim() !== '';
  const hasDemo = Boolean(project.demo && project.demo.trim() !== '');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    // Don't tilt if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Restrained, subtle 3D tilt (max ~4.5 degrees)
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.article
      ref={cardRef}
      className={`project-card accent-${project.accent} ${isHovered ? 'hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateY(${isHovered ? '-6px' : '0px'})`,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out'
          : 'transform 0.4s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out',
      }}
    >
      <div className="project-card-header">
        <div className="project-meta">
          <span className="project-number">PROJECT #{project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>
        <span className="project-status-badge">{project.status}</span>
      </div>

      {/* Visual System Mock Illustration */}
      <div className="project-art-container" aria-hidden="true">
        {project.visual === 'batch' && (
          <div className="illustration-wrapper illustration-batch">
            <div className="batch-window">
              <div className="window-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="window-title">BatchManagementService.java</span>
              </div>
              <div className="batch-dashboard-mock">
                <div className="batch-sidebar">
                  <div className="mock-item active" />
                  <div className="mock-item" />
                  <div className="mock-item" />
                </div>
                <div className="batch-panel">
                  <div className="batch-header-bar">
                    <span className="batch-badge">Cohort 2026-A</span>
                    <span className="batch-metric">Status: Active</span>
                  </div>
                  <div className="batch-grid-mock">
                    <div className="batch-card-stat">
                      <small>Modules</small>
                      <strong>08 / 10</strong>
                    </div>
                    <div className="batch-card-stat">
                      <small>Attendance</small>
                      <strong>94%</strong>
                    </div>
                  </div>
                  <div className="batch-progress-row">
                    <div className="progress-bar-fill animated-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {project.visual === 'employee' && (
          <div className="illustration-wrapper illustration-employee">
            <div className="api-window-mock">
              <div className="window-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="window-title">EmployeeController.java (REST API)</span>
              </div>
              <div className="api-code-block">
                <div className="code-line">
                  <span className="code-annotation">@GetMapping</span>
                  <span className="code-param">(&quot;/api/v1/employees/&#123;id&#125;&quot;)</span>
                </div>
                <div className="code-line indent">
                  <span className="code-keyword">public</span> ResponseEntity&lt;EmployeeDTO&gt; getEmployeeById(...) &#123;
                </div>
                <div className="code-response-preview">
                  <span className="status-pill pulse-slow">HTTP 200 OK</span>
                  <span className="response-key">&quot;department&quot;: &quot;Engineering&quot;</span>
                  <span className="response-key">&quot;status&quot;: &quot;Active&quot;</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {project.visual === 'salon' && (
          <div className="illustration-wrapper illustration-salon">
            <div className="salon-window-mock">
              <div className="window-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="window-title">SalonServlet &amp; JDBC Service</span>
              </div>
              <div className="salon-workflow-mock">
                <div className="workflow-step">
                  <span className="step-num">01</span>
                  <span>Service Catalog</span>
                </div>
                <div className="workflow-arrow">&rarr;</div>
                <div className="workflow-step active pulse-glow-box">
                  <span className="step-num">02</span>
                  <span>Appointment Slot</span>
                </div>
                <div className="workflow-arrow">&rarr;</div>
                <div className="workflow-step">
                  <span className="step-num">03</span>
                  <span>MySQL Persistence</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {/* Problem Solved Callout */}
        <div className="problem-solved-box">
          <span className="box-label">
            <Layers size={13} />
            <span>Problem Solved</span>
          </span>
          <p>{project.problemSolved}</p>
        </div>

        {/* Key Implemented Features */}
        <div className="project-highlights">
          <span className="highlights-title">Key Implemented Features:</span>
          <ul className="highlights-list">
            {project.highlights.slice(0, 3).map((item, index) => (
              <li key={index}>
                <CheckCircle2 size={14} className="highlight-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="project-tech-stack" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-badge">
              <TechIcon name={tech} size={13} />
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          {isGithubConfigured ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`View ${project.title} Source Code on GitHub`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Github size={15} />
              <span>Source Code</span>
            </motion.a>
          ) : (
            <span className="btn btn-disabled btn-sm" title="Repository is private or being configured">
              <Github size={15} />
              <span>Source Code</span>
            </span>
          )}

          {hasDemo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </motion.a>
          )}

          <Link
            to={`/projects/${project.slug}`}
            className="btn btn-outline btn-sm ml-auto"
            aria-label={`View Project details for ${project.title}`}
          >
            <span>View Project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
