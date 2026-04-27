export default function ContactSection() {
  return (
    <section className="bg-[#f3f3f5] px-6 py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-fuchsia-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-fuchsia-500">
              AI Automation
            </span>
            <span className="rounded-full border border-sky-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-sky-500">
              Dev
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-500">
              Cybersecurity
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-6 max-w-[560px] text-[42px] font-semibold leading-[0.98] tracking-[-0.05em] text-neutral-900 md:text-[64px]">
            Get a custom system plan in{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-sky-500 bg-clip-text text-transparent">
              24h
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 max-w-[460px] text-[17px] leading-7 text-neutral-500">
            We design scalable systems that automate, secure and grow your business.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200 bg-white text-sky-500">
                ⚡
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  Reduce manual processes
                </h3>
                <p className="mt-1 text-[15px] text-neutral-500">
                  Save 10–30 hours per week
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-200 bg-white text-fuchsia-500">
                🛡️
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  Secure your operations
                </h3>
                <p className="mt-1 text-[15px] text-neutral-500">
                  Reduce risk with better system foundations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200 bg-white text-sky-500">
                📈
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  Build for scale
                </h3>
                <p className="mt-1 text-[15px] text-neutral-500">
                  Clean systems designed to grow with demand
                </p>
              </div>
            </div>
          </div>

          {/* Bottom pills */}
          <div className="mt-10 flex gap-3">
  <span className="flex-1 text-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] text-neutral-500 shadow-sm">
    🟢 Estimated response &lt;24h
  </span>
  <span className="flex-1 text-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] text-neutral-500 shadow-sm">
    🔒 50% deposit to start
  </span>
</div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-[28px] border border-fuchsia-200 bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fuchsia-500">
              Start a project
            </p>

            <h3 className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-900">
              Get your free system audit
            </h3>

            <p className="mt-3 max-w-[460px] text-[15px] leading-6 text-neutral-500">
              Tell us about your requirements and we’ll map the solution.
            </p>

            <form className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-[13px] font-medium text-neutral-800">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Khaled Beno"
                  className="w-full rounded-xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-[14px] text-neutral-700 outline-none transition focus:border-fuchsia-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-neutral-800">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="khaled@dencom.com"
                  className="w-full rounded-xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-[14px] text-neutral-700 outline-none transition focus:border-fuchsia-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-neutral-800">
                  Company size
                </label>
                <input
                  type="text"
                  placeholder="1-20 employees"
                  className="w-full rounded-xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-[14px] text-neutral-700 outline-none transition focus:border-fuchsia-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-neutral-800">
                  Project details
                </label>
                <textarea
                  rows={4}
                  placeholder="I need an AI system that..."
                  className="w-full rounded-xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-[14px] text-neutral-700 outline-none transition focus:border-fuchsia-300"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-sky-500 px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.22)] transition hover:scale-[1.01]"
              >
                Get your system audit
              </button>
            </form>

            <p className="mt-4 text-center text-[12px] text-neutral-400">
              No spam. Expert review within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}