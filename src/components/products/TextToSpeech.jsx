const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function TextToSpeech() {

  const voices = [
  { name: "Electra", meta: "Feminine, English (US)" },
  { name: "Andromeda", meta: "Feminine, English (US)" },
  { name: "Pandora", meta: "Feminine, English (US)" },
  { name: "Atlas", meta: "Masculine, English (US)" },
  { name: "Helena", meta: "Feminine, English (US)" },
  { name: "Apollo", meta: "Masculine, English (US)" },
  { name: "Cressida", meta: "Feminine, English (US)" },
  { name: "Arcas", meta: "Masculine, English (US)" },
];

  return (
  <div className="w-full">
    <div className="w-full bg-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Enterprise-grade Text to Speech API
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
          Aura-2 is RBG.AI’s next-gen text-to-speech API—designed to deliver
          natural, professional speech with real-time performance, domain-specific
          accuracy, and secure, scalable deployment across cloud and on-prem
          environments.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Try it Now
          </button>

          <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:blue-60 transition">
            Sign Up Free
          </button>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 mb-10">

      
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

    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aura-2 Text to Speech features
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Unlike entertainment-focused TTS models, Aura-2 offers text-to-speech
            engineered to meet the rigorous, real-time, and scalable demands of
            enterprise environments.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {/* Feature 1 */}
          <div>
            <div className="mb-4 h-9 w-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              Aᴮ
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Domain-tuned pronunciation
            </h3>
            <p className="text-gray-600 mb-3">
              Ensures accurate pronunciation for industry-specific terminology in
              healthcare, finance, legal, and beyond.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="mb-4 h-9 w-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              ★
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Authentic, Natural Voices
            </h3>
            <p className="text-gray-600 mb-3">
              Features 40+ English voices with localized accents, delivering natural,
              business-appropriate speech for professional settings.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="mb-4 h-9 w-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              ✔
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Context-aware delivery
            </h3>
            <p className="text-gray-600 mb-3">
              Adjusts pacing, tone, and expression to ensure smooth, coherent
              communication in any context.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="mb-4 h-9 w-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-time performance
            </h3>
            <p className="text-gray-600 mb-3">
              Delivers sub-200ms latency for ultra-responsive interactions, while
              efficiently handling thousands of concurrent requests.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>

          {/* Feature 5 */}
          <div>
            <div className="mb-4 h-9 w-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              $
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cost-effectiveness at scale
            </h3>
            <p className="text-gray-600 mb-3">
              Achieves enterprise-grade speech at $0.030 per 1,000 characters—no
              hidden fees, with volume discounts for large deployments.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>

          {/* Feature 6 */}
          <div>
            <div className="mb-4 h-9 w-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              ☁
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Flexible deployment options
            </h3>
            <p className="text-gray-600 mb-3">
              Supports public, private cloud, and on-premises deployments, ensuring
              compliance and security.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise-ready AI voices
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
              You need more than voices that sound good—you need voices that communicate
              precisely and reliably in professional contexts. With a diverse catalog
              of 40+ AI voices and distinct persona profiles, Aura-2 balances realism
              with clarity, pacing, and consistency to deliver enterprise-optimized
              voice experiences.
            </p>

            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Explore Aura-2 Voices
            </button>
          </div>

          {/* RIGHT VOICE GRID */}
          <div className="rounded-2xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
            <div className="rounded-xl bg-white px-6 py-5">
              <p className="text-right text-xs text-gray-500 mb-3">
                Click an avatar to interact
              </p>  

              <div className="grid grid-cols-4 gap-x-5 gap-y-6">
                {voices.map((voice) => (
                  <div
                    key={voice.name}
                    className="group text-center cursor-pointer"
                  >
                    {/* AVATAR (slightly smaller) */}
                    <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-[2px] transition group-hover:scale-105">
                      <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-sm font-semibold text-gray-700">
                        {voice.name.charAt(0)}
                      </div>
                    </div>

                    <p className="text-sm font-medium text-gray-900 leading-tight">
                      {voice.name}
                    </p>
                    <p className="text-xs text-gray-500 leading-tight">
                      {voice.meta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* LEFT VISUAL */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 shadow-lg">
              <div className="relative flex items-center justify-center h-64 rounded-2xl bg-white shadow-inner">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-xl bg-black text-white flex items-center justify-center text-2xl font-bold">
                    R
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    RBG.AI Enterprise Runtime
                  </p>
                </div>

                {/* Floating capability badges */}
                <span className="absolute top-6 left-6 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  STT
                </span>
                <span className="absolute top-6 right-6 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  TTS
                </span>
                <span className="absolute bottom-6 left-6 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                  AI
                </span>
                <span className="absolute bottom-6 right-6 rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">
                  Realtime
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Scalable infrastructure for Text to Speech
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Powered by the <span className="font-medium text-gray-900">RBG.AI Enterprise Runtime</span>,
              Aura-2 delivers real-time text-to-speech using the same infrastructure that
              powers our trusted speech-to-text and AI voice capabilities. This provides
              enterprises with the control, adaptability, and performance needed to deploy
              and scale production-grade voice AI.
            </p>

            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Speech to Text leadership enhances Text to Speech
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
              With <span className="font-medium text-gray-900">RBG.AI’s unified architecture</span>,
              improvements in speech recognition automatically enhance Aura-2’s
              text-to-speech capabilities through a shared runtime. This cross-model
              learning allows the platform to adapt to industry terminology and user
              interactions—ensuring consistent pronunciation, reduced latency, and
              real-time model customization.
            </p>

            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Test Speech to Text Now
            </button>
          </div>

          {/* RIGHT VIDEO CARD */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 blur-xl opacity-60" />

            {/* Video Card */}
            <div className="relative rounded-3xl bg-white p-6 shadow-xl">
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center overflow-hidden">
                
                {/* Decorative bars */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-24 rounded-full bg-white"
                      style={{ opacity: 0.2 + i * 0.05 }}
                    />
                  ))}
                </div>

                {/* Text */}
                <div className="absolute top-4 right-6 text-sm text-white/70">
                  Introducing
                </div>

                <div className="text-3xl font-bold text-pink-400">
                  Aura-2
                </div>

                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="h-16 w-16 rounded-full bg-black/80 text-white flex items-center justify-center text-xl hover:scale-105 transition">
                    ▶
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            RBG.AI Text to Speech resources
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore real-world applications, insights, and industry trends to see how
            Aura-2 speech synthesis is driving innovation across enterprises and products.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-400">Image Placeholder</span>
            </div>

            <div className="p-5">
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  NEWS
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  PRODUCT
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
                RBG.AI’s Aura-2 sets a new standard for enterprise TTS
              </h3>

              <p className="text-sm text-gray-500">
                April 15, 2025
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
              <span className="text-sm text-gray-500">AI Visual</span>
            </div>

            <div className="p-5">
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  NEWS
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
                AIM: RBG.AI’s new text-to-speech model outperforms expectations
              </h3>

              <p className="text-sm text-gray-500">
                February 12, 2024
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
            <div className="h-48 bg-gray-900 flex items-center justify-center">
              <span className="text-pink-400 font-semibold text-lg">
                Introducing Aura-2
              </span>
            </div>

            <div className="p-5">
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  BLOG
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  ANNOUNCEMENT
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
                Introducing Aura-2: Professional, cost-efficient text to speech
              </h3>

              <div className="flex items-center gap-3 mt-4">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <div className="text-sm text-gray-600">
                  Jose Nicholas Francisco<br />
                  <span className="text-xs text-gray-400">April 15, 2025</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
  );
}
