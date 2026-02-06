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
            <div className="mx-auto max-w-5xl grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

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


    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
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
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left visual */}
          <div className="flex justify-center">
            <img
              src={auraVisual}
              alt="Aura text-to-speech model visualization"
              className="w-[420px] max-w-full"
            />
          </div>

          {/* Right content */}
          <div>
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
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
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
    </>
  );
}
