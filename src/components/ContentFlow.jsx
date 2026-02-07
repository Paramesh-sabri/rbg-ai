import { useState } from "react";
import "./content-flow.css";

const ITEMS = [
  {
    id: "user",
    label: "User",
    description: "Your customer or end user speaking naturally."
  },
  {
    id: "audio",
    label: "Audio Input",
    description:
      "Partner-provided transport layer that bridges stream audio into Deepgram's APIs and plays back TTS audio to the end user, including Telephony partners (via PSTN/SIP)."
  },
  {
    id: "stt",
    label: "Speech to Text (STT)",
    description:
      "Conversational speech recognition that detects end-of-turn and interruptions, and streams transcripts in real-time."
  },
  {
    id: "llm",
    label: "LLM orchestration",
    description: (
      <>
        <ul>
          <li><strong>Context:</strong> Maintains conversation history and system settings.</li>
          <li><strong>System Updates:</strong> Adjusts role or behavior.</li>
          <li><strong>Prompt Updates:</strong> Refines instructions in real time.</li>
          <li><strong>Response Injections:</strong> Adds guidance or context.</li>
          <li><strong>Function Calling:</strong> Executes actions or fetches data.</li>
          <li><strong>LLM (via API):</strong> Connects to language models.</li>
        </ul>
      </>
    )
  },
  {
    id: "tts",
    label: "Text to Speech (TTS)",
    description: "Converts AI responses into natural-sounding speech."
  },
  {
    id: "biz",
    label: "Business logic",
    description:
      "Your custom application logic. Executes domain-specific actions, integrates external APIs, or adds validation."
  },
  {
    id: "ext",
    label: "External systems",
    description:
      "Databases, APIs, and back-office systems that the agent interacts with. Results are fed back into the conversation context."
  }
];

const FLOW_CHAINS = {
  user: ["user", "audio", "stt", "llm", "tts", "voice"],
  audio: ["audio", "stt", "llm", "tts", "voice"],
  stt: ["stt", "llm", "tts", "voice"],
  llm: ["llm", "tts", "voice", "ext", "biz"],
  tts: ["tts", "voice"]
};

export default function ContentFlow() {
  const [active, setActive] = useState(null);   // click
  const [hovered, setHovered] = useState(null); // hover

  const focus = hovered || active;

  return (
    <section className="content-flow">
      <div className="flow-container">

        {/* LEFT COLUMN */}
        <div className="flow-left">
          {ITEMS.map(item => {
            const isOpen = active === item.id;

            return (
              <div key={item.id} className={`flow-accordion ${isOpen ? "open" : ""}`}>
                <button
                  className="flow-header"
                  onClick={() => setActive(isOpen ? null : item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="dot" />
                  <span className="label">{item.label}</span>
                  <span className="arrow" />
                </button>

                <div className="flow-content">
                  {item.description}
                </div>
              </div>
            );
          })}
           <button className="try-button">
             Try it now
            </button>
        </div>

        {/* RIGHT BOARD */}
        <div className={`flow-board ${focus ? "has-active" : ""}`}>

          <FlowPaths active={focus} />

          <Tile id="user"  active={focus} x={80}  y={40}>User</Tile>
          <Tile id="audio" active={focus} x={180} y={120}>Audio Input</Tile>
          <Tile id="stt"   active={focus} x={370} y={180} color="blue">STT API</Tile>
          <Tile id="tts"   active={focus} x={220} y={270} color="purple" deep>TTS API</Tile>
          <Tile id="llm"   active={focus} x={360} y={300} color="yellow">LLM</Tile>
          <Tile id="voice" active={focus} x={520} y={260}>Voice Agent</Tile>
          <Tile id="ext"   active={focus} x={140} y={380}>External Systems</Tile>
          <Tile id="biz"   active={focus} x={400} y={380}>Business Logic</Tile>

        </div>
      </div>
    </section>
  );
}

function Tile({ id, active, x, y, color = "gray", deep = false, children }) {
  return (
    <div
      className={`tile-wrapper ${active === id ? "is-active" : ""} ${deep ? "is-deep" : ""}`}
      style={{ left: x, top: y }}
    >
      <div className="tile-shadow" />
      <div className={`tile tile-${color}`}>
        {children}
      </div>
    </div>
  );
}

function FlowPaths({ active }) {
  const paths = [
    { from: "user",  to: "audio", fromXY: [130, 80],  toXY: [230, 150] },
    { from: "audio", to: "stt",   fromXY: [230, 150], toXY: [390, 210] },
    { from: "stt",   to: "llm",   fromXY: [390, 210], toXY: [420, 330] },
    { from: "llm",   to: "tts",   fromXY: [420, 330], toXY: [280, 270] },
    { from: "tts",   to: "voice", fromXY: [280, 270], toXY: [580, 290] },
    { from: "llm",   to: "ext",   fromXY: [420, 330], toXY: [180, 410] },
    { from: "llm",   to: "biz",   fromXY: [420, 330], toXY: [420, 410] }
  ];

  return (
    <svg className="flow-paths" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>

      {paths.map((p, i) => {
        const isActive =
          active &&
          FLOW_CHAINS[active]?.includes(p.from) &&
          FLOW_CHAINS[active]?.includes(p.to);

        return (
          <path
            key={i}
            d={curve(p.fromXY, p.toXY)}
            className={`flow-path ${isActive ? "active" : "idle"}`}
            style={{ stroke: "url(#flowGradient)" }}
          />
        );
      })}
    </svg>
  );
}

function curve([x1, y1], [x2, y2]) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} Q ${mx} ${y1} ${x2} ${y2}`;
}