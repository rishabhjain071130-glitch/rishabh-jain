"use client";

import * as React from "react";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface HistoryItem {
  type: "input" | "output";
  text: string | React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = React.useState("");
  const [history, setHistory] = React.useState<HistoryItem[]>([
    { type: "output", text: "Rishabh Portfolio OS [Version 1.0.0]" },
    { type: "output", text: "Type 'help' to view a list of available system commands." },
    { type: "output", text: "" },
  ]);

  const [cmdHistory, setCmdHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);

  const terminalEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  React.useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus terminal input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "input" as const, text: `rishabh@portfolio:~$ ${cmd}` }];

    if (trimmed) {
      setCmdHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
    }

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 font-mono text-xs">
              <p className="text-white font-semibold">Available Commands:</p>
              <p>  <span className="text-brand-cyan">about</span>       - Brief background biography summary</p>
              <p>  <span className="text-brand-cyan">skills</span>      - List of professional technical expertise</p>
              <p>  <span className="text-brand-cyan">projects</span>    - Showcase of featured computer science projects</p>
              <p>  <span className="text-brand-cyan">security</span>    - Print active HTTP security configurations</p>
              <p>  <span className="text-brand-cyan">cheatsheet</span>  - Keyboard shortcuts & navigation cheatsheet</p>
              <p>  <span className="text-brand-cyan">clear</span>       - Clear terminal output console</p>
              <p>  <span className="text-brand-cyan">help</span>        - Display this options menu</p>
            </div>
          ),
        });
        break;

      case "cheatsheet":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 font-mono text-xs">
              <p className="text-white font-semibold">Keyboard Navigation Shortcuts (Ctrl+K or Cmd+K):</p>
              <p>  <span className="text-brand-cyan">Ctrl+K</span>      - Open Global Command Palette modal</p>
              <p>  <span className="text-brand-cyan">G A</span>         - Scroll to About (Philosophy & Values)</p>
              <p>  <span className="text-brand-cyan">G J</span>         - Scroll to Journey (Chronology)</p>
              <p>  <span className="text-brand-cyan">G P</span>         - Scroll to Projects (Case Studies)</p>
              <p>  <span className="text-brand-cyan">G S</span>         - Scroll to Skills (Matrix)</p>
              <p>  <span className="text-brand-cyan">G E</span>         - Scroll to Certificates (Credentials)</p>
              <p>  <span className="text-brand-cyan">G C</span>         - Scroll to Contact Form</p>
              <p>  <span className="text-brand-cyan">F T</span>         - Focus Terminal Command CLI</p>
              <p>  <span className="text-brand-cyan">A S</span>         - Run Security Audit command</p>
            </div>
          ),
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: "Rishabh Jain is a Computer Science student building secure, intelligent, and scalable software through practical engineering projects. His core specializations cover Cyber Security, Artificial Intelligence, and Full Stack Development.",
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 font-mono text-xs text-text-secondary">
              <p><span className="text-white font-bold">Programming:</span> TypeScript, JavaScript, Python, C</p>
              <p><span className="text-white font-bold">Frontend:</span> React, Next.js, Tailwind CSS</p>
              <p><span className="text-white font-bold">Backend:</span> Node.js, Express, REST API, MongoDB</p>
              <p><span className="text-white font-bold">Security:</span> Network Defense, OWASP basics, Secure Auth</p>
              <p><span className="text-white font-bold">AI Focus:</span> Prompt Chaining, AI Agent Mentors</p>
            </div>
          ),
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 font-mono text-xs">
              <p className="text-white font-bold">EduPilot AI (AI Mentor):</p>
              <p className="text-text-secondary pl-4">A multi-agent AI mentoring framework generating personalized career paths and learning roadmaps.</p>
              <p className="text-text-muted pl-4">Tech: Next.js, React, Node.js, LLM Generative APIs</p>
            </div>
          ),
        });
        break;

      case "security":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 font-mono text-xs text-success">
              <p>✓ HTTP Strict-Transport-Security: Enabled (63072000s)</p>
              <p>✓ X-Frame-Options: SAMEORIGIN (Clickjack Guarded)</p>
              <p>✓ X-Content-Type-Options: nosniff (MIME Sniff Guarded)</p>
              <p>✓ Referrer-Policy: strict-origin-when-cross-origin</p>
              <p>✓ Permissions-Policy: camera=(), microphone=() (Zero hardware leaks)</p>
              <p>✓ Anti-Spam Honey-Pot Guard: Online</p>
            </div>
          ),
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "":
        break;

      default:
        newHistory.push({
          type: "output",
          text: `Command not found: '${cmd}'. Type 'help' to review valid commands.`,
        });
    }

    newHistory.push({ type: "output", text: "" });
    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInput(cmdHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length === 0 || historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    }
  };

  return (
    <div
      onClick={focusInput}
      className="w-full bg-[#05070a] border border-border-subtle rounded-md shadow-2xl overflow-hidden font-mono text-xs text-text-secondary h-80 flex flex-col cursor-text select-none text-left"
    >
      {/* Terminal Title Bar */}
      <div className="bg-card border-b border-border-subtle px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-1.5 text-text-muted text-[10px]">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>ssh - rishabh@portfolio-os</span>
        </div>
        <div className="w-12" /> {/* Balancing spacing */}
      </div>

      {/* Terminal Console History */}
      <div className="p-4 flex-1 overflow-y-auto space-y-2 scrollbar-thin">
        {history.map((item, index) => (
          <div
            key={index}
            className={item.type === "input" ? "text-white font-semibold" : "text-text-secondary"}
          >
            {item.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      <div className="p-4 border-t border-border-subtle bg-bg-primary/20 flex items-center gap-1.5 shrink-0">
        <span className="text-brand-cyan font-bold select-none">rishabh@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white outline-none border-none caret-brand-blue"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-label="Terminal command prompt"
        />
        <div className="text-text-muted flex items-center gap-1 select-none text-[10px]">
          <CornerDownLeft className="w-3 h-3" />
          <span>Enter</span>
        </div>
      </div>
    </div>
  );
};
