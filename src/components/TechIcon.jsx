import {
  Code2,
  Database,
  GitBranch,
  Github,
  Globe,
  Layers,
  Terminal,
  Cpu,
  Boxes,
  Workflow,
  ShieldAlert,
  Cable,
  Package,
  Send,
  Coffee,
  FolderTree,
  Server,
  FileCode,
  Flame,
  Layout,
  Radio,
} from 'lucide-react';

export default function TechIcon({ name, size = 15, className = '' }) {
  const norm = (name || '').toLowerCase().trim();

  // 1. JAVA & CORE JAVA
  if (norm === 'java' || norm === 'core java') {
    return (
      <span className={`tech-icon-wrapper java-icon ${className}`} title={name}>
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="5" />
          <line x1="10" y1="1" x2="10" y2="5" />
          <line x1="14" y1="2" x2="14" y2="5" />
        </svg>
      </span>
    );
  }

  // 2. JAVASCRIPT
  if (norm === 'javascript' || norm === 'js') {
    return (
      <span className={`tech-icon-wrapper js-icon ${className}`} title={name}>
        <svg viewBox="0 0 24 24" width={size} height={size}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.2 18v-6.5h2.2v6.5c0 .9-.5 1.4-1.1 1.4s-1.1-.5-1.1-1.4zm6.6.3c-.9 0-1.6-.4-2-1.1l1.5-.9c.3.5.7.7 1.1.7.5 0 .8-.2.8-.5 0-.4-.4-.6-1.1-.8-.9-.4-1.7-.8-1.7-1.9 0-1.1.9-1.8 2.1-1.8.9 0 1.5.3 1.9.9l-1.4.9c-.2-.3-.5-.5-.9-.5-.4 0-.7.2-.7.5 0 .3.3.5 1 .7 1.1.4 1.9.9 1.9 1.9 0 1.2-1 1.9-2.5 1.9z"
            fill="#000000"
          />
        </svg>
      </span>
    );
  }

  // 3. SQL
  if (norm === 'sql') {
    return (
      <span className={`tech-icon-wrapper sql-icon ${className}`} title={name}>
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      </span>
    );
  }

  // 4. OBJECT-ORIENTED PROGRAMMING (OOP)
  if (norm.includes('object-oriented') || norm === 'oop') {
    return (
      <span className={`tech-icon-wrapper oop-icon ${className}`} title={name}>
        <Boxes size={size} />
      </span>
    );
  }

  // 5. COLLECTIONS
  if (norm.includes('collection')) {
    return (
      <span className={`tech-icon-wrapper collections-icon ${className}`} title={name}>
        <FolderTree size={size} />
      </span>
    );
  }

  // 6. EXCEPTION HANDLING
  if (norm.includes('exception')) {
    return (
      <span className={`tech-icon-wrapper exception-icon ${className}`} title={name}>
        <ShieldAlert size={size} />
      </span>
    );
  }

  // 7. JAVA 8 STREAMS AND LAMBDA
  if (norm.includes('stream') || norm.includes('lambda')) {
    return (
      <span className={`tech-icon-wrapper stream-icon ${className}`} title={name}>
        <Workflow size={size} />
      </span>
    );
  }

  // 8. SPRING BOOT
  if (norm.includes('spring boot')) {
    return (
      <span className={`tech-icon-wrapper spring-icon ${className}`} title={name}>
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M21.2 5.8C20.6 4.3 19.3 3.1 17.8 2.6c-4.2-1.5-8.8-.4-12 2.8C2.6 8.6 1.5 13.2 3 17.4c.5 1.5 1.7 2.7 3.2 3.2 1.7.6 3.5.7 5.2.3 4.2-1 7.6-4 9-8.1.6-2.3.9-4.7.8-7zm-4.7 9.4c-1.1 2.3-3.1 4.1-5.5 5-1.2.4-2.5.5-3.8.2-1-.3-1.9-1.1-2.2-2.1-1.2-3.2-.3-6.8 2.2-9.2 2.5-2.5 6.1-3.4 9.4-2.2 1 .3 1.9 1.1 2.2 2.1.8 2 .4 4.3-.8 6.2z" />
        </svg>
      </span>
    );
  }

  // 9. SPRING DATA JPA
  if (norm.includes('jpa') || norm.includes('spring data')) {
    return (
      <span className={`tech-icon-wrapper jpa-icon ${className}`} title={name}>
        <Layers size={size} />
      </span>
    );
  }

  // 10. HIBERNATE
  if (norm.includes('hibernate')) {
    return (
      <span className={`tech-icon-wrapper hibernate-icon ${className}`} title={name}>
        <Flame size={size} />
      </span>
    );
  }

  // 11. JDBC
  if (norm.includes('jdbc')) {
    return (
      <span className={`tech-icon-wrapper jdbc-icon ${className}`} title={name}>
        <Cable size={size} />
      </span>
    );
  }

  // 12. REST APIS
  if (norm.includes('rest') || norm.includes('api')) {
    return (
      <span className={`tech-icon-wrapper api-icon ${className}`} title={name}>
        <Globe size={size} />
      </span>
    );
  }

  // 13. MYSQL
  if (norm.includes('mysql')) {
    return (
      <span className={`tech-icon-wrapper mysql-icon ${className}`} title={name}>
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm-7 4.93C6.38 10.59 8.97 11 12 11s5.62-.41 7-1.07V12c0 .66-3.13 2-7 2s-7-1.34-7-2V9.93zm0 5C6.38 15.59 8.97 16 12 16s5.62-.41 7-1.07V17c0 .66-3.13 2-7 2s-7-1.34-7-2v-2.07z" />
        </svg>
      </span>
    );
  }

  // 14. POSTGRESQL
  if (norm.includes('postgres')) {
    return (
      <span className={`tech-icon-wrapper postgres-icon ${className}`} title={name}>
        <Database size={size} />
      </span>
    );
  }

  // 15. MONGODB
  if (norm.includes('mongo')) {
    return (
      <span className={`tech-icon-wrapper mongo-icon ${className}`} title={name}>
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M12 2C11.5 3.5 8 9.5 8 13.5c0 3.3 2 5.5 4 6.5 2-1 4-3.2 4-6.5C16 9.5 12.5 3.5 12 2zm0 18.5c-.3 0-.6.1-.9.2.3.9.7 1.8.9 2.3.2-.5.6-1.4.9-2.3-.3-.1-.6-.2-.9-.2z" />
        </svg>
      </span>
    );
  }

  // 16. HTML5
  if (norm.includes('html')) {
    return (
      <span className={`tech-icon-wrapper html-icon ${className}`} title={name}>
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm15.1 5.5h-9l.2 2h8.6l-.6 6.5-5.3 1.5-5.3-1.5-.3-3.5h2.1l.2 1.8 3.3.9 3.3-.9.3-3.8H6.5L5.7 5.5h12.6l-.2 2z" />
        </svg>
      </span>
    );
  }

  // 17. CSS3
  if (norm.includes('css')) {
    return (
      <span className={`tech-icon-wrapper css-icon ${className}`} title={name}>
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm14.8 6.5l-.2 2.2H8.3l.2 2.2h8.9l-.6 6.3-4.8 1.4-4.8-1.4-.3-3.6h2.2l.2 1.8 2.7.7 2.7-.7.3-3.1H5.9L5.3 4.2h12.7l-.2 2.3z" />
        </svg>
      </span>
    );
  }

  // 18. REACT.JS
  if (norm.includes('react')) {
    return (
      <span className={`tech-icon-wrapper react-icon ${className}`} title={name}>
        <svg viewBox="0 0 24 24" width={size} height={size}>
          <ellipse
            cx="12"
            cy="12"
            rx="4"
            ry="10"
            transform="rotate(30 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="4"
            ry="10"
            transform="rotate(90 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="4"
            ry="10"
            transform="rotate(150 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </span>
    );
  }

  // 19. GIT
  if (norm === 'git') {
    return (
      <span className={`tech-icon-wrapper git-icon ${className}`} title={name}>
        <GitBranch size={size} />
      </span>
    );
  }

  // 20. GITHUB
  if (norm.includes('github')) {
    return (
      <span className={`tech-icon-wrapper github-icon ${className}`} title={name}>
        <Github size={size} />
      </span>
    );
  }

  // 21. MAVEN
  if (norm.includes('maven')) {
    return (
      <span className={`tech-icon-wrapper maven-icon ${className}`} title={name}>
        <Package size={size} />
      </span>
    );
  }

  // 22. POSTMAN
  if (norm.includes('postman')) {
    return (
      <span className={`tech-icon-wrapper postman-icon ${className}`} title={name}>
        <Send size={size} />
      </span>
    );
  }

  // 23. SERVLETS / JSP
  if (norm.includes('servlet') || norm.includes('jsp')) {
    return (
      <span className={`tech-icon-wrapper servlet-icon ${className}`} title={name}>
        <Server size={size} />
      </span>
    );
  }

  // DEFAULT FALLBACK
  return (
    <span className={`tech-icon-wrapper default-tech-icon ${className}`} title={name}>
      <Code2 size={size} />
    </span>
  );
}
