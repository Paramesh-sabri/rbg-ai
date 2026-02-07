import {
  Code2,
  Plug,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import enterpriseVisual from "../assets/enterprise-hero.png";


export default function Journey() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">

        {/* =======================
            JOURNEY HEADER
        ======================= */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Choose your{" "}
            <span className="text-blue-600">Voice AI journey</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose the path that best fits your business needs and technical
            requirements.
          </p>
        </div>

        {/* =======================
            JOURNEY CARDS
        ======================= */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

          <JourneyCard
            icon={Code2}
            title="Build with APIs"
            desc="Voice AI infrastructure for builders."
            sub="For developers and product teams ready to move fast with flexible APIs."
            btn="Start Building"
          />

          <JourneyCard
            icon={Plug}
            title="Integrate RBG"
            desc="Voice AI for platforms & partners."
            sub="For platforms embedding enterprise-grade Voice AI."
            btn="Become a Partner"
          />

          <JourneyCard
            icon={SlidersHorizontal}
            title="Custom models"
            desc="Voice AI solutions built with you."
            sub="For enterprises with unique workflows and compliance needs."
            btn="Talk to Sales"
          />

        </div>

        {/* =======================
            SOLUTIONS THAT SCALE
        ======================= */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Solutions that scale
            </h3>

            <p className="mt-4 max-w-xl text-slate-600 leading-relaxed">
              As the industry’s voice AI leader, RBG.AI delivers enterprise
              solutions that power intelligent voice experiences — safely,
              securely, and at scale.
            </p>

            <button
              className="
                mt-8 inline-flex items-center gap-2
                rounded-md border border-blue-600
                px-5 py-3 text-sm font-semibold
                text-blue-600 transition
                hover:bg-blue-50
              "
            >
              View Enterprise Solutions
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* RIGHT ICON GRID */}
          <div className="flex justify-center">
            <img
              src={enterpriseVisual}
              alt="Enterprise Voice AI visualization"
              className="w-4/5 max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =======================
   SUB COMPONENTS
======================= */

function JourneyCard({ icon: Icon, title, desc, sub, btn }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-700">{desc}</p>
      <p className="mt-2 text-sm text-slate-500">{sub}</p>

      <button className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
        {btn}
      </button>
    </div>
  );
}

function ScaleCard({ icon: Icon, title }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 text-center hover:shadow-md transition">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <p className="text-sm font-medium text-slate-700">
        {title}
      </p>
    </div>
  );
}
