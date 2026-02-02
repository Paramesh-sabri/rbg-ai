import { useState } from "react";
import "./content-flow.css";

export default function ContentFlow() {
  const [active, setActive] = useState(null);

  const items = [
    { id: "user", label: "User" },
    { id: "audio", label: "Audio Input" },
    { id: "stt", label: "STT API" },
    { id: "tts", label: "TTS API" },
    { id: "llm", label: "LLM" },
    { id: "voice", label: "Voice Agent API" },
  ];

  return (
    <section className="content-flow">
      <div className="flow-container">

        {/* LEFT COLUMN */}
        <div className="flow-left">
          {items.map((i) => (
            <div
              key={i.id}
              className={`flow-item ${active === i.id ? "active" : ""}`}
              onMouseEnter={() => setActive(i.id)}
              onMouseLeave={() => setActive(null)}
            >
              {i.label}
            </div>
          ))}
        </div>

        {/* RIGHT BOARD */}
        <div className="flow-board">  
          <div className="flow-grid" />
            {/* FLOW CARDS */}
            <Tile id="user" x={120} y={40} active={active}>
              User
            </Tile>

            <Tile id="audio" x={220} y={110} active={active}>
              Audio Input
            </Tile>

            <Tile id="stt" x={360} y={170} active={active} color="blue">
              STT API
            </Tile>

            <Tile id="tts" x={260} y={220} active={active} color="purple">
              TTS API
            </Tile>

            <Tile id="llm" x={340} y={290} active={active} color="yellow">
              LLM
            </Tile>

            <Tile id="voice" x={500} y={260} active={active}>
              Voice Agent API
            </Tile>

        </div>
      </div>
    </section>
  );
}

function Tile({ id, x, y, active, color = "gray", children }) {
  return (
    <div
      className={`tile-wrapper ${active === id ? "is-active" : ""}`}
      style={{ left: x, top: y }}
    >
      <div className="tile-base" />
      <div className={`tile tile-${color}`}>
        {children}
      </div>
    </div>
  );
}

function Connector({ x, y, w, h }) {
  return (
    <div
      className="connector"
      style={{ left: x, top: y, width: w, height: h }}
    />
  );
}
