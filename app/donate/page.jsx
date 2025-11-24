import { ScrollAnimatedSection } from '../components/ScrollObserver';
import Link from 'next/link';

export const metadata = {
  title: 'Donate - BUGUMA',
  description: 'Support BUGUMA\'s mission by making a donation to help refugees rebuild their lives.',
};

export default function DonatePage() {
  const donationOptions = [
    {
      id: 1,
      icon: '🤝',
      amount: 'R50',
      title: 'Friend',
      description: 'Provides hygiene supplies for one person',
      benefits: ['Immediate impact', 'Digital receipt', 'Supporter badge'],
    },
    {
      id: 2,
      icon: '💪',
      amount: 'R150',
      title: 'Champion',
      description: 'Covers one week of skills training',
      benefits: ['All Friend benefits', 'Impact update', 'Certificate'],
      featured: true,
    },
    {
      id: 3,
      icon: '🌟',
      amount: 'R500',
      title: 'Hero',
      description: 'Supports one person through a full program',
      benefits: ['All Champion benefits', 'Monthly reports', 'Recognition'],
    },
    {
      id: 4,
      icon: '👑',
      amount: 'Custom',
      title: 'Visionary',
      description: 'Create custom impact amount',
      benefits: ['All Hero benefits', 'Direct contact', 'Naming opportunity'],
    },
  ];

  const impactAreas = [
    {
      icon: '📚',
      title: 'Education Support',
      cost: 'R200',
      description: 'School supplies for one refugee child',
    },
    {
      icon: '🎯',
      title: 'Skills Training',
      cost: 'R300',
      description: 'One month of vocational training',
    },
    {
      icon: '❤️',
      title: 'Counselling',
      cost: 'R250',
      description: 'Four psychosocial support sessions',
    },
    {
      icon: '🍽️',
      title: 'Food Assistance',
      cost: 'R150',
      description: 'Food parcels for one family',
    },
    {
      icon: '💻',
      title: 'Digital Literacy',
      cost: 'R400',
      description: 'Complete digital skills course',
    },
    {
      icon: '👗',
      title: 'Clothing Package',
      cost: 'R180',
      description: 'Essentials for new arrivals',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-500 to-accent-600 text-white pt-32 pb-16">
        <div className="container-custom text-center">
          <ScrollAnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Make a Difference
            </h1>
            <p className="text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              Your support helps provide food, education, skills training, protection, and hope to displaced families.
            </p>
            <p className="text-xl text-gray-200">
              Every donation, no matter the size, creates real impact in refugees' lives.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Choose Your Donation Level
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select an amount that works for you, or donate a custom amount.
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationOptions.map((option) => (
              <ScrollAnimatedSection
                key={option.id}
                className={`relative rounded-xl shadow-lg overflow-hidden card-hover transition-all ${
                  option.featured
                    ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white md:scale-105'
                    : 'bg-white'
                }`}
              >
                {option.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className={`text-6xl mb-4 ${option.featured ? '' : ''}`}>
                    {option.icon}
                  </div>

                  <div className="mb-4">
                    <p className={`text-4xl font-bold mb-2 ${option.featured ? '' : 'text-primary-600'}`}>
                      {option.amount}
                    </p>
                    <h3 className={`text-2xl font-bold mb-2 ${option.featured ? '' : 'text-gray-900'}`}>
                      {option.title}
                    </h3>
                    <p className={`mb-6 ${option.featured ? 'text-gray-100' : 'text-gray-600'}`}>
                      {option.description}
                    </p>
                  </div>

                  <ul className={`space-y-2 mb-6 ${option.featured ? 'text-gray-100' : 'text-gray-600'}`}>
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={`text-lg ${option.featured ? '' : 'text-primary-500'}`}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-bold transition-all hover:scale-105 ${
                    option.featured
                      ? 'bg-white text-primary-600 hover:bg-gray-100'
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}>
                    Donate {option.amount}
                  </button>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Breakdown */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Where Your Money Goes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Direct support to refugees across multiple program areas.
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-primary-600 font-bold text-lg mb-3">{area.cost}</p>
                <p className="text-gray-700">{area.description}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Details */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
              Banking Details
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-6 text-center">
                You can donate directly to our bank account. Please include your name as a reference for our records.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { label: 'Account Name', value: 'BUGUMA SOUTH AFRICA' },
                  { label: 'Bank Name', value: 'NEDBANK' },
                  { label: 'Account Number', value: '1131209745' },
                  { label: 'Account Type', value: 'CURRENT' },
                  { label: 'Branch Code', value: '198765' },
                  { label: 'SWIFT Code (International)', value: 'NEDSZAJJ' },
                ].map((detail, index) => (
                  <div key={index} className="border-b-2 border-gray-200 pb-4">
                    <p className="text-sm font-semibold text-primary-600 mb-2">{detail.label}</p>
                    <p className="text-lg font-bold text-gray-900">{detail.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-lg">
                <p className="text-amber-900 font-semibold">
                  💡 Tip: Please include your name as a reference so we can send you a receipt and thank you letter.
                </p>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Become a Monthly Supporter
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Monthly giving creates predictable support that allows us to plan and deliver sustained impact. Your recurring donation helps us build long-term programs.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Budget for long-term programs',
                  'Train more refugees with confidence',
                  'Expand to more communities',
                  'Build sustainable solutions',
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-2xl text-primary-500">✓</span>
                    <span className="text-lg text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-primary text-lg px-8 py-4">
                Start Monthly Giving
              </button>
            </div>

            <ScrollAnimatedSection className="bg-gradient-to-br from-primary-50 to-blue-100 p-8 rounded-xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-sm font-semibold text-primary-600 mb-2">MONTHLY GIFT</p>
                  <p className="text-2xl font-bold text-gray-900">R250/month</p>
                  <p className="text-gray-600 text-sm mt-2">Provides food & supplies for a family</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <p className="text-sm font-semibold text-primary-600 mb-2">MONTHLY GIFT</p>
                  <p className="text-2xl font-bold text-gray-900">R500/month</p>
                  <p className="text-gray-600 text-sm mt-2">Covers one person's skills training</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <p className="text-sm font-semibold text-primary-600 mb-2">MONTHLY GIFT</p>
                  <p className="text-2xl font-bold text-gray-900">R1000/month</p>
                  <p className="text-gray-600 text-sm mt-2">Supports a complete education program</p>
                </div>
              </div>
            </ScrollAnimatedSection>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
          </ScrollAnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Is my donation tax-deductible?',
                a: 'Please contact us for information about tax deductibility status and receipts.',
              },
              {
                q: 'How will my donation be used?',
                a: 'Your donation directly supports our programs: skills training, education, health support, and humanitarian assistance.',
              },
              {
                q: 'Can I restrict my donation to a specific program?',
                a: 'Yes! You can contact us to direct your donation to a specific program area.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, mobile payments, and direct deposits. Contact us for other options.',
              },
              {
                q: 'How often will I receive updates?',
                a: 'Monthly supporters receive quarterly impact reports. One-time donors receive annual updates.',
              },
            ].map((faq, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <ScrollAnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You for Your Generosity
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Together, we rebuild lives, restore hope, and create opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bugumasouthafrica1@gmail.com"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all inline-block"
              >
                Questions? Email Us
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-400 transition-all border-2 border-white inline-block"
              >
                Contact BUGUMA
              </Link>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  );
}
