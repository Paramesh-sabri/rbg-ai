import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100vh-64px-80px)] bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900 leading-tight">
            Build voice AI faster with{" "}
            <span className="text-blue-600">RBG.AI</span>
          </h1>

          <p className="mt-4 text-slate-600 text-lg">
            Create an account to access Speech-to-Text, Text-to-Speech,
            Voice Agents, and Audio Intelligence APIs.
          </p>

          <ul className="mt-6 space-y-3 text-slate-600">
            <li>✅ Free tier to get started</li>
            <li>✅ Enterprise-ready infrastructure</li>
            <li>✅ Simple APIs & fast onboarding</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Create your account
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in →
            </a>
          </p>

          {/* SOCIAL LOGIN */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {/* GOOGLE */}
            <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-4 hover:bg-slate-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium">Google</span>
            </button>

            {/* GITHUB */}
            <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-4 hover:bg-slate-50 transition">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium">GitHub</span>
            </button>

            {/* MICROSOFT */}
            <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-4 hover:bg-slate-50 transition">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
                <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
                <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
              </svg>
              <span className="text-sm font-medium">Microsoft</span>
            </button>
          </div>

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">OR</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="
                mt-1 w-full rounded-md
                border border-slate-300
                px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-4">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Choose a password"
                className="
                  w-full rounded-md
                  border border-slate-300
                  px-3 py-2 pr-10 text-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Minimum 8 characters, at least 1 number.
            </p>
          </div>

          {/* CTA */}
          <button
            className="
              mt-6 w-full rounded-md
              bg-blue-600 py-3
              text-white font-medium
              hover:bg-blue-700 transition
            "
          >
            Create account
          </button>
        </div>
      </div>
    </main>
  );
}
