const PANEL_HEIGHT = "min-h-[260px] md:min-h-[320px]";

export default function TextToSpeech() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto mt-10 mb-10">

      <div className={`rounded-xl border border-slate-200 p-4 ${PANEL_HEIGHT}`}>
        <textarea
          className="h-full w-full resize-none rounded-md border p-4"
          placeholder="Type or paste text here..."
        />
        <p className="mt-2 text-xs text-slate-500">0 / 1000</p>
      </div>

      <div className={`rounded-xl border border-slate-200 p-4 space-y-4 ${PANEL_HEIGHT}`}>
        <div className="flex gap-3 flex-wrap">
          {["Healthcare", "Finance", "Support", "Sales"].map(t => (
            <button
              key={t}
              className="rounded-full border px-4 py-1 text-sm hover:bg-blue-50"
            >
              {t}
            </button>
          ))}
        </div>

        <select className="w-full rounded-md border px-3 py-2">
          <option>Thalia – Female (US)</option>
          <option>Odysseus – Male (US)</option>
          <option>Electra – Female (AU)</option>
        </select>

        <button className="mt-auto w-full rounded-md bg-blue-600 py-3 text-white font-medium hover:bg-blue-700">
          Generate
        </button>
      </div>
    </div>
  );
}
