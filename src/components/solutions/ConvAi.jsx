import convai1 from "../../assets/convai-1.png"
import convai2 from "../../assets/convai-2.png"
import convai3 from "../../assets/convai-3.png"



export default function ConvAi(){
    return(
        <>
        <div className="relative bg-white px-6 py-28 overflow-hidden">
            <div className="mx-auto max-w-6xl grid items-center gap-16 lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <div>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
                    Build production-ready
                    <br />
                    conversational AI
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                    High-accuracy speech-to-text, natural text-to-speech, and real-time
                    orchestration for scalable voicebots, assistants, and AI agents.
                    Power enterprise conversational AI with streaming performance and
                    full control.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <button className="rounded-md bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                    Try it Free
                    </button>

                    <button className="group inline-flex items-center gap-2 rounded-md border border-emerald-500 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50">
                    Get a Free Assessment
                    <span className="transition group-hover:translate-x-1">→</span>
                    </button>
                </div>
                </div>

                {/* RIGHT IMAGE (unchanged) */}
                <div className="flex justify-center lg:justify-end">
                <img
                    src={convai1}
                    alt="Conversational AI capabilities visualization"
                    className="w-[520px] max-w-full"
                />
                </div>

            </div>

            {/* subtle light background glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_65%)]" />
        </div>


        <div className="relative bg-white px-6 py-28 overflow-hidden">
            <div className="mx-auto max-w-6xl grid items-center gap-16 lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
                    The Voice AI infrastructure built for
                    <br />
                    conversational AI
                </h2>

                <ul className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">
                    <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>
                        Real-time streaming speech recognition optimized for low-latency,
                        natural conversations with LLM-powered agents.
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>
                        Humanlike text-to-speech synthesis with ultra-low latency for
                        responsive dialogue.
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>
                        RBG Voice Agent API orchestrates STT, TTS, and LLMs with
                        turn-taking, end-of-thought prediction, and barge-in support for
                        seamless conversational flow.
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>
                        Multi-language support with 30+ STT languages for global
                        deployments.
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>
                        Private cloud, self-hosted, or hybrid deployment options for full
                        enterprise control.
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>
                        SDKs, APIs, and docs built for fast developer integration.
                    </span>
                    </li>
                </ul>
                </div>

                {/* RIGHT IMAGE (UNCHANGED) */}
                <div className="flex justify-center lg:justify-end">
                <img
                    src={convai2}
                    alt="Voice AI infrastructure stack visualization"
                    className="w-[520px] max-w-full"
                />
                </div>

            </div>

            {/* subtle light glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_65%)]" />
            </div>

            <div className="bg-white px-6 py-24">
                <div className="mx-auto max-w-6xl grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT IMAGE (unchanged) */}
                    <div className="flex justify-center lg:justify-start">
                    <img
                        src={convai3}
                        alt="Live voice agent conversation interface"
                        className="w-[520px] max-w-full"
                    />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                    <h3 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
                        Real-time speed built for live voice agents
                    </h3>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                        Conversational AI agents are only as good as their ability to respond
                        instantly. Delays break the flow, frustrate users, and reduce trust.
                        RBG’s streaming architecture delivers sub-second round-trip
                        latency across speech-to-text and text-to-speech, keeping your voice
                        agents natural, responsive, and humanlike even at scale.
                    </p>
                    </div>

                </div>
            </div>
            <div className="bg-white px-6 py-28">
                <div className="mx-auto max-w-6xl">

                    {/* HEADER */}
                    <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                        Built for understanding complex
                        <br />
                        conversations
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                        RBG’s AI models are designed for the complexities of real-world
                        conversations, managing speech, timing, and turn taking to deliver
                        fluid, natural interactions.
                    </p>
                    </div>

                    {/* FEATURES GRID */}
                    <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Feature 1 */}
                    <div>
                        <div className="mb-4 text-emerald-500">🎙️</div>
                        <h3 className="text-xl font-semibold text-slate-900">
                        High-accuracy transcription
                        </h3>
                        <p className="mt-3 text-slate-600">
                        Capture words with minimal errors to ensure agents process clean,
                        reliable transcripts.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div>
                        <div className="mb-4 text-emerald-500">🅰️</div>
                        <h3 className="text-xl font-semibold text-slate-900">
                        Custom vocabulary injection
                        </h3>
                        <p className="mt-3 text-slate-600">
                        Adapt to business-specific terms, product names, and specialized
                        jargon in real time.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div>
                        <div className="mb-4 text-emerald-500">👥</div>
                        <h3 className="text-xl font-semibold text-slate-900">
                        Speaker diarization
                        </h3>
                        <p className="mt-3 text-slate-600">
                        Track who’s speaking to maintain context in multi-party
                        conversations.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div>
                        <div className="mb-4 text-emerald-500">📌</div>
                        <h3 className="text-xl font-semibold text-slate-900">
                        Topic detection
                        </h3>
                        <p className="mt-3 text-slate-600">
                        Identify key topics to help agents follow shifts in intent and
                        conversation flow.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div>
                        <div className="mb-4 text-emerald-500">🌍</div>
                        <h3 className="text-xl font-semibold text-slate-900">
                        Language detection
                        </h3>
                        <p className="mt-3 text-slate-600">
                        Automatically detect spoken language for multilingual conversation
                        support.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div>
                        <div className="mb-4 text-emerald-500">⏱️</div>
                        <h3 className="text-xl font-semibold text-slate-900">
                        End-of-thought detection
                        </h3>
                        <p className="mt-3 text-slate-600">
                        Know when users have finished speaking to avoid interruptions or
                        long delays.
                        </p>
                    </div>

                    </div>
                </div>
            </div>
            <div className="bg-white px-6 py-28">
                <div className="mx-auto max-w-4xl text-center">

                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                    Power conversational AI agents with RBG
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                    Stream transcription and natural speech synthesis through one API built
                    for real-time AI voice agents.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                    <button className="rounded-md bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                        Get Started
                    </button>

                    <button className="rounded-md border border-emerald-500 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50">
                        Talk To An Expert
                    </button>
                    </div>

                </div>
            </div>
        </>
    )
}