import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    cadence: 'per user / month',
    highlight: false,
    features: [
      'Up to 5 drafts / month',
      'Upload IDF (PDF, DOCX)',
      'Claim template library',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$79',
    cadence: 'per user / month',
    highlight: true,
    features: [
      'Unlimited drafts',
      'Interactive clarifications',
      'Prior art quick-scan',
      'Export to DOCX & LaTeX',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'volume pricing',
    highlight: false,
    features: [
      'On-prem or private cloud',
      'SOC2 & SSO (Okta, Azure AD)',
      'Custom claim drafting rules',
      'Dedicated success manager',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free and scale as your portfolio grows.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm ${
                tier.highlight ? 'border-gray-900' : 'border-gray-200'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold text-gray-900">{tier.price}</span>
                <span className="text-sm text-gray-500">{tier.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm ${
                  tier.highlight
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tier.name === 'Enterprise' ? 'Contact sales' : 'Start now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
