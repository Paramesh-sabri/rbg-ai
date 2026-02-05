import {
  Cloud,
  Server,
  ShieldCheck,
  Lock,
  Zap,
  Gauge,
  Headphones,
  Phone,
  HeartPulse,
  BookOpen,
} from "lucide-react";

export default function Enterprise() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

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

          <div className="h-80 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
            <Gauge className="h-20 w-20 text-blue-600" />
          </div>

        </div>
      </section>

      {/* ================= DEPLOYMENT OPTIONS ================= */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">

          <h2 className="text-3xl font-bold text-slate-900">
            Flexible deployment options
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Choose the deployment model that fits your performance,
            compliance, and operational needs.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">

            <DeploymentCard
              icon={Cloud}
              title="Cloud"
              desc="Multi-tenant managed cloud with zero infrastructure overhead."
              btn="Request Cloud Access"
            />

            <DeploymentCard
              icon={Server}
              title="Self-Hosted"
              desc="Deploy on your own infrastructure with full control and isolation."
              btn="Learn About Self-Hosting"
            />

            <DeploymentCard
              icon={Lock}
              title="Dedicated"
              desc="Single-tenant, fully managed deployment for strict compliance needs."
              btn="Learn About Dedicated"
            />

          </div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-10">

          <Metric title="30% more accurate" desc="Industry-leading speech recognition accuracy." />
          <Metric title="40× faster" desc="Real-time inference at massive scale." />
          <Metric title="3–5× lower cost" desc="Optimized GPU infrastructure." />

        </div>
      </section>

      {/* ================= ENTERPRISE PILLARS ================= */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-3xl font-bold text-slate-900">
            Built for enterprise scale
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">

            <Pillar icon={Zap} title="Performance" desc="Low latency, high throughput, real-time processing." />
            <Pillar icon={ShieldCheck} title="Security" desc="SOC 2, GDPR, HIPAA-ready architecture." />
            <Pillar icon={Gauge} title="Reliability" desc="Predictable performance at global scale." />
            <Pillar icon={Cloud} title="Scalability" desc="Millions of concurrent requests supported." />
            <Pillar icon={Server} title="Flexibility" desc="Cloud, hybrid, or on-prem deployments." />
            <Pillar icon={Lock} title="Integrations" desc="Works with your existing enterprise stack." />

          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">

          <h2 className="text-3xl font-bold text-slate-900">
            Transforming business with voice AI
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">

            <UseCase icon={Headphones} title="Contact Centers" />
            <UseCase icon={Phone} title="Speech Analytics" />
            <UseCase icon={HeartPulse} title="Medical Transcription" />

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-blue-50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-bold text-slate-900">
            Are you ready to innovate?
          </h2>

          <p className="mt-4 text-slate-600">
            Partner with RBG.AI to unlock enterprise-grade voice intelligence.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700">
            Talk to an Expert
          </button>

        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function DeploymentCard({ icon: Icon, title, desc, btn }) {
  return (
    <div className="rounded-2xl border bg-white p-8 text-left hover:shadow-lg transition">
      <Icon className="h-8 w-8 text-blue-600" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      <button className="mt-6 text-blue-600 font-medium hover:underline">
        {btn} →
      </button>
    </div>
  );
}

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
