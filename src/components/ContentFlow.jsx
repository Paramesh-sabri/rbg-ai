import { useState } from "react";
import "./content-flow.css";

const ITEMS = [
  { id: "user", label: "User" },
  { id: "audio", label: "Audio Input" },
  { id: "stt", label: "Speech to Text" },
  { id: "llm", label: "LLM Orchestration" },
  { id: "tts", label: "Text to Speech" },
  { id: "voice", label: "Voice Agent API" },
  { id: "biz", label: "Business Logic" },
  { id: "ext", label: "External Systems" }
];

const FLOW_CHAINS = {
  user: ["user", "audio", "stt", "llm", "tts", "voice"],
  audio: ["audio", "stt", "llm", "tts", "voice"],
  stt: ["stt", "llm", "tts", "voice"],
  llm: ["llm", "tts", "voice", "ext", "biz"],
  tts: ["tts", "voice"]
};

export default function ContentFlow() {
  const [active, setActive] = useState(null);

  return (
    <section className="content-flow">
      <div className="flow-container">

        {/* LEFT COLUMN */}
        <div className="flow-left">
          {ITEMS.map(item => (
            <div
              key={item.id}
              className={`flow-item ${active === item.id ? "active" : ""}`}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* RIGHT BOARD */}
        <div className={`flow-board ${active ? "has-active" : ""}`}>

          <FlowPaths active={active} />

          <Tile id="user"  active={active} x={80}  y={40}>User</Tile>
          <Tile id="audio" active={active} x={180} y={120}>Audio Input</Tile>
          <Tile id="stt" active={active} x={370} y={180} color="blue">STT API</Tile>
          <Tile id="tts" active={active} x={220} y={270} color="purple" deep>TTS API</Tile>
          <Tile id="llm"   active={active} x={360} y={300} color="yellow">LLM</Tile>
          <Tile id="voice" active={active} x={520} y={260}>Voice Agent</Tile>
          <Tile id="ext"   active={active} x={140} y={380}>External Systems</Tile>
          <Tile id="biz"   active={active} x={400} y={380}>Business Logic</Tile>

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
      {paths.map((p, i) => {
        const isActive =
          active &&
          FLOW_CHAINS[active]?.includes(p.from) &&
          FLOW_CHAINS[active]?.includes(p.to);

        return (
          <path
            key={i}
            d={curve(p.fromXY, p.toXY)}
            className={`flow-path ${isActive ? "active" : ""}`}
            style={{ animationDelay: `${i * 120}ms` }}
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
