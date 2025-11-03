export default function FAQ() {
  const faqs = [
    {
      q: 'What is an IDF and how do you use it?',
      a: 'An Invention Disclosure Form (IDF) captures the core details of an invention. Upload your IDF and our system parses it to build a structured draft with sections like claims, abstract, and detailed description.',
    },
    {
      q: 'Will my data remain private?',
      a: 'Yes. We use enterprise-grade security controls. For teams that need full control, an on‑premises or private cloud deployment is available.',
    },
    {
      q: 'Can attorneys customize claim language?',
      a: 'Absolutely. You can define drafting rules, preferred terms, and claim styles. The generated draft is fully editable and exportable.',
    },
    {
      q: 'Do you check for prior art?',
      a: 'We provide an optional quick-scan to surface related references early in the drafting process. Full search integrations are available on enterprise plans.',
    },
  ];

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-gray-600">Everything you need to know about PatentPilot.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <dt className="text-base font-semibold text-gray-900">{item.q}</dt>
              <dd className="mt-2 text-gray-600">{item.a}</dd>
            </div>
          ))}
        </div>

        <div id="signup" className="mx-auto mt-14 max-w-xl rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Ready to draft your next patent?</h3>
          <p className="mt-2 text-gray-600">Create an account to start from your IDF today. No credit card required.</p>
          <form
            className="mt-4 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const email = data.get('email');
              alert(`Thanks, we\'ll reach out to ${email}`);
              e.currentTarget.reset();
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Work email"
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-900"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
