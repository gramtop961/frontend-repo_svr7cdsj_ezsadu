import { Rocket, Shield, FileText, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-gray-100 to-white blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Turn IDFs into patent-grade drafts in minutes
            </div>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              AI patent drafting from your IDF — precise, private, fast.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              PatentPilot ingests your Invention Disclosure Form and produces a structured, attorney-ready patent application draft, including claims, abstract, background, and detailed description.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#signup"
                className="inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-900"
              >
                Get started free
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                View pricing
              </a>
            </div>

            <div id="features" className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Feature icon={FileText} title="Attorney-grade structure" desc="Claims, abstract, background, and figures mapping." />
              <Feature icon={Shield} title="Enterprise privacy" desc="SOC2-ready data handling and on-prem options." />
              <Feature icon={Rocket} title="From IDF to draft" desc="Upload IDF, answer clarifications, get a draft in minutes." />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" aria-hidden />
              <div className="relative">
                <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4">
                  <div className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">IDF Preview</div>
                  <div className="grid gap-2 text-sm">
                    <div className="h-3 w-3/5 rounded bg-gray-200" />
                    <div className="h-3 w-4/5 rounded bg-gray-200" />
                    <div className="h-3 w-2/5 rounded bg-gray-200" />
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
                  <div className="mb-2 text-xs font-semibold text-gray-700">Generated Draft Outline</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> Abstract</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> Claims</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> Background</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> Detailed Description</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-md bg-gray-100 p-2 text-gray-800">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{title}</div>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
