import heroVisual from "../../assets/hero-visual.png";
import novaVisual from "../../assets/nova-visual.png";
import auraVisual from "../../assets/aura-visual.png";
import audioVisual from "../../assets/audio-insight-visual.png";


export default function ContactCenters() {
  const features = [
    "Sentiment Analysis",
    "Entity Detection",
    "Smart Transcripts",
    "Noise Reduction",
    "Topic Detection",
    "Tailored Models",
  ];

    const size = 360;
    const radius = size / 2 - 40;
    
  return (
    <>
        <section className="bg-white px-6 py-28">
            <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

                {/* LEFT CONTENT */}
                <div>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
                    Transforming Contact
                    <br />
                    Centers with Voice AI
                </h1>

                <p className="mt-6 max-w-xl text-lg text-slate-600">
                    From transcription to sentiment analysis to voice synthesis and AI
                    agents, RBG.AI helps CCaaS and contact center platform providers
                    streamline workflows, drive operational efficiency, and improve the
                    customer experience.
                </p>

                <button
                    className="
                    mt-8 inline-flex items-center gap-2
                    rounded-md bg-blue-600
                    px-6 py-3
                    text-white font-semibold
                    transition
                    hover:bg-blue-700
                    "
                >
                    Try It Free →
                </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                <img
                    src={heroVisual}
                    alt="Voice AI platform visualization"
                    className="w-[400px] max-w-full"
                />
                </div>

            </div>
            </section>


    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Superior performance, unmatched value
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Accurate transcription empowers organizations to derive
                profound insights, enhance agent performance, and offer
                unparalleled customer experiences.
              </p>

              <p>
                Nova-2, our next-generation speech-to-text model, outperforms
                all competitors in speed, accuracy, and cost with support for
                30+ languages, diverse dialects and accents, and a wide range
                of fine-tuned use case models.
              </p>

              <p>
                Nova-2 is specifically engineered to manage background noise,
                handle cross-talk during calls and meetings, and recognize
                alphanumerics and account IDs commonly used in call center
                interactions.
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex justify-center">
            <img
              src={novaVisual}
              alt="Nova model visualization"
              className="w-[420px] max-w-full"
            />
          </div>

        </div>
      </div>
    </section>
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left visual */}
          <div>
            <img
              src={auraVisual}
              alt="Aura text-to-speech model visualization"
              className="w-[420px] max-w-full"
            />
          </div>

          {/* Right content */}
          <div className="mr-10">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Let your AI agents do the talking
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Aura, our inaugural text-to-speech model, produces natural,
                human-like voices to support real-time conversational AI
                applications and AI agents.
              </p>

              <p>
                Lightning fast and cost efficient, Aura is optimized for
                high-throughput applications at enterprise scale.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              From audio to insight in seconds
            </h2>

            <ul className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span>
                  Audio intelligence models extract actionable insights using
                  real-time APIs powered by task-specific language models.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span>
                  Automatically extract topics and context, recognize speaker
                  intent, analyze caller sentiment, and precisely summarize
                  interactions to provide exceptional customer experiences.
                </span>
              </li>
            </ul>
          </div>

          {/* Right visual */}
          <div className="flex justify-center">
            <img
              src={audioVisual}
              alt="Audio intelligence visualization"
              className="w-[420px] max-w-full"
            />
          </div>

        </div>
      </div>
    </section>


    <div className="w-full bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Unlock customer insights at scale
              <br />
              <span className="text-blue-600">with RBG.AI Language Intelligence</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Poor transcription accuracy leads to weak analytics and missed insights.
              RBG.AI combines high-accuracy speech-to-text with powerful language
              intelligence models to help you understand every customer interaction
              and drive meaningful improvements across your business.
          </p>
          </div>

          {/* FEATURE GRID */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900">
              Call tracking & analytics
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Classify calls by sentiment, keywords, and phrases. Generate meaningful
              KPIs and understand what matters most to your customers.
              </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900">
              Quality assurance & compliance
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Ensure adherence to company policies, regulatory requirements, and
              standard operating procedures across every conversation.
              </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900">
              Agent assist
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Real-time transcription and insights help agents respond faster,
              improve outcomes, and reduce average handling time.
              </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900">
              Agent performance
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Deliver actionable coaching insights without manually reviewing every
              call. Identify key moments that impact agent effectiveness.
              </p>
          </div>

          {/* CARD 5 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900">
              Call driver monitoring
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Track customer intent and top call drivers to understand why customers
              reach out and proactively fix recurring issues.
              </p>
          </div>

          {/* CARD 6 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900">
              Sentiment analysis
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Analyze customer sentiment after every interaction to improve routing,
              reduce churn, and increase overall satisfaction.
              </p>
          </div>

          </div>
      </div>
  </div>

  <div className="w-full bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">

      {/* HEADER */}
      <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Resources for call analytics
          </h2>
          <div className="mt-4 h-px w-full bg-slate-200" />
      </div>

      {/* RESOURCE CARDS */}
      <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* CARD 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
              <div className="h-40 flex items-center justify-center bg-slate-50">
                  {/* Logo / Image placeholder */}
                  <span className="text-slate-400 text-lg font-semibold">
                  RBG Partner
                  </span>
              </div>

              <div className="p-6">
                  <p className="text-xs text-slate-500 mb-2">
                  Case Study · Jul 22, 2024 · AI Engineering
                  </p>
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  How RBG.AI elevates contact center customer experience
                  </h3>
              </div>
              </div>

              {/* CARD 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
              <div className="h-40 flex items-center justify-center bg-slate-50">
                  <span className="text-slate-400 text-lg font-semibold">
                  Analytics Platform
                  </span>
              </div>

              <div className="p-6">
                  <p className="text-xs text-slate-500 mb-2">
                  Case Study · Jan 28, 2025 · AI Research
                  </p>
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  Unlocking deeper call insights with RBG.AI speech analytics
                  </h3>
              </div>
              </div>

              {/* CARD 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
              <div className="h-40 flex items-center justify-center bg-slate-50">
                  <span className="text-slate-400 text-lg font-semibold">
                  Sales Intelligence
                  </span>
              </div>

              <div className="p-6">
                  <p className="text-xs text-slate-500 mb-2">
                  Case Study · Jun 24, 2025 · AI Engineering
                  </p>
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  Boosting sales performance with RBG.AI language intelligence
                  </h3>
              </div>
          </div>

      </div>

      {/* OPTIONAL NAV BUTTONS (UI only) */}
      <button className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100">
          ‹
      </button>

      <button className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100">
          ›
      </button>
      </div>

  </div>
</div>

<div className="w-full bg-gradient-to-b from-white via-slate-50 to-white px-6 py-28">
  <div className="mx-auto max-w-4xl text-center">

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
      <span className="text-slate-400">No Compromises.</span>{" "}
      <span className="text-slate-900">Only Opportunities.</span>
      </h2>

      <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
      What could you do with <span className="font-semibold text-slate-800">90%+</span>{" "}
      accuracy and real-time <span className="font-semibold text-slate-800">300-millisecond</span>{" "}
      transcription speed at a fraction of the cost of legacy ASR solutions?
      </p>

      <div className="mt-10">
      <button
      onClick={() => navigate("/signup")}
          className="
          inline-flex items-center justify-center
          rounded-md bg-blue-600
          px-8 py-3
          text-sm sm:text-base
          font-semibold text-white
          transition hover:bg-blue-700
          "
      >
          Let’s Find Out
      </button>
      </div>

  </div>
  </div>

</>
);
}
