const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function AudioIntelligence() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto mt-10 mb-10">

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT} flex flex-col gap-3`}>
        {["Summarization", "Sentiment", "Intent", "Topics"].map(i => (
          <button
            key={i}
            className="w-full rounded-full border px-4 py-2 text-sm hover:bg-blue-50 hover:border-blue-500"
          >
            {i}
          </button>
        ))}
      </div>

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-blue-600">Summary:</span>{" "}
          The customer called support to update payment details.
        </p>
      </div>
    </div>
  );
}
