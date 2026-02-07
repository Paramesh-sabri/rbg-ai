import {  ArrowRight } from "lucide-react";
import enterpriseVisual from "../assets/enterprise-hero.png";
import api from "../assets/journey-api.png"
import integ from "../assets/journey-integrate.png"
import custom from "../assets/journey-custom.png"


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
            <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">Voice AI journey</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose the path that best fits your business needs and technical
            requirements.
          </p>
        </div>

        {/* =======================
            JOURNEY CARDS
        ======================= */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          <JourneyCard
            icon={api}
            title="Build with APIs"
            desc="Voice AI infrastructure for builders."
            sub="For developers and product teams ready to move fast with flexible APIs."
            btn="Start Building"
          />

          <JourneyCard
            icon={integ}
            title="Integrate RBG"
            desc="Voice AI for platforms & partners."
            sub="For platforms embedding enterprise-grade Voice AI."
            btn="Become a Partner"
          />

          <JourneyCard
            icon={custom}
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

function JourneyCard({ icon, title, desc, sub, btn }) {
  return (
    <div
      className="
        flex flex-col h-full
        rounded-3xl border border-slate-200
        bg-white
        px-8 pt-6 pb-8
        transition
        hover:shadow-lg
      "
    >
      {/* ICON */}
      <div className="mb-6 w-full rounded-xl bg-white p-4">
        <img
          src={icon}
          alt={title}
          className="w-full h-[120px] object-contain"
        />
      </div>



      {/* TEXT */}
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm font-medium text-slate-700">
        {desc}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        {sub}
      </p>

      {/* SPACER */}
      <div className="flex-1" />

      {/* CTA */}
      <button
        className="
          inline-flex w-fit
          rounded-md bg-blue-600
          px-5 py-2.5
          text-sm font-semibold text-white
          hover:bg-blue-700
          transition
          mt-3
        "
      >
        {btn}
      </button>
    </div>
  );
}

