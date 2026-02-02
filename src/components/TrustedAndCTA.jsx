export default function TrustedAndFeedback() {
  const feedbacks = [
    {
      text:
        "RBG.AI helped us build low-latency voice agents our customers actually trust. Integration was smooth and scalable.",
      name: "Nikhil Gupta",
      role: "Founder & CTO, Vapi",
    },
    {
      text:
        "Voice is a strategic channel for us, and RBG.AI’s APIs gave us the flexibility and reliability we needed globally.",
      name: "Andy O'Dower",
      role: "VP Product, Twilio",
    },
    {
      text:
        "By combining RBG.AI with our platform, we were able to deliver real-time Voice AI without operational overhead.",
      name: "Aly Cabral",
      role: "VP Developer GTM, Cloudflare",
    },
    {
      text:
        "RBG.AI stands out not just for accuracy, but for how deeply they understand enterprise workflows.",
      name: "Josh Levin",
      role: "Head of Product, Cresta",
    },
    {
      text:
        "We’ve scaled conversational AI faster using RBG.AI’s transcription and analytics capabilities.",
      name: "Uma Sandilya",
      role: "Chief Growth Officer, Kore.ai",
    },
    {
      text:
        "RBG.AI enables enterprise-grade voice experiences with speed, control, and flexibility.",
      name: "Hardy Myers",
      role: "SVP Partnerships, NICE",
    },
  ];

  const colors = [
    {
      border: "border-blue-500",
      bg: "bg-blue-50/50",
      text: "text-blue-600",
    },
    {
      border: "border-teal-500",
      bg: "bg-teal-50/50",
      text: "text-teal-600",
    },
    {
      border: "border-violet-500",
      bg: "bg-violet-50/50",
      text: "text-violet-600",
    },
    {
      border: "border-amber-500",
      bg: "bg-amber-50/50",
      text: "text-amber-600",
    },
  ];

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">

        {/* TRUSTED HEADER */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by startups and enterprises
          </h2>
          <p className="mt-3 text-slate-600">
            Discover the power of RBG.AI through real customer stories.
          </p>
        </div>

        {/* FEEDBACK CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((item, i) => {
            const c = colors[i % colors.length];

            return (
              <div
                key={i}
                className={`
                  relative
                  rounded-xl
                  border ${c.border}
                  ${c.bg}
                  p-6
                  transition
                  hover:shadow-lg
                `}
              >
                {/* Accent bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${c.border}`}
                />

                <p className="text-sm leading-relaxed text-slate-700">
                  “{item.text}”
                </p>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className={`text-xs font-medium ${c.text}`}>
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA CARD */}
        <div className="mt-20 flex justify-center">
          <div
            className="
              w-full max-w-4xl
              rounded-2xl
              border border-blue-300
              bg-blue-50
              px-6 py-14
              text-center
            "
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Unlock Voice AI at scale with a single API
            </h3>

            <p className="mt-4 text-slate-600">
              Get conversational intelligence with transcription and
              understanding on the world’s most reliable Voice AI platform.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                className="
                  rounded-md
                  bg-blue-600
                  px-6 py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Sign Up Free
              </button>

              <button
                className="
                  rounded-md
                  border border-blue-600
                  px-6 py-3
                  font-semibold
                  text-blue-600
                  transition
                  hover:bg-blue-100
                "
              >
                Get a Demo
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
