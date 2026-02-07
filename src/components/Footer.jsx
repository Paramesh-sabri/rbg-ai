import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

/* =====================
   ROUTE MAP
===================== */
const FOOTER_ROUTES = {
  // Product
  "Speech to Text": "/speech_to_text",
  "Text to Speech": "/text_to_speech",
  "Voice Agents": "/voice_agents",
  "Audio Intelligence": "/audio_intelligence",
  Pricing: "/pricing",

  // Solutions
  "Contact Centers": "/contactcenters",
  Enterprise: "/enterprise",
  "Conversational AI": "/convai",
  Startups: "/enterprise",
  Partners: "/enterprise",

  // Company
  About: "/home",
  Careers: "/home",
  Blog: "/home",
  Press: "/home",
  Contact: "/contact",

  // Legal
  Privacy: "/privacy",
  Terms: "/terms",
  Security: "/security",
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
      <div className="mx-auto max-w-6xl px-4 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid gap-12 md:grid-cols-5 text-center md:text-left">

          {/* BRAND */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start md:pl-6">

            <h3 className="text-2xl font-extrabold text-slate-900">
              <span className="text-blue-600">RBG</span>.AI
            </h3>

            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Build accurate, real-time, and scalable Voice AI solutions using
              speech-to-text, text-to-speech, and intelligent voice agents.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/rbg-research"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon icon={Github} />
              </a>

              <a
                href="https://www.linkedin.com/company/rbgai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon icon={Linkedin} />
              </a>

              <a href="mailto:contact@rbg.ai">
                <SocialIcon icon={Mail} />
              </a>
            </div>
          </div>

          {/* PRODUCT + SOLUTIONS + COMPANY */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
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

          <FooterCol
            title="Solutions"
            color="text-emerald-600"
            links={[
              "Contact Centers",
              "Enterprise",
              "Conversational AI",
              "Startups",
              "Partners",
            ]}
          />

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

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 border-t border-blue-100" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
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
    <div className="flex flex-col items-center md:items-start">
      <h4 className={`text-sm font-semibold ${color}`}>
        {title}
      </h4>

      <ul className="mt-4 space-y-3">
        {links.map((label) => (
          <li key={label}>
            <Link
              to={FOOTER_ROUTES[label] || "/"}
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ text }) {
  return (
    <Link
      to={FOOTER_ROUTES[text] || "/"}
      className="text-slate-500 hover:text-blue-600 transition"
    >
      {text}
    </Link>
  );
}

function SocialIcon({ icon: Icon }) {
  return (
    <div
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        border border-slate-200
        bg-white
        text-slate-500
        transition
        hover:bg-blue-50
        hover:border-blue-300
        hover:text-blue-600
      "
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}
