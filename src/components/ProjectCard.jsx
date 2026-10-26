import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechIcon from './TechIcon';

export default function ProjectCard({ project }) {
  const isGithubConfigured =
    project.github && !project.github.includes('YOUR_GITHUB');
  const hasDemo = Boolean(project.demo && project.demo.trim() !== '');

  return (
    <motion.article
      className={`project-card accent-${project.accent}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="project-card-header">
        <div className="project-meta">
          <span className="project-number">PROJECT #{project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>
        <span className="project-status-badge">{project.status}</span>
      </div>

      {/* Visual Illustration */}
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

        {/* Important Implemented Features */}
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
              aria-label={`View ${project.title} on GitHub`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Github size={15} />
              <span>GitHub Repo</span>
            </motion.a>
          ) : (
            <span className="btn btn-disabled btn-sm" title="Repository URL can be configured in src/data.js">
              <Github size={15} />
              <span>Code Private</span>
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
            aria-label={`View full details for ${project.title}`}
          >
            <span>Project Details</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
