import { useState } from "react";
import { Mic, Upload, ChevronDown } from "lucide-react";

const tabs = [
  "Speech to Text",
  "Text to Speech",
  "Voice Agent",
  "Audio Intelligence",
];

const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function MainContent() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-4 py-6">
      <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 p-5">

        {/* TOP TABS */}
        <div className="flex gap-3 flex-wrap">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`
                rounded-md px-4 py-2 text-sm font-medium
                border transition-all duration-200 ease-out
                ${
                  active === i
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-slate-200 text-slate-500 hover:border-blue-400 hover:bg-slate-50 hover:text-slate-900"
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {active === 0 && <SpeechToText />}
          {active === 1 && <TextToSpeech />}
          {active === 2 && <VoiceAgent />}
          {active === 3 && <AudioIntelligence />}
        </div>

      </div>
      <div className="w-full bg-white py-24 px-6">
  <div className="mx-auto max-w-4xl text-center">

    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
      A single, unified{" "}
      <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
        Voice Agent API
      </span>
    </h2>

    <p className="mt-6 text-lg leading-relaxed text-slate-600">
      Instead of stitching together separate components, RBG.AI unifies
      speech-to-text, text-to-speech, and LLM orchestration into a single API,
      reducing complexity, latency, and cost.
    </p>

  </div>
</div>

    </section>
  );
}

/* =====================================================
   SPEECH TO TEXT
===================================================== */

function SpeechToText() {
  const [mode, setMode] = useState("flux");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* LEFT PANEL */}
      <div
        className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}
        grid grid-rows-[auto_1fr]`}
      >
        {/* SUB TABS */}
        <div className="flex gap-8 border-b pb-3 text-sm">
          <button
            onClick={() => setMode("flux")}
            className={`pb-2 ${
              mode === "flux"
                ? "border-b-2 border-blue-600 font-semibold text-slate-900"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Flux: Voice Agents
          </button>

          <button
            onClick={() => setMode("nova")}
            className={`pb-2 ${
              mode === "nova"
                ? "border-b-2 border-blue-600 font-semibold text-slate-900"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Nova: Transcription
          </button>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="h-24 w-24 mt-2 rounded-full border-2 border-blue-600 flex flex-col items-center justify-center hover:bg-blue-50">
            <Mic className="h-5 w-5 text-blue-600" />
            <span className="mt-1 text-xs font-medium">Speak</span>
          </button>

          {mode === "nova" && (
            <>
              <div className="w-56 relative">
                <select className="w-full appearance-none rounded-md border px-4 py-2 pr-10">
                  <option>English</option>
                  <option>Tamil</option>
                  <option>Hindi</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              </div>

              <div className="text-xs text-slate-400">OR</div>

              <button className="flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-slate-50">
                <Upload className="h-4 w-4" />
                Use Your Own File
              </button>
            </>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={`relative rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <p className="text-sm text-slate-500">
          Your transcriptions will show here.
        </p>

        <div className="absolute bottom-4 right-4 flex gap-4 text-sm text-slate-500">
          <button className="hover:text-blue-600">Copy</button>
          <button className="hover:text-blue-600">Download</button>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   TEXT TO SPEECH
===================================================== */

function TextToSpeech() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <textarea
          className="h-full w-full resize-none rounded-md border p-4"
          placeholder="Type or paste text here..."
        />
        <p className="mt-2 text-xs text-slate-500">0 / 1000</p>
      </div>

      <div className={`rounded-xl border border-slate-200 p-4 space-y-4 ${PANEL_HEIGHT}`}>
        <div className="flex gap-3 flex-wrap">
          {["Healthcare", "Finance", "Support", "Sales"].map(t => (
            <button
              key={t}
              className="rounded-full border px-4 py-1 text-sm hover:bg-blue-50"
            >
              {t}
            </button>
          ))}
        </div>

        <select className="w-full rounded-md border px-3 py-2">
          <option>Thalia – Female (US)</option>
          <option>Odysseus – Male (US)</option>
          <option>Electra – Female (AU)</option>
        </select>

        <button className="mt-auto w-full rounded-md bg-blue-600 py-3 text-white font-medium hover:bg-blue-700">
          Generate
        </button>
      </div>
    </div>
  );
}

/* =====================================================
   VOICE AGENT
===================================================== */

function VoiceAgent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className={`flex flex-col items-center justify-center rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <div className="h-40 w-40 rounded-full border-2 border-blue-600 flex items-center justify-center text-center text-blue-600 font-medium">
          Click here<br />to talk to me
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Built with RBG APIs
        </p>
      </div>

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <p className="text-sm text-slate-600">
          Hey there! Ready to try the Voice Agent? Click the orb to begin.
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   AUDIO INTELLIGENCE
===================================================== */

function AudioIntelligence() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT} flex flex-col gap-3`}>
        {["Summarization", "Sentiment", "Intent", "Topics"].map(i => (
          <button
            key={i}
            className="w-full rounded-full border px-4 py-2 text-sm hover:bg-blue-50 hover:border-blue-500"
          >
            {i}
          </button>
        ))}
      </div>

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-blue-600">Summary:</span>{" "}
          The customer called support to update payment details.
        </p>
      </div>
    </div>
  );
}
