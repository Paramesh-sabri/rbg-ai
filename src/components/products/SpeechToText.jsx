import { useState } from "react";
import { Mic, Upload, ChevronDown } from "lucide-react";

const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function SpeechToText() {
  const [mode, setMode] = useState("flux");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto mt-10 mb-10">
      
      {/* LEFT PANEL */}
      <div
        className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}
        grid grid-rows-[auto_1fr]`}
      >
        {/* SUB TABS */}
        <div className="flex gap-8 border-b pb-3 text-sm">
          <button
            onClick={() => setMode("flux")}
            className={`pb-2 ${
              mode === "flux"
                ? "border-b-2 border-blue-600 font-semibold text-slate-900"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Flux: Voice Agents
          </button>

          <button
            onClick={() => setMode("nova")}
            className={`pb-2 ${
              mode === "nova"
                ? "border-b-2 border-blue-600 font-semibold text-slate-900"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Nova: Transcription
          </button>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="h-24 w-24 mt-2 rounded-full border-2 border-blue-600 flex flex-col items-center justify-center hover:bg-blue-50">
            <Mic className="h-5 w-5 text-blue-600" />
            <span className="mt-1 text-xs font-medium">Speak</span>
          </button>

          {mode === "nova" && (
            <>
              <div className="w-56 relative">
                <select className="w-full appearance-none rounded-md border px-4 py-2 pr-10">
                  <option>English</option>
                  <option>Tamil</option>
                  <option>Hindi</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              </div>

              <div className="text-xs text-slate-400">OR</div>

              <button className="flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-slate-50">
                <Upload className="h-4 w-4" />
                Use Your Own File
              </button>
            </>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={`relative rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <p className="text-sm text-slate-500">
          Your transcriptions will show here.
        </p>

        <div className="absolute bottom-4 right-4 flex gap-4 text-sm text-slate-500">
          <button className="hover:text-blue-600">Copy</button>
          <button className="hover:text-blue-600">Download</button>
        </div>
      </div>
    </div>
  );
}
