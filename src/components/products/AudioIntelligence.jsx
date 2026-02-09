const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function AudioIntelligence() {
  return (
    <div className="width-full">

      <div className="w-full bg-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Audio Intelligence
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed mb-10">
            Powered by efficient task-specific language models. Extract vital
            insights from conversational audio at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <button className="rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition">
              Try it Free
            </button>

            <button className="rounded-md border border-blue-700 px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-emerald-50 transition">
              Start Assessment
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 mb-10">

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

      <div className="w-full bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] gap-16 items-center">

          {/* LEFT */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-500">
              📄 TRANSCRIPT
            </div>
            <p className="text-gray-800 mb-6">
              Phone Call: Customer service issue
            </p>
            <button className="rounded-md border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-emerald-50 transition">
              Run →
            </button>
          </div>

          {/* CENTER */}
          <div className="relative flex items-center justify-center h-64">

            {/* CONNECTING LINES */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 260"
              fill="none"
            >
              {/* Left → R */}
              <path
                d="M0 130 C60 130, 80 130, 100 130"
                stroke="oklch(48.8% 0.243 264.376)"
                strokeWidth="2"
              />

              {/* R → Right outputs */}
              <path d="M100 130 C140 80,170 60,200 50" stroke="oklch(48.8% 0.243 264.376)" strokeWidth="2" />
              <path d="M100 130 C140 110,170 110,200 110" stroke="oklch(48.8% 0.243 264.376)" strokeWidth="2" />
              <path d="M100 130 C140 150,170 160,200 170" stroke="oklch(48.8% 0.243 264.376)" strokeWidth="2" />
              <path d="M100 130 C140 190,170 210,200 230" stroke="oklch(48.8% 0.243 264.376)" strokeWidth="2" />
            </svg>

            {/* R NODE */}
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-blue-200 shadow-md">
              <span className="text-3xl font-bold text-gray-900">R</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {[
              ["🙂", "sentiment = true"],
              ["🎯", "intents = true"],
              ["📋", "topics = true"],
              ["📝", "summarize = v2"],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
              >
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-medium text-gray-800">{text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl text-center">

          {/* Heading */}
          <p className="mb-10 text-sm font-medium text-gray-500">
            Trusted by the world’s top Enterprises, Startups, and Researchers
          </p>

          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              "daisee",
              "Revenue",
              "creovai",
              "Khoros",
              "twilio",
              "granola",

            ].map((brand) => (
              <span
                key={brand}
                className="text-gray-400 text-lg font-semibold tracking-wide hover:text-gray-700 transition"
              >
                {brand}
              </span>
            ))}
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Unlock the power of speech analytics
            </p>

            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Extracting insights and <br className="hidden sm:block" />
              understanding from speech
            </h2>

            <p className="max-w-xl text-gray-600 leading-relaxed">
              In contrast to expensive and slow large language models, our Audio
              Intelligence models are lightweight, purpose-driven, and fine-tuned on
              domain and task-specific conversational data sets. The result? Superior
              accuracy on specialized topics, lightning-fast speed, and low inference
              costs that make high-throughput, low-latency applications viable.
            </p>
          </div>

          {/* RIGHT ANALYTICS CARD */}
          <div className="relative">
            {/* Accent frame */}
            <div className="absolute -top-6 -left-6 h-full w-full rounded-3xl bg-amber-200" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4">

                {/* Accuracy */}
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="mb-2 text-xs font-semibold text-gray-500">Accuracy</p>
                  <ul className="space-y-1 text-sm text-emerald-600 font-medium">
                    <li>summarize = true</li>
                    <li>sentiment = true</li>
                    <li>intents = true</li>
                    <li>topics = true</li>
                  </ul>
                </div>

                {/* Cost */}
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="mb-2 text-xs font-semibold text-gray-500">
                    Cost Overview
                  </p>
                  <div className="flex items-center justify-between rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                    <span>Low cost</span>
                    <span>$</span>
                  </div>

                  <div className="mt-3 h-16 w-full rounded-md bg-gradient-to-r from-emerald-200 to-emerald-400 opacity-70" />
                </div>

                {/* Latency */}
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="mb-2 text-xs font-semibold text-gray-500">
                    Latency
                  </p>
                  <p className="mb-3 text-sm font-medium text-gray-800">
                    Lightning fast
                  </p>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 70, 55, 90, 65].map((h, i) => (
                      <div
                        key={i}
                        className="w-2 rounded bg-emerald-400"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From transcription to understanding
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Extract more value from your voice data without hiring additional experts.
            </p>

            <div className="flex justify-center gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition">
                Try it Free
              </button>
              <button className="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-emerald-50 transition">
                ⚙️ Explore More Features
              </button>
            </div>
          </div>

          {/* MAIN CARD */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

            {/* LEFT: AUDIO + ACTIONS */}
            <div className="space-y-6">

              {/* Audio bar */}
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="mb-3 text-sm font-semibold text-blue-600">
                  Call Center: Customer Support
                </p>

                <div className="flex items-center gap-3">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                    ▶
                  </button>

                  <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-2/3 bg-blue-600" />
                  </div>

                  <span className="text-xs text-gray-500">01:44</span>
                </div>
              </div>

              {/* Feature buttons */}
              <div className="space-y-3">
                {[
                  "Summarization",
                  "Sentiment Analysis",
                  "Intent Detection",
                  "Topic Detection",
                ].map((label, i) => (
                  <button
                    key={i}
                    className={`w-full rounded-lg border px-4 py-3 text-sm font-medium transition ${
                      i === 0
                        ? "border-blue-600 bg-blue-60 text-blue-600"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: OUTPUT */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 overflow-hidden">

              <p className="mb-3 text-sm font-semibold text-gray-700">
                Summarization
              </p>

              <div className="mb-4 rounded-lg bg-white p-4 text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">Summary:</span>{" "}
                The customer calls Wham to change their payment and asks if they can
                do it on the phone since their subscription is about to renew. The
                agent takes down the customer’s information and updates their card
                details, including billing address and expiration date. The call ends
                with the agent thanking the customer.
              </div>

              <div className="text-sm text-gray-500 leading-relaxed max-h-32 overflow-y-auto">
                <span className="font-semibold text-gray-700">Transcript:</span>{" "}
                Hi. Thank you so much for calling Wham. My name is Ali. How can I help
                you today? Hey, I’m just trying to change the payment info on the
                website since my subscription is about to renew...
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold text-gray-900">
            Audio Intelligence features
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: "📄",
                title: "Summarization",
                desc: "Accurately capture the essence of conversations including relevant contextual information to streamline workflows, enhance communication, and boost efficiency.",
                link: "View Summarization →",
              },
              {
                icon: "🙂",
                title: "Sentiment analysis",
                desc: "Identify sentiment as positive, neutral, or negative at word, sentence, and transcript levels for trend analysis and real-time customer experience improvements.",
                link: "View Sentiment Analysis →",
              },
              {
                icon: "🎯",
                title: "Intent recognition",
                desc: "Recognize and track speaker intent through the entire conversation enabling agents to make intent-based decisions and take actions that improve customer satisfaction.",
                link: "View Intent Recognition →",
              },
              {
                icon: "📋",
                title: "Topic detection",
                desc: "Identify key topics in your audio to improve omnichannel handoffs, streamline workflows, and categorize, search, and conduct post-call trend analysis.",
                link: "View Topic Detection →",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-emerald-400 hover:shadow-md"
              >
                {/* ICON */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-60 text-2xl text-blue-600">
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mb-8 text-sm leading-relaxed text-gray-600">
                  {card.desc}
                </p>

                {/* LINK */}
                <span className="text-sm font-medium text-blue-600 transition group-hover:text-blue-700">
                  {card.link}
                </span>
              </div>
            ))}
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

            <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-100 transition">
              Get A Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
