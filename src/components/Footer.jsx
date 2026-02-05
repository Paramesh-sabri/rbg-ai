import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-16">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-5">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              <span className="text-blue-600">RBG</span>.AI
            </h3>

            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Build accurate, real-time, and scalable Voice AI solutions using
              speech-to-text, text-to-speech, and intelligent voice agents.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-4">
              <button onClick={()=> window.open("https://github.com/rbg-research")}><SocialIcon icon={Github} color="hover:text-slate-900" /></button>
              <SocialIcon icon={Twitter} color="hover:text-sky-500" />
              <button onClick={()=> window.open("https://www.linkedin.com/company/rbgai/posts/?feedView=all")}><SocialIcon icon={Linkedin} color="hover:text-blue-600" /></button>
              <button
                onClick={() => window.location.href = "mailto:contact@rbg.ai"}
              >
                <SocialIcon icon={Mail} color="hover:text-emerald-600" />
              </button>
            </div>
          </div>

          {/* PRODUCT */}
          <FooterCol
            title="Product"
            color="text-blue-600"
            links={[
              "Speech to Text",
              "Text to Speech",
              "Voice Agents",
              "Audio Intelligence",
              "Pricing",
            ]}
          />

          {/* SOLUTIONS */}
          <FooterCol
            title="Solutions"
            color="text-emerald-600"
            links={[
              "Contact Centers",
              "Healthcare",
              "Enterprise",
              "Startups",
              "Partners",
            ]}
          />

          {/* COMPANY */}
          <FooterCol
            title="Company"
            color="text-violet-600"
            links={[
              "About",
              "Careers",
              "Blog",
              "Press",
              "Contact",
            ]}
          />
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-blue-100" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} RBG.AI. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <FooterLink text="Privacy" />
            <FooterLink text="Terms" />
            <FooterLink text="Security" />
          </div>
        </div>

      </div>
    </footer>
  );
}

/* =====================
   REUSABLE PARTS
===================== */

function FooterCol({ title, links, color }) {
  return (
    <div>
      <h4 className={`text-sm font-semibold ${color}`}>
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ text }) {
  return (
    <a
      href="#"
      className="text-slate-500 hover:text-blue-600 transition"
    >
      {text}
    </a>
  );
}

function SocialIcon({ icon: Icon, color }) {
  return (
    <a
      href="#"
      className={`
        flex h-9 w-9 items-center justify-center
        rounded-full
        border border-slate-200
        bg-white
        text-slate-500
        transition
        hover:bg-blue-50
        hover:border-blue-300
        ${color}
      `}
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
