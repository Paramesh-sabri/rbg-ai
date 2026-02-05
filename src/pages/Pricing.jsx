import { Check, Calculator } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Straightforward pricing that rewards
            <br />
            you as you grow
          </h1>

          <p className="mt-6 text-slate-600 text-lg">
            Whether you're just exploring or ready for commitment, our pricing
            plans make it easy to get started. All plans give you access to
            speech-to-text, audio intelligence, and text-to-speech.
          </p>
        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">

          <PlanCard
            title="Free"
            price="$0"
            desc="Best for testing and experimentation."
            features={[
              "Limited monthly usage",
              "Speech-to-Text API",
              "Text-to-Speech",
              "Community support",
            ]}
            cta="Get Started"
          />

          <PlanCard
            title="Pro"
            price="$49 / month"
            desc="For startups and growing teams."
            features={[
              "Higher usage limits",
              "Low-latency APIs",
              "Audio Intelligence",
              "Email support",
            ]}
            cta="Start Free Trial"
            highlight
          />

          <PlanCard
            title="Enterprise"
            price="Custom"
            desc="For large-scale, mission-critical workloads."
            features={[
              "Unlimited usage",
              "Dedicated deployment",
              "Compliance & SLA",
              "Priority support",
            ]}
            cta="Contact Sales"
          />

        </div>
      </section>

      {/* ================= VOICE AGENT API ADD-ON ================= */}
      <section className="bg-white px-6 py-24 border-t">
        <div className="mx-auto max-w-6xl">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Voice Agent API
            </h2>

            <p className="mt-4 text-slate-600">
              A unified speech-to-speech API for natural AI conversations.
              Build LLM-powered agents that listen, think, and speak in real time.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              For detailed tier information, refer to our developer documentation.
            </p>
          </div>

          <div className="mt-16 overflow-x-auto flex justify-center">
            <table className="w-4/5 border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tier</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Pay As You Go</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Growth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Enterprise</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {[
                  ["Standard", "$0.0800 / min", "$0.0700 / min"],
                  ["Standard – BYO TTS", "$0.0600 / min", "$0.0500 / min"],
                  ["Custom – BYO LLM", "$0.0700 / min", "$0.0600 / min"],
                  ["Custom – BYO LLM + TTS", "$0.0500 / min", "$0.0400 / min"],
                  ["Advanced", "$0.1600 / min", "$0.1500 / min"],
                  ["Advanced – BYO TTS", "$0.1200 / min", "$0.1100 / min"],
                ].map(([tier, payg, growth], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium">{tier}</td>
                    <td className="px-6 py-4">{payg}</td>
                    <td className="px-6 py-4">{growth}</td>
                    <td className="px-6 py-4 text-blue-600 font-medium cursor-pointer">
                      Contact Sales
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>


      {/*----------------speech to text api---------*/}
    <section className="px-6 py-28 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl">

            {/* HEADER */}
            <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
                Speech to Text
            </h2>

            <p className="mt-4 text-slate-600">
                Generate natural-sounding speech with low latency and
                production-ready voices across multiple languages.
            </p>

            <p className="mt-2 text-sm text-slate-500">
                Pricing is based on characters generated.
            </p>
            </div>

            {/* TABLE */}
            <div className="mt-16 overflow-x-auto flex justify-center">
            <table className="w-full max-w-5xl border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50">
                <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                    Model
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                    Pay As You Go
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                    Growth
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                    Enterprise
                    </th>
                </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                {[
                    ["Standard", "$0.000015 / char", "$0.000012 / char"],
                    ["Standard – BYO Voice", "$0.000012 / char", "$0.000010 / char"],
                    ["Neural", "$0.000020 / char", "$0.000017 / char"],
                    ["Neural – BYO Voice", "$0.000017 / char", "$0.000014 / char"],
                    ["Custom Voice", "—", "—"],
                ].map(([model, payg, growth], i) => (
                    <tr key={i} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-sm font-medium">
                        {model}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                        {payg}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                        {growth}
                    </td>
                    <td className="px-6 py-4 text-sm">
                        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                        Contact Sales
                        </span>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

        </div>
        </section>

        {/* ------text to speech--------*/}
         <section className="bg-white px-6 py-28 text-slate-900">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Text to Speech
                </h2>

                <p className="mt-4 text-slate-600">
                    Responsive, natural-sounding text-to-speech to power high-throughput
                    voicebots and conversational AI applications. Billed per character.
                </p>
                </div>

                {/* TABLE */}
                <div className="mt-14 flex justify-center overflow-x-auto">
                <table className="w-full max-w-5xl border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-50">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Model
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Pay As You Go
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Growth
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Enterprise
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 font-medium">Aura-2</td>
                        <td className="px-6 py-4">$0.030 / 1k characters</td>
                        <td className="px-6 py-4">$0.027 / 1k characters</td>
                        <td className="px-6 py-4">
                        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                            Contact Sales
                        </span>
                        </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 font-medium">Aura-1</td>
                        <td className="px-6 py-4">$0.0150 / 1k characters</td>
                        <td className="px-6 py-4">$0.0135 / 1k characters</td>
                        <td className="px-6 py-4">
                        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                            Contact Sales
                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>

                {/* FOOTNOTE */}
                <p className="mt-4 text-center text-sm text-slate-500">
                Rates listed above opt in to the{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                    Model Improvement Program
                </span>.
                </p>

                {/* CALCULATOR CTA */}
                <div className="mt-10 flex justify-center">
                <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="
                    flex items-center gap-3
                    rounded-xl border border-emerald-400
                    bg-emerald-50
                    px-6 py-4
                    text-emerald-700
                    font-semibold
                    transition
                    hover:bg-emerald-100
                "
                >
                <Calculator className="h-5 w-5" />
                Calculate the Text to Speech concurrency you need
                </button>
                </div>

            </div>
            </section>


            {/* ================= AUDIO INTELLIGENCE ================= */}
            <section className="bg-white px-6 py-28 text-slate-900 border-t">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Audio Intelligence
                </h2>

                <p className="mt-4 text-slate-600">
                    Powered by task-specific language models.
                    Works with or without transcription. Handles text or audio.
                </p>
                </div>

                {/* TABLE */}
                <div className="mt-16 flex justify-center overflow-x-auto">
                <table className="w-full max-w-5xl border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-50">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Model
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Pay As You Go
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Growth
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                        Enterprise
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                    {[
                        [
                        "Summarization",
                        "$0.0003 / 1k input tokens – $0.0006 / 1k output tokens",
                        "$0.00024 / 1k input tokens – $0.00048 / 1k output tokens",
                        ],
                        [
                        "Topic Detection",
                        "$0.0003 / 1k input tokens – $0.0006 / 1k output tokens",
                        "$0.00024 / 1k input tokens – $0.00048 / 1k output tokens",
                        ],
                        [
                        "Sentiment Analysis",
                        "$0.0003 / 1k input tokens – $0.0006 / 1k output tokens",
                        "$0.00024 / 1k input tokens – $0.00048 / 1k output tokens",
                        ],
                        [
                        "Intent Recognition",
                        "$0.0003 / 1k input tokens – $0.0006 / 1k output tokens",
                        "$0.00024 / 1k input tokens – $0.00048 / 1k output tokens",
                        ],
                    ].map(([model, payg, growth], i) => (
                        <tr key={i} className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 font-medium">
                            {model}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700">
                            {payg}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700">
                            {growth}
                        </td>
                        <td className="px-6 py-4">
                            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                            Contact Sales
                            </span>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>

                {/* FOOTNOTE */}
                <p className="mt-4 text-center text-sm text-slate-500">
                Rates listed above opt in to the{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                    Model Improvement Program
                </span>.
                </p>

            </div>
            </section>
            {/* ================= END AUDIO INTELLIGENCE ================= */}
            
            {/* ================= CTA ================= */}
            <section className="bg-slate-50 px-6 py-24">
                <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold">
                    Need help choosing a plan?
                </h2>

                <p className="mt-4 text-slate-600">
                    Our team can help you find the right setup for your business.
                </p>

                <button className="mt-8 rounded-md bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
                    Talk to an Expert
                </button>
                </div>
            </section>
    </main>
  );
}

/* ================= PLAN CARD ================= */

function PlanCard({ title, price, desc, features, cta, highlight }) {
  return (
    <div
      className={`
        rounded-2xl border p-8 flex flex-col
        ${highlight
          ? "border-blue-600 bg-blue-50 shadow-lg"
          : "border-slate-200 bg-white"}
        hover:shadow-xl transition
      `}
    >
      {highlight && (
        <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          MOST POPULAR
        </span>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>

      <div className="mt-6 text-3xl font-bold">{price}</div>

      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`mt-auto mt-8 rounded-md px-6 py-3 font-semibold
          ${highlight
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-slate-900 text-white hover:bg-slate-800"}
        `}
      >
        {cta}
      </button>
    </div>
  );
}
