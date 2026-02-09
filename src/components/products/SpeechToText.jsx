import { useState } from "react";
import { Mic, Upload, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function SpeechToText() {
  const [mode, setMode] = useState("flux");
  const navigate=useNavigate()
const languages = [
  { name: "Arabic", code: "sa" },
  { name: "Belarusian", code: "by" },
  { name: "Bengali", code: "bd" },
  { name: "Bosnian", code: "ba" },

  { name: "Bulgarian", code: "bg" },
  { name: "Cantonese", code: "hk" },
  { name: "Catalan", code: "es" },
  { name: "Croatian", code: "hr" },

  { name: "Czech", code: "cz" },
  { name: "Danish", code: "dk" },
  { name: "Dutch", code: "nl" },
  { name: "English", code: "us" },

  { name: "Estonian", code: "ee" },
  { name: "Finnish", code: "fi" },
  { name: "Flemish", code: "be" },
  { name: "French", code: "fr" },

  { name: "German", code: "de" },
  { name: "Greek", code: "gr" },
  { name: "Hindi", code: "in" },
  { name: "Hungarian", code: "hu" },

  { name: "Indonesian", code: "id" },
  { name: "Italian", code: "it" },
  { name: "Japanese", code: "jp" },
  { name: "Kannada", code: "in" },

  { name: "Korean", code: "kr" },
  { name: "Latvian", code: "lv" },
  { name: "Lithuanian", code: "lt" },
  { name: "Macedonian", code: "mk" },

  { name: "Malay", code: "my" },
  { name: "Mandarin", code: "cn" },
  { name: "Marathi", code: "in" },
  { name: "Norwegian", code: "no" },

  { name: "Polish", code: "pl" },
  { name: "Portuguese", code: "pt" },
  { name: "Romanian", code: "ro" },
  { name: "Russian", code: "ru" },

  { name: "Serbian", code: "rs" },
  { name: "Slovak", code: "sk" },
  { name: "Slovenian", code: "si" },
  { name: "Spanish", code: "es" },

  { name: "Swedish", code: "se" },
  { name: "Tagalog", code: "ph" },
  { name: "Tamil", code: "in" },
  { name: "Telugu", code: "in" },

  { name: "Thai", code: "th" },
  { name: "Turkish", code: "tr" },
  { name: "Ukrainian", code: "ua" },
  { name: "Vietnamese", code: "vn" },
];


  return (
    <div className="w-full">
      {/* HERO SECTION (FIRST) */}
      <div className="w-full bg-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Speech to Text API for next-level apps
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
          Convert speech to text with unmatched accuracy, ultra-low latency, and
          enterprise scalability. Power everything from transcription and
          analytics to real-time, human-like voice agents.
        </p>

        <div className="flex justify-center gap-4">
          
          <button 
          onClick={()=> navigate("/signup")}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Sign Up Free
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-100 transition">
            Playground
          </button>
        </div>
      </div>

      {/* TABLE / PLAYGROUND SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 mb-10 px-4">
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
      <div className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-slate-500 mb-10">
            Trusted by teams building voice-first experiences
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            <span className="text-slate-400 font-semibold text-lg">twilio</span>
            <span className="text-slate-400 font-semibold text-lg">cloudflare</span>
            <span className="text-slate-400 font-semibold text-lg">sierra</span>
            <span className="text-slate-400 font-semibold text-lg">daily</span>
            <span className="text-slate-400 font-semibold text-lg">cresta</span>
            <span className="text-slate-400 font-semibold text-lg">granola</span>

            <span className="text-slate-400 font-semibold text-lg">vapi</span>
            <span className="text-slate-400 font-semibold text-lg">decagon</span>
            <span className="text-slate-400 font-semibold text-lg">kore.ai</span>
            <span className="text-slate-400 font-semibold text-lg">nice cognigy</span>
            <span className="text-slate-400 font-semibold text-lg">coval</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The conversational Speech to Text model
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Flux is the first speech-to-text model designed for conversation, not just
              transcription. With built-in turn detection, ultra-low latency, and natural
              interruption handling, Flux enables real-time, human-like voice agents.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Integrated turn detection for natural flow
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Sub-300ms end-of-turn latency
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Conversational cues for agents to act on
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Nova-3 level transcription accuracy
              </li>
            </ul>

            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Learn More About Flux
            </button>
          </div>

          {/* RIGHT MEDIA CARD */}
          <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <button className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition">
                ▶
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500 text-right">
              Powered by RBG.AI
            </p>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Model Overview
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Deepgram models power everything from real-time conversations to
              domain-specific transcription, with options for speed, accuracy,
              and full customization.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Flux */}
            <div className="group rounded-xl border border-gray-200 p-6 bg-white transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
              <div className="h-10 w-10 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition group-hover:bg-blue-600 group-hover:text-white">
                🔊
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flux
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Conversational speech recognition for real-time voice agents with
                built-in turn detection, natural interruption handling, and
                ultra-low latency.
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Nova-3 (default highlighted but still hoverable) */}
            <div className="group rounded-xl border border-gray-200 p-6 bg-white transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
              <div className="h-10 w-10 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition group-hover:bg-blue-600 group-hover:text-white">
                📈
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nova-3
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                High-performance speech-to-text for production transcription with
                top accuracy, multilingual support, and noise robustness.
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Industry-tuned */}
            <div className="group rounded-xl border border-gray-200 p-6 bg-white transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
              <div className="h-10 w-10 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition group-hover:bg-blue-600 group-hover:text-white">
                🏭
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Industry-tuned
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Specialized speech-to-text models optimized for industry-specific
                vocabulary and structure in domains like healthcare, legal,
                and finance.
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Custom */}
            <div className="group rounded-xl border border-gray-200 p-6 bg-white transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
              <div className="h-10 w-10 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition group-hover:bg-blue-600 group-hover:text-white">
                ⚙️
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Custom
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Custom speech-to-text models trained on proprietary or novel
                datasets for maximum accuracy in edge-case scenarios.
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

          </div>
        </div>
      </div>


      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
        {/* SECTION 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for the real world
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Deepgram models maintain high transcription accuracy even in noisy,
              accented, or overlapping speech, making them ideal for real
              conversations.
            </p>

            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* VISUAL CARD */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 h-full w-full rounded-2xl bg-blue-100" />

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              {/* INNER CONVERSATION CARD */}
              <div className="relative max-w-md">
                <div className="mb-4 h-10 w-full rounded-lg bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200" />

                <div className="mb-4 rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700">
                  Hi. I need to ch… on my… prescrip… refill…
                </div>

                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Agent
                </div>

                <div className="mb-4 rounded-lg border border-blue-300 bg-blue-50 px-4 py-3 text-sm text-gray-800">
                  You’re calling to check on a prescription refill, correct?
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-60">
                    ✓
                  </span>
                  Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* VISUAL CARD */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-6 -left-6 h-full w-full rounded-2xl bg-blue-100" />

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              {/* INNER CONVERSATION CARD */}
              <div className="relative max-w-md">
                <div className="mb-4 h-10 w-full rounded-lg bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200" />

                <div className="mb-4 rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700">
                  Hi, I’d like to transfer from checking to savings…
                </div>

                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Agent
                </div>

                <div className="mb-4 rounded-lg border border-blue-300 bg-blue-50 px-4 py-3 text-sm text-gray-800">
                  Got it. Transferring from checking to savings. Correct?
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                    ⚡
                  </span>
                  Latency: 165ms
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ultra-low latency for real-time apps
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Deepgram delivers transcripts in under 300 milliseconds, enabling
              voice agents and conversational AI to respond instantly and naturally.
            </p>

            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
      </div>


     <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Go global with one Speech to Text API
            </h2>
            <p className="text-gray-600">
              Use a single speech-to-text API to support 45+ languages as your product
              scales worldwide.
            </p>
          </div>

          {/* LANGUAGES GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {languages.map(({ name, code }) => (
            <div
              key={name}
              className="group flex items-center justify-between rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition hover:border-blue-600 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://flagcdn.com/w20/${code}.png`}
                  alt={name}
                  className="h-4 w-6 rounded-sm"
                  loading="lazy"
                />
                <span className="font-medium text-gray-800">{name}</span>
              </div>
              <span className="text-gray-400 group-hover:text-blue-600">→</span>
            </div>
          ))}
        </div>

        </div>
      </div>


      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Speech to Text capabilities
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-6">
              Deepgram’s speech-to-text features give developers everything they need
              to produce accurate, readable, and secure transcripts out of the box.
            </p>
            <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
              View all features →
            </button>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                ✍️
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Keyterm prompting
              </h3>
              <p className="text-gray-600 mb-3">
                Improve recognition of critical words or phrases with up to 90%
                higher keyword recall rate (KRR).
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                💬
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Filler words
              </h3>
              <p className="text-gray-600 mb-3">
                Transcribe interruptions in speech such as “uh” and “um” to capture a
                more natural, human-like transcript.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                ✨
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Smart formatting
              </h3>
              <p className="text-gray-600 mb-3">
                Enhance readability with automatic punctuation, capitalization, and
                paragraphing.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                👥
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Diarization
              </h3>
              <p className="text-gray-600 mb-3">
                Detect speaker changes and label who said what in multi-speaker audio.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>

            {/* Feature 5 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                🔢
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Numerals
              </h3>
              <p className="text-gray-600 mb-3">
                Turn written numbers into digits (e.g., “one hundred” → “100”) for
                consistency.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>

            {/* Feature 6 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                🛡️
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Redaction
              </h3>
              <p className="text-gray-600 mb-3">
                Automatically remove sensitive or personal information from
                transcripts.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Power real-world solutions with Speech to Text
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Deepgram’s speech-to-text API enables accurate and scalable transcription
              across industries, including customer support, healthcare, media, and
              conversational AI.
            </p>
          </div>

          {/* TABS */}
          <div className="flex justify-center gap-8 border-b border-gray-200 mb-14 text-sm font-medium">
            <button className="pb-3 border-b-2 border-blue-600 text-blue-600">
              Contact Centers
            </button>
            <button className="pb-3 text-gray-500 hover:text-gray-800">
              Medical Transcription
            </button>
            <button className="pb-3 text-gray-500 hover:text-gray-800">
              Conversational AI
            </button>
            <button className="pb-3 text-gray-500 hover:text-gray-800">
              Speech Analytics
            </button>
            <button className="pb-3 text-gray-500 hover:text-gray-800">
              Media Transcription
            </button>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Accurate speech-to-text for call transcription, real-time analytics,
                and improved customer support. Flexible deployment and custom models
                scale across industries.
              </p>

              <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-700 mb-6">
                “As we’ve begun to roll out Deepgram to our customers, we’ve noticed
                the platform’s distinct ability to quickly and accurately transcribe
                product and company names.”
              </blockquote>

              <p className="text-sm font-medium text-gray-900">
                Adam Larsen
              </p>
              <p className="text-sm text-gray-500 mb-6">
                CTO, Creovai
              </p>

              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 h-full w-full rounded-2xl bg-blue-100" />

              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-600">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                    🎧
                  </span>
                  Phone Call — Customer Service
                </div>

                <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700 space-y-2">
                  <p>
                    <span className="font-semibold">Agent:</span> Thank you for calling
                    Horizon Bank. How can I help you today?
                  </p>
                  <p>
                    <span className="font-semibold">Customer:</span> Hi, I think there’s
                    an unauthorized charge on my credit card.
                  </p>
                  <p>
                    <span className="font-semibold">Agent:</span> I’m sorry to hear that.
                    Can you confirm the amount and date of the charge?
                  </p>
                  <p>
                    <span className="font-semibold">Customer:</span> Yes, it was $249
                    yesterday at a store I don’t recognize.
                  </p>
                  <p>
                    <span className="font-semibold">Agent:</span> Got it. I’ll flag this
                    transaction and freeze your card. You’ll receive a replacement
                    within 3–5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            FAQs
          </h2>

          {/* FAQ GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {[
                "What is speech to text and how does it work?",
                "What is a speech-to-text API?",
                "Does Deepgram support multichannel audio transcription?",
                "What features does Deepgram support for transcription outputs?",
                "What are the key differences between Nova-3 and Flux?",
                "How accurate are Deepgram’s speech-to-text models?",
              ].map((question) => (
                <div
                  key={question}
                  className="flex items-center justify-between border-b border-gray-200 pb-4"
                >
                  <p className="text-gray-800 font-medium">
                    Q: {question}
                  </p>
                  <span className="text-xl text-gray-400">+</span>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              {[
                "What models does Deepgram offer?",
                "How do I get started with Deepgram’s Speech-to-Text API?",
                "How much does Deepgram speech-to-text cost?",
                "Which model should I use for general transcription tasks?",
                "Which model is best for voice agents, chatbots, or contact centers?",
              ].map((question) => (
                <div
                  key={question}
                  className="flex items-center justify-between border-b border-gray-200 pb-4"
                >
                  <p className="text-gray-800 font-medium">
                    Q: {question}
                  </p>
                  <span className="text-xl text-gray-400">+</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>


        <div className="w-full bg-white py-24 px-6 overflow-hidden">
          {/* LOCAL STYLES (NO GLOBAL CSS REQUIRED) */}
          <style>{`
            @keyframes marqueeLTR {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee-ltr {
              animation: marqueeLTR 45s linear infinite;
            }

            .gradient-border {
              background: linear-gradient(
                120deg,
                #60a5fa,
                #34d399,
                #a78bfa,
                #60a5fa
              );
            }
          `}</style>

          <div className="max-w-6xl mx-auto mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by startups and enterprises
            </h2>
            <p className="text-gray-600">
              Discover the power of our product through real stories.
            </p>
          </div>

          {/* MARQUEE */}
          <div className="relative">
            <div className="flex gap-6 animate-marquee-ltr">
              {[
                {
                  quote:
                    "The launch of Flux is a perfect example of innovation coming to life. By embedding turn-taking recognition, Flux solves real conversational AI challenges.",
                  name: "Alex Dearsley",
                  title: "Founder, Vapi",
                },
                {
                  quote:
                    "Where speech recognition and turn detection happen in the same model solves challenges we’ve wrestled with for years.",
                  name: "Kwindla Hultman Kramer",
                  title: "CEO, Daily",
                },
                {
                  quote:
                    "We saw a massive jump in accuracy with Nova-3. With keyterm prompting, we’re seeing over a 6× improvement.",
                  name: "Brendan Chan",
                  title: "CTO, Talkatoo",
                },
                {
                  quote:
                    "Deepgram’s accuracy and latency unlocked real-time experiences we couldn’t build before.",
                  name: "Rohit Verma",
                  title: "Head of AI, Fintech",
                },
              ]
                // duplicate for infinite loop
                .concat([
                  {
                    quote:
                      "The launch of Flux is a perfect example of innovation coming to life. By embedding turn-taking recognition, Flux solves real conversational AI challenges.",
                    name: "Alex Dearsley",
                    title: "Founder, Vapi",
                  },
                  {
                    quote:
                      "Where speech recognition and turn detection happen in the same model solves challenges we’ve wrestled with for years.",
                    name: "Kwindla Hultman Kramer",
                    title: "CEO, Daily",
                  },
                  {
                    quote:
                      "We saw a massive jump in accuracy with Nova-3. With keyterm prompting, we’re seeing over a 6× improvement.",
                    name: "Brendan Chan",
                    title: "CTO, Talkatoo",
                  },
                  {
                    quote:
                      "Deepgram’s accuracy and latency unlocked real-time experiences we couldn’t build before.",
                    name: "Rohit Verma",
                    title: "Head of AI, Fintech",
                  },
                ])
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="gradient-border min-w-[320px] max-w-[320px] rounded-xl p-[1.5px]"
                  >
                    <div className="h-full rounded-xl bg-white p-6 shadow-sm">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        “{item.quote}”
                      </p>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-gray-500">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to get started?
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mb-10 leading-relaxed">
              Start building voice-first applications today with Deepgram’s
              speech-to-text API. It is fast, accurate, scalable, and easy to integrate.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Sign Up Free
              </button>

              <button className="px-6 py-3 rounded-lg border border-gray-300 text-blue-600 font-semibold hover:bg-gray-100 transition">
                Get A Demo
              </button>
            </div>
          </div>
        </div>


    </div>
  );
}
