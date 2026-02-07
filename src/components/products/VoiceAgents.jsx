const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function VoiceAgent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 mb-10">

      <div className={`flex flex-col items-center justify-center rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <div className="h-40 w-40 rounded-full border-2 border-blue-600 flex items-center justify-center text-center text-blue-600 font-medium">
          Click here<br />to talk to me
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Built with RBG APIs
        </p>
      </div>

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <p className="text-sm text-slate-600">
          Hey there! Ready to try the Voice Agent? Click the orb to begin.
        </p>
      </div>
    </div>
  );
}
