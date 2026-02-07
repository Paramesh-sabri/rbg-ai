import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-sm p-8 mt-5 mb-5 items-center">

        {/* BRAND */}
        <h1 className="text-center text-2xl font-bold text-slate-900">
          RBG<span className="text-blue-600">.AI</span>
        </h1>

        <p className="mt-2 text-center text-sm text-slate-500">
          Need an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign up →
          </span>
        </p>

        {/* TITLE */}
        <h2 className="mt-8 text-xl font-semibold text-slate-900">
          Log in
        </h2>

        {/* SOCIAL LOGIN */}
        <div className="mt-6 grid grid-cols-3 gap-3">

          {/* GOOGLE */}
          <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-4 hover:bg-slate-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-6 w-6"
            />
            <span className="text-sm font-medium text-slate-700">
              Google
            </span>
          </button>

          {/* GITHUB */}
          <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-4 hover:bg-slate-50 transition">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="h-6 w-6"
            />
            <span className="text-sm font-medium text-slate-700">
              GitHub
            </span>
          </button>

          {/* MICROSOFT */}
          <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-4 hover:bg-slate-50 transition">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="10" height="10" fill="#F25022" />
              <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
              <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
              <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
            </svg>
            <span className="text-sm font-medium text-slate-700">
              Microsoft
            </span>
          </button>

        </div> {/* ✅ SOCIAL LOGIN CLOSED */}

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
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Password"
              className="w-full rounded-md border border-slate-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            Must contain minimum 8 characters and 1 number.
          </p>
        </div>

        {/* LOGIN BUTTON */}
        <button className="mt-6 w-full rounded-md bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition">
          Log in
        </button>

        {/* FORGOT */}
        <p className="mt-4 text-center text-sm text-blue-600 cursor-pointer hover:underline">
          Forgot password?
        </p>

      </div>
    </div>
  );
}
