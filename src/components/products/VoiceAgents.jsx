const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function VoiceAgent() {


  const testimonials = [
  {
    quote:
      "RBG.AI’s Voice Agent API stands out for its flexibility and performance. It’s been a game changer for our customer support workflows.",
    name: "Bill French",
    role: "Senior Solutions Engineer",
    company: "StreamIt",
  },
  {
    quote:
      "We love the ability to bring our own models and fine-tune behavior while keeping real-time orchestration fast and reliable.",
    name: "Harshal Jethwa",
    role: "Engineering Manager",
    company: "OpenPhone",
  },
  {
    quote:
      "The interruption handling and conversational flow feel incredibly human. Our users noticed the difference immediately.",
    name: "Scott Chancellor",
    role: "CEO",
    company: "Aircall",
  },
  {
    quote:
      "Integrating voice agents with RBG.AI will be one of the most impactful initiatives for our business operations.",
    name: "Doug Cook",
    role: "CTO",
    company: "Jack in the Box",
  },
];

  return (
    <div className="w-full">
      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            RBG.AI Voice Agent API
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
            A single, unified conversational AI API for building enterprise-ready,
            cost-effective voice AI agents. RBG.AI combines the simplicity developers
            love with the orchestration control enterprises need—no stitching together
            STT, TTS, and LLM workflows. No black-box limitations. Built for scale.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Try it Free
            </button>

            <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-700 font-semibold hover:bg-gray-100 transition">
              Start Building
            </button>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 mb-10">

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

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voice Agent API features
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Powered by RBG.AI’s high-performance speech recognition and voice synthesis
              models, our voice agent stack delivers enterprise-grade performance,
              reliability, and scale.
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Feature 1 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                🔗
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Unified Voice Agent API
              </h3>
              <p className="text-gray-600 leading-relaxed">
                One API that combines speech-to-text, LLM orchestration, and text-to-speech
                in real time. Simplifies development by eliminating the need to stitch
                together multiple services.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                💬
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Conversational control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in barge-in detection, turn-taking prediction, function calling,
                and mid-session control ensure smooth, natural conversations without
                awkward pauses or interruptions.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                🧠
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Full model ownership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                RBG.AI gives you control across STT, TTS, and runtime orchestration for
                optimized latency, fine-grained tuning, and tightly synchronized
                voice workflows.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                ☁️
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Deployment flexibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deploy fully managed, dedicated single-tenant, VPC, or self-hosted.
                Supports HIPAA, GDPR, regional data residency, and isolated runtimes
                for enterprise compliance.
              </p>
            </div>

            {/* Feature 5 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                🔌
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                BYO LLM & TTS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easily integrate your own LLM or TTS provider while retaining RBG.AI’s
                orchestration layer, streaming pipeline, and real-time responsiveness.
              </p>
            </div>

            {/* Feature 6 */}
            <div>
              <div className="mb-4 h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                📉
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Scalable cost optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Flat-rate pricing with built-in efficiency gains for large-scale
                deployments. Optimized compute utilization reduces total cost of
                ownership as usage grows.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Powering the future of real-time Voice AI Agents
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              Our Voice Agent API enables real-time conversational AI agents that
              seamlessly handle interruptions, take complex actions, and deliver
              natural, responsive customer interactions—without delays or rigid
              turn-taking.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Try it Free
              </button>

              <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-700 font-semibold hover:bg-gray-100 transition">
                Go to Demo
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO CARD */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-200 via-blue-200 to-emerald-200 blur-xl opacity-60" />

            <div className="relative rounded-3xl bg-white p-6 shadow-xl">
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-700 to-emerald-600 flex items-center justify-center overflow-hidden">

                {/* Decorative ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full border-4 border-white/30 animate-pulse" />
                </div>

                {/* Chat bubbles */}
                <div className="absolute top-6 left-6 rounded-xl bg-white/90 px-4 py-2 text-sm text-gray-800 shadow">
                  Hi there! How can I help you?
                </div>

                <div className="absolute bottom-6 right-6 rounded-xl bg-white/90 px-4 py-2 text-sm text-gray-800 shadow">
                  I need to schedule an appointment with Dr. Shapiro
                </div>

                {/* Play button */}
                <button className="relative z-10 h-16 w-16 rounded-full bg-black/80 text-white flex items-center justify-center text-xl hover:scale-105 transition">
                  ▶
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Trusted by teams building Voice AI
            </h2>
            <p className="text-gray-600">
              Real stories from companies using RBG.AI voice agents in production.
            </p>
          </div>

          {/* ANIMATION STYLES (LOCAL ONLY) */}
          <style>{`
            @keyframes scrollLTR {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          {/* SCROLLER */}
          <div className="relative">
            <div
              className="flex gap-6 w-max"
              style={{
                animation: "scrollLTR 40s linear infinite",
              }}
            >

              {[...testimonials, ...testimonials].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[340px] shrink-0 rounded-xl border bg-white p-6 shadow-sm"
                  style={{
                    borderImage:
                      "linear-gradient(135deg, #60a5fa, #34d399, #a78bfa) 1",
                    borderWidth: "1px",
                  }}
                >
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    “{item.quote}”
                  </p>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.role}
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-gray-400">
                      {item.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Build smarter Voice AI Agents.<br />
              Explore our resources.
            </h2>
            <div className="h-px w-full bg-gray-200 mt-8" />
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="h-44 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                <span className="text-sm text-gray-500">Report Cover</span>
              </div>

              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    BLOG
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    ANNOUNCEMENTS
                  </span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3">
                  Introducing “State of Voice AI 2025”: The Year of Human-like AI
                </h3>

                <div className="flex items-center gap-3 mt-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                  <div className="text-sm text-gray-600">
                    Jose Nicholas Francisco<br />
                    <span className="text-xs text-gray-400">March 26, 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="h-44 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <span className="text-sm text-gray-500">AI Agent Visual</span>
              </div>

              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    BLOG
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    AI AGENTS
                  </span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3">
                  What exactly is an AI Voice Agent? An in-depth guide
                </h3>

                <p className="text-sm text-gray-500">
                  Stephen Oladele<br />
                  <span className="text-xs">January 13, 2025</span>
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="h-44 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                <span className="text-sm text-gray-500">Microphone Visual</span>
              </div>

              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    BLOG
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    AI TRENDS & NEWS
                  </span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3">
                  Everything you need to know about Voice AI Agents
                </h3>

                <p className="text-sm text-gray-500">
                  Etemidore Youdiowei<br />
                  <span className="text-xs">April 01, 2024</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* RING VISUAL */}
          <div className="mb-10 flex justify-center">
            <div className="relative h-44 w-44 rounded-2xl border border-gray-200 bg-white shadow-md flex items-center justify-center">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-200 via-blue-200 to-emerald-200 blur-xl opacity-60" />

              {/* SVG RING */}
              <svg
                className="relative z-10 h-32 w-32"
                viewBox="0 0 200 200"
                fill="none"
              >
                <defs>
                  <linearGradient id="ringGradient" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>

                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  stroke="url(#ringGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="440"
                  strokeDashoffset="0"
                  fill="transparent"
                  className="animate-ring"
                />
              </svg>

              {/* INNER CUTOUT */}
              <div className="absolute h-20 w-20 rounded-full bg-white" />

              {/* LOCAL ANIMATION */}
              <style>{`
                @keyframes ringSpin {
                  0% {
                    stroke-dashoffset: 440;
                    transform: rotate(0deg);
                  }
                  100% {
                    stroke-dashoffset: 0;
                    transform: rotate(360deg);
                  }
                }
                .animate-ring {
                  animation: ringSpin 6s linear infinite;
                  transform-origin: 50% 50%;
                }
              `}</style>
            </div>
          </div>


          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start building real-time Voice AI Agents
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
            Deploy conversational AI agents with one unified Voice Agent API, delivering
            natural conversations, real-time responsiveness, and full control over
            deployment, orchestration, and performance.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Try it Free
            </button>

            <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-700 font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              View Pricing →
            </button>
          </div>

          {/* LOCAL ANIMATION */}
          <style>{`
            @keyframes spinSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spinSlow 8s linear infinite;
            }
          `}</style>

        </div>
      </div>

    </div>
  );
}
