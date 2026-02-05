import { Mail, Phone, Briefcase, ShieldCheck } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white">
      <div className="mx-14 max-w-7xl px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">
            Talk to a Voice AI expert
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Our team is here to help you unlock AI’s potential in real-world
            business use cases. We’ll guide you to the right solution.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-5">
            <Feature
              icon={Briefcase}
              title="All-in-one voice AI platform"
              desc="Speech-to-text, text-to-speech, voice agents, and language intelligence."
            />
            <Feature
              icon={ShieldCheck}
              title="Enterprise-ready & secure"
              desc="Scalable, reliable, and compliant for mission-critical workloads."
            />
            <Feature
              icon={Phone}
              title="Custom solutions"
              desc="Private cloud, on-prem, or fully managed deployments."
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
          <form className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Email" type="email" />
              <Input label="Phone Number" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Job Title" />
              <Input label="Company Name" />
            </div>

            {/* PRODUCTS */}
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">
                Which products are you interested in?
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Speech-to-Text",
                  "Text-to-Speech",
                  "Voice Agent API",
                  "Audio Intelligence",
                  "Other",
                ].map((p) => (
                  <button
                    key={p}
                    type="button"
                    className="
                      rounded-full border border-slate-300
                      px-4 py-1.5 text-sm
                      text-slate-600
                      transition
                      hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600
                    "
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                How can we help?
              </label>
              <textarea
                rows="4"
                className="
                  mt-1 w-full rounded-md border border-slate-300
                  px-4 py-2 text-sm
                  focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                "
                placeholder="Tell us about your use case…"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="
                w-full rounded-md bg-blue-600 py-3
                font-semibold text-white
                transition
                hover:bg-blue-700 hover:shadow-md
              "
            >
              Submit
            </button>

            <p className="text-xs text-slate-400 text-center">
              By submitting, you agree to our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-lg bg-blue-50 p-2">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type={type}
        className="
          mt-1 w-full rounded-md border border-slate-300
          px-4 py-2 text-sm
          focus:border-blue-600 focus:ring-1 focus:ring-blue-600
        "
      />
    </div>
  );
}
