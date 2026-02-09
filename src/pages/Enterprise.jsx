import {
  Rocket,
  ShieldCheck,
  Lock,
  BarChart3,
  Settings,Plug
} from "lucide-react";

import enterpriseVisual from "../assets/enterprise-hero.png";
import cloudIcon from "../assets/enterprise_icon1.png";
import selfHostedIcon from "../assets/enterprise_icon2.png";
import dedicatedIcon from "../assets/enterprise_icon3.png";
import contactcenters from "../assets/enterprise_icon_1.png"
import speechanalytics from "../assets/enterprise_icon_2.png"
import medicaltranscripts from "../assets/enterprise_icon_3.png"
export default function Enterprise() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Voice AI for Enterprise
            </h1>

            <p className="mt-6 text-slate-600 text-lg">
              From transcription to voice synthesis to AI voice agents,
              RBG.AI is the enterprise-grade platform for building secure,
              scalable, and real-time voice experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                Get a Demo
              </button>
              <button className="text-blue-600 font-medium hover:underline">
                Join Enterprise Program →
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={enterpriseVisual}
              alt="Enterprise Voice AI visualization"
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= DEPLOYMENT OPTIONS ================= */}
      <div className="w-full bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible deployment options
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Choose the deployment model that fits your performance, compliance, and operational needs. Deepgram offers flexible infrastructure options, from shared cloud to single-tenant isolation to customer-managed environments.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CLOUD */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="mx-auto mb-6 flex h-50 w-50 items-center justify-center rounded-full">
                <img
                  src={cloudIcon}
                  alt="Cloud deployment"
                  className="h-36 w-36 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud</h3>
              <p className="text-sm text-gray-600 mb-6">
                Fully managed multi-tenant cloud with zero infrastructure overhead.
                Ideal for fast integration and global scale.
              </p>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                Request EU Endpoint Access
              </button>
            </div>

            {/* SELF-HOSTED */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <img
                src={selfHostedIcon}
                alt="Self hosted deployment"
                className="mx-auto mb-6 h-36 w-36 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Self-Hosted
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Deploy RBG.AI on your own cloud or on-prem infrastructure for
                maximum control and compliance.
              </p>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                Learn More About Self-Hosting
              </button>
            </div>

            {/* DEDICATED */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <img
                src={dedicatedIcon}
                alt="Dedicated deployment"
                className="mx-auto mb-6 h-36 w-36 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dedicated
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Fully isolated single-tenant runtime with region-specific deployment
                and enterprise-grade compliance.
              </p>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                Learn More About Dedicated
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= METRICS ================= */}
      <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
              
              {/* Header */}
              <h1 className="text-4xl font-bold text-gray-900 text-center">
                Voice AI powered by <span className="text-blue-600">RBG</span>
              </h1>
              <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
                RBG provides a powerful voice AI platform including speech-to-text,
                text-to-speech, audio intelligence, and AI agents.
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                
                {/* Accuracy Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <span className="text-sm text-green-600 font-semibold">
                    UNMATCHED ACCURACY
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-3">
                    30% more accurate
                  </h2>
                  <p className="text-gray-600 mt-2">
                    RBG leads the industry with highly accurate models across multiple
                    real-world use cases.
                  </p>

                  {/* Image Placeholder */}
                  <div className="mt-6 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                    image
                  </div>
                </div>

                {/* Speed Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-4xl font-bold text-gray-900">40x</h2>
                  <p className="text-gray-600 mt-2">
                    Faster inference time
                  </p>
                  <p className="text-gray-500 mt-4 text-sm">
                    Transcribe in real-time or an hour of pre-recorded audio in seconds.
                  </p>
                </div>

                {/* Pricing Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-4xl font-bold text-gray-900">3–5x</h2>
                  <p className="text-gray-600 mt-2">
                    Lower price
                  </p>
                  <p className="text-gray-500 mt-4 text-sm">
                    Optimized infrastructure delivers high performance at reduced cost.
                  </p>
                </div>

                {/* Testimonial */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm md:col-span-2">
                  <p className="text-gray-700 italic">
                    “RBG has been an invaluable partner. Their innovation and customer-first
                    mindset help us deliver exceptional voice AI solutions.”
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-gray-900 font-semibold">Adam Larsen</p>
                      <p className="text-gray-500 text-sm">CTO, Example Corp</p>
                    </div>
                  </div>
                </div>

                {/* Partners */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-gray-900 font-semibold mb-4">
                    Trusted by top companies
                  </h3>

                  {/* Logos Placeholder */}
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                    Partner logos   
                  </div>
                </div>

              </div>
            </div>
        </section>

      {/* ================= ENTERPRISE PILLARS ================= */}

        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              The Voice AI platform for enterprise
            </h2>
            <p className="text-gray-600 text-center mt-4 max-w-4xl mx-auto">
              Trusted by leading enterprises and conversational AI teams, RBG
              deploys and operates large-scale voice AI systems processing massive
              volumes of speech reliably and securely.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

              {/* Performance */}
              <div>
                <Rocket className="text-blue-600 w-7 h-7 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Performance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  RBG powers high-throughput, real-time voice applications with
                  fast and accurate speech-to-text, text-to-speech, and
                  conversational AI through a single API.
                </p>
              </div>

              {/* Security */}
              <div>
                <Lock className="text-blue-600 w-7 h-7 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Security
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enterprise-grade security ensures sensitive data and IP
                  protection, with compliance for industry standards such as
                  SOC 2 and HIPAA-aligned practices.
                </p>
              </div>

              {/* Reliability */}
              <div>
                <ShieldCheck className="text-blue-600 w-7 h-7 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Reliability
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our infrastructure delivers predictable, consistent performance
                  at scale — trusted for mission-critical workloads where uptime
                  matters.
                </p>
              </div>

              {/* Scale */}
              <div>
                <BarChart3 className="text-blue-600 w-7 h-7 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scale
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Optimized AI models enable high concurrency and cost-efficient
                  scaling, allowing your applications to grow without friction.
                </p>
              </div>

              {/* Flexibility */}
              <div>
                <Settings className="text-blue-600 w-7 h-7 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flexibility
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Full control with cloud or self-hosted deployments, custom
                  training, partner integrations, and multi-language model
                  support.
                </p>
              </div>

              {/* Integrations */}
              <div>
                <Plug className="text-blue-600 w-7 h-7 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partners & Integrations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seamlessly integrate with major cloud providers, telephony
                  platforms, and AI tools through a robust partner ecosystem.
                </p>
              </div>

            </div>
          </div>
        </section>


      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Transforming business with voice AI
          </h2>
          <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
            Integrating voice capabilities into your application, call center,
            or AI agent doesn’t have to be complex. Discover what RBG voice AI
            can do for your business.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
              
              {/* Image Placeholder */}
              <div className="h-44 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <img src={contactcenters} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Centers
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                Transcribe customer interactions into actionable data to analyze
                sentiment, detect key topics, and empower agents in real time.
              </p>

              <button className="mt-6 w-fit bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition">
                Learn more
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
              
              {/* Image Placeholder */}
              <div className="h-44 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <img src={speechanalytics}/>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Speech Analytics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                Analyze conversational data to surface insights, monitor
                compliance, improve quality assurance, and optimize operations.
              </p>

              <button className="mt-6 w-fit bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition">
                Learn more
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
              
              {/* Image Placeholder */}
              <div className="h-44 rounded-xl  flex items-center justify-center text-gray-400 mb-6">
                <img src={medicaltranscripts} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Medical Transcripts
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                Convert patient interactions and clinical notes into accurate
                text, improving documentation speed and operational efficiency.
              </p>

              <button className="mt-6 w-fit bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition">
                Learn more
              </button>
            </div>

          </div>
        </div>
      </section>
{/*------------------------Marque*--------------------------------*/}

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

      {/* ================= FINAL CTA ================= */}

       <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Are you ready to innovate?
        </h2>
        <p className="text-gray-600 mt-4">
          Partner with RBG to unlock new opportunities and elevate your
          business with voice AI.
        </p>

        {/* Form */}
        <form className="mt-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="First Name*"
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="input"
            />
            <input
              type="email"
              placeholder="Email*"
              className="input"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="input"
            />
            <input
              type="text"
              placeholder="Job Title*"
              className="input"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="input"
            />

            <textarea
              placeholder="How can we help?*"
              rows={4}
              className="input md:col-span-2 resize-none"
            />
          </div>

          {/* Consent */}
          <p className="text-xs text-gray-500 mt-6">
            By continuing, you agree to RBG’s Privacy Policy and consent to
            receive communications from us.
          </p>

          {/* CTA Button */}
          <button
            type="submit"
            className="mt-8 w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Talk to an Expert
          </button>
        </form>
      </div>

      {/* Tailwind helper */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 0.9rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: #fff;
          font-size: 0.875rem;
          color: #111827;
          outline: none;
        }
        .input::placeholder {
          color: #9ca3af;
        }
        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 1px #2563eb;
        }
      `}</style>
    </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Metric({ title, desc }) {
  return (
    <div className="rounded-xl border p-8 text-center bg-white">
      <h3 className="text-4xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
    </div>
  );
}

function Pillar({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <Icon className="h-7 w-7 text-blue-600" />
      <h4 className="mt-4 font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function UseCase({ icon: Icon, title }) {
  return (
    <div className="rounded-xl border bg-white p-10 hover:shadow-lg transition">
      <Icon className="h-10 w-10 text-blue-600 mx-auto" />
      <h4 className="mt-6 font-semibold text-slate-900">{title}</h4>
      <button className="mt-4 text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>
  );
}
