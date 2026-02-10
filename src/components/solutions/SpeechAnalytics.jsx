import speech1 from "../../assets/speech_anl-1.png";
import speech2 from "../../assets/nova-visual.png"
import speech3 from "../../assets/aura-visual.png"
import speech4 from "../../assets/audio-insight-visual.png"

export default function SpeechAnalytics(){
    return (
        <div>

            <div className="w-full bg-white px-6 py-24">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            Power call analytics with
                            <br />
                            <span className="text-blue-600">unmatched Speech to Text</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed">
                            With our all-in-one speech-to-text and language understanding API,
                            you can turn speech into insights in seconds, affordably and
                            efficiently.
                        </p>

                        <button
                            className="
                            mt-8 inline-flex items-center gap-2
                            rounded-md bg-blue-600 px-6 py-3
                            text-sm font-semibold text-white
                            transition hover:bg-blue-700
                            "
                        >
                            Try it Free
                            <span className="text-lg">→</span>
                        </button>
                    </div>

                        {/* RIGHT VISUAL — IMAGE PLACEHOLDER */}
                    <div className="relative flex items-center justify-center">

                        {/* Replace this div with <img src={...} /> */}
                        <span className="text-slate-400 text-sm">
                        <img src={speech1} alt="" />
                        </span>

                    </div>
                </div>
            </div>

            <div className="w-full bg-white px-6 py-24">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Unmatched performance and
                        <br />
                        <span className="text-blue-600">value</span>
                    </h2>

                    <ul className="mt-8 space-y-6 text-base sm:text-lg text-slate-600">
                        <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                        <p>
                            Our next-gen speech-to-text models surpass all competitors in
                            speed, accuracy, and cost.
                        </p>
                        </li>

                        <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                        <p>
                            Trained to handle background noise, multiple speakers, and
                            cross-talk during podcasts, recorded audio, and live streaming—
                            delivering accurate, readable captions at an unbeatable price.
                        </p>
                        </li>
                    </ul>
                    </div>

                    {/* RIGHT VISUAL — IMAGE PLACEHOLDER */}
                    <div className="relative flex items-center justify-center">
                        <img
                        src={speech2}
                        alt="Performance visualization"
                        className="w-full max-w-md"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full bg-white px-6 py-24">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <img
                            src={speech3}
                            alt="Call insights visualization"
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                    
                    {/* RIGHT VISUAL */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                            Call insights you can
                            <br />
                            <span className="text-blue-600">trust</span>
                        </h2>

                        <ul className="mt-8 space-y-6 text-base sm:text-lg text-slate-600">
                            <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                            <p>
                                Tailored models identify keywords and phrases including jargon,
                                product terms, and acronyms.
                            </p>
                            </li>

                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                                <p>
                                    Speaker labels and smart formatted transcripts with automatic
                                    punctuation and paragraphs, contextualized entities,
                                    alphanumerics, and more.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white px-6 py-24">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        From audio to insight
                        <br />
                        <span className="text-blue-600">in seconds</span>
                    </h2>

                    <ul className="mt-8 space-y-6 text-base sm:text-lg text-slate-600">
                        <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                        <p>
                            Identify speaker sentiment and intent, extract topics and context,
                            and accurately summarize calls to deliver amazing customer
                            experiences.
                        </p>
                        </li>

                        <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                        <p>
                            Extract actionable insights with real-time APIs powered by
                            task- and domain-specific language models (DSLMs).
                        </p>
                        </li>
                    </ul>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex items-center justify-center">
                    <img
                        src={speech4}
                        alt="Audio to insight visualization"
                        className="w-full max-w-md object-contain"
                    />
                    </div>
                </div>
            </div>


            <div className="w-full bg-white px-6 py-28">
                <div className="mx-auto max-w-6xl">

                    {/* HEADER */}
                    <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Unlock customer insights at scale
                        <br />
                        <span className="text-blue-600">with RBG.AI Language Intelligence</span>
                    </h2>

                    <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Poor transcription accuracy leads to weak analytics and missed insights.
                        RBG.AI combines high-accuracy speech-to-text with powerful language
                        intelligence models to help you understand every customer interaction
                        and drive meaningful improvements across your business.
                    </p>
                    </div>

                    {/* FEATURE GRID */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* CARD 1 */}
                    <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-slate-900">
                        Call tracking & analytics
                        </h3>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        Classify calls by sentiment, keywords, and phrases. Generate meaningful
                        KPIs and understand what matters most to your customers.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-slate-900">
                        Quality assurance & compliance
                        </h3>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        Ensure adherence to company policies, regulatory requirements, and
                        standard operating procedures across every conversation.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-slate-900">
                        Agent assist
                        </h3>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        Real-time transcription and insights help agents respond faster,
                        improve outcomes, and reduce average handling time.
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-slate-900">
                        Agent performance
                        </h3>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        Deliver actionable coaching insights without manually reviewing every
                        call. Identify key moments that impact agent effectiveness.
                        </p>
                    </div>

                    {/* CARD 5 */}
                    <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-slate-900">
                        Call driver monitoring
                        </h3>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        Track customer intent and top call drivers to understand why customers
                        reach out and proactively fix recurring issues.
                        </p>
                    </div>

                    {/* CARD 6 */}
                    <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-slate-900">
                        Sentiment analysis
                        </h3>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        Analyze customer sentiment after every interaction to improve routing,
                        reduce churn, and increase overall satisfaction.
                        </p>
                    </div>

                    </div>
                </div>
            </div>

            <div className="w-full bg-white px-6 py-28">
                <div className="mx-auto max-w-6xl">

                    {/* HEADER */}
                    <div className="mb-14">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Resources for call analytics
                        </h2>
                        <div className="mt-4 h-px w-full bg-slate-200" />
                    </div>

                    {/* RESOURCE CARDS */}
                    <div className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* CARD 1 */}
                            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
                            <div className="h-40 flex items-center justify-center bg-slate-50">
                                {/* Logo / Image placeholder */}
                                <span className="text-slate-400 text-lg font-semibold">
                                RBG Partner
                                </span>
                            </div>

                            <div className="p-6">
                                <p className="text-xs text-slate-500 mb-2">
                                Case Study · Jul 22, 2024 · AI Engineering
                                </p>
                                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                                How RBG.AI elevates contact center customer experience
                                </h3>
                            </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
                            <div className="h-40 flex items-center justify-center bg-slate-50">
                                <span className="text-slate-400 text-lg font-semibold">
                                Analytics Platform
                                </span>
                            </div>

                            <div className="p-6">
                                <p className="text-xs text-slate-500 mb-2">
                                Case Study · Jan 28, 2025 · AI Research
                                </p>
                                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                                Unlocking deeper call insights with RBG.AI speech analytics
                                </h3>
                            </div>
                            </div>

                            {/* CARD 3 */}
                            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
                            <div className="h-40 flex items-center justify-center bg-slate-50">
                                <span className="text-slate-400 text-lg font-semibold">
                                Sales Intelligence
                                </span>
                            </div>

                            <div className="p-6">
                                <p className="text-xs text-slate-500 mb-2">
                                Case Study · Jun 24, 2025 · AI Engineering
                                </p>
                                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                                Boosting sales performance with RBG.AI language intelligence
                                </h3>
                            </div>
                        </div>

                    </div>

                    {/* OPTIONAL NAV BUTTONS (UI only) */}
                    <button className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100">
                        ‹
                    </button>

                    <button className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100">
                        ›
                    </button>
                    </div>

                </div>
            </div>

            <div className="w-full bg-gradient-to-b from-white via-slate-50 to-white px-6 py-28">
                <div className="mx-auto max-w-4xl text-center">

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                    <span className="text-slate-400">No Compromises.</span>{" "}
                    <span className="text-slate-900">Only Opportunities.</span>
                    </h2>

                    <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                    What could you do with <span className="font-semibold text-slate-800">90%+</span>{" "}
                    accuracy and real-time <span className="font-semibold text-slate-800">300-millisecond</span>{" "}
                    transcription speed at a fraction of the cost of legacy ASR solutions?
                    </p>

                    <div className="mt-10">
                    <button
                    onClick={() => navigate("/signup")}
                        className="
                        inline-flex items-center justify-center
                        rounded-md bg-blue-600
                        px-8 py-3
                        text-sm sm:text-base
                        font-semibold text-white
                        transition hover:bg-blue-700
                        "
                    >
                        Let’s Find Out
                    </button>
                    </div>

                </div>
                </div>


        </div>
    )
}