import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Check, Sparkles } from 'lucide-react';

const TERMINAL_LINES = [
  { type: 'command', text: '$ java --version', delay: 400 },
  { type: 'output', text: 'openjdk 21.0.2 2024-01-16 LTS (OpenJDK 64-Bit Server VM)', delay: 500 },
  { type: 'command', text: '$ mvn spring-boot:run', delay: 700 },
  { type: 'info', text: '[INFO] Initializing Spring Boot backend services...', delay: 600 },
  { type: 'info', text: '[INFO] Starting Spring Boot application...', delay: 600 },
  { type: 'info', text: '[INFO] Connecting to MySQL database persistence layer...', delay: 500 },
  { type: 'info', text: '[INFO] Mapping REST API endpoints: /api/v1/employees, /api/v1/batches', delay: 500 },
  { type: 'success', text: 'Application started successfully. Ready on port 8080.', delay: 700 },
];

export default function DeveloperTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const terminalRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setVisibleCount(TERMINAL_LINES.length);
      setIsCompleted(true);
      setIsRunning(false);
      return;
    }

    let timeoutId;
    if (isRunning && visibleCount < TERMINAL_LINES.length) {
      const nextLine = TERMINAL_LINES[visibleCount];
      timeoutId = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
        if (visibleCount + 1 === TERMINAL_LINES.length) {
          setIsCompleted(true);
          setIsRunning(false);
        }
      }, nextLine?.delay || 500);
    }

    return () => clearTimeout(timeoutId);
  }, [visibleCount, isRunning]);

  const handleRestart = () => {
    setVisibleCount(0);
    setIsCompleted(false);
    setIsRunning(true);
  };

  return (
    <div className="terminal-card-shell" ref={terminalRef}>
      <div className="terminal-top-bar">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot dot-close" />
          <span className="dot dot-min" />
          <span className="dot dot-max" />
        </div>
        <div className="terminal-title">
          <TerminalIcon size={13} className="terminal-title-icon" />
          <span>sahil-workspace — spring-boot-run</span>
          <span className="terminal-sim-badge">Visual Simulation</span>
        </div>
        <button
          onClick={handleRestart}
          className="terminal-action-btn"
          aria-label="Replay terminal simulation"
          title="Replay sequence"
        >
          <RotateCcw size={12} />
          <span>{isCompleted ? 'Replay' : 'Reset'}</span>
        </button>
      </div>

      <div className="terminal-body" role="region" aria-label="Simulated developer terminal output">
        {TERMINAL_LINES.slice(0, visibleCount).map((line, idx) => (
          <div key={idx} className={`terminal-line line-${line.type}`}>
            {line.type === 'command' && <span className="term-prompt">&gt;</span>}
            <span className="term-text">{line.text}</span>
          </div>
        ))}

        {!isCompleted && isRunning && (
          <div className="terminal-line line-typing" aria-hidden="true">
            <span className="term-prompt">&gt;</span>
            <span className="terminal-cursor" />
          </div>
        )}

        {isCompleted && (
          <div className="terminal-status-footer">
            <span className="pulse-indicator-emerald" />
            <span>Service live &bull; Spring Boot 3.x &bull; Java 21</span>
          </div>
        )}
      </div>
    </div>
  );
}
