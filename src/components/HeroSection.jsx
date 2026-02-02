export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div
        className="
          mx-auto max-w-7xl
          px-4 sm:px-6
          pt-20 pb-24
          sm:pt-24 sm:pb-32
          text-center
        "
      >
        {/* Announcement pill */}
        <div
          className="
            mx-auto mb-6 sm:mb-8
            inline-flex items-center gap-2
            rounded-full
            border border-slate-200
            bg-slate-50
            px-4 py-2
            text-xs sm:text-sm
            text-slate-600
            cursor-pointer

            transition-colors duration-200
            hover:border-blue-600
          "
        >
          <span className="font-medium">
            🚀 RBG.AI launches Voice Intelligence Platform
          </span>

          <span className="text-blue-600 font-semibold hover:underline">
            Learn more →
          </span>
        </div>



        {/* Headline */}
        <h1
          className="
            mx-auto max-w-4xl
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold tracking-tight
            text-slate-900
            leading-tight
          "
        >
          The Voice AI Economy
          <br />
          <span className="text-blue-600">
            Powered by RBG.AI
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="
            mx-auto mt-6 sm:mt-8
            max-w-xl sm:max-w-2xl
            text-base sm:text-lg
            leading-relaxed
            text-slate-600
          "
        >
          Build accurate, real-time, and scalable voice AI solutions using
          speech-to-text, text-to-speech, and intelligent voice agents —
          deployable in cloud or on-prem.
        </p>

        {/* CTA buttons */}
        <div
          className="
            mt-8 sm:mt-10
            flex flex-col
            gap-3
            sm:flex-row
            sm:justify-center
            sm:gap-4
          "
        >
          {/* Primary */}
          <button
            className="
              w-full sm:w-auto
              rounded-md
              bg-blue-600
              px-8 py-3
              text-base font-semibold
              text-white
              transition-all duration-200 ease-out
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            Sign Up Free
          </button>

          {/* Secondary */}
          <button
            className="
              w-full sm:w-auto
              rounded-md
              border border-slate-300
              px-8 py-3
              text-base font-semibold
              text-slate-700
              transition-all duration-200 ease-out
              hover:-translate-y-0.5
              hover:bg-slate-50
              hover:shadow-md
            "
          >
            Playground
          </button>
        </div>
      </div>
    </section>
  );
}
