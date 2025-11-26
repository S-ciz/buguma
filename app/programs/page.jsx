import { ScrollAnimatedSection } from '../components/ScrollObserver';
import Link from 'next/link';

export const metadata = {
  title: 'Our Programs - BUGUMA',
  description: 'Explore BUGUMA\'s comprehensive programs supporting refugees through skills training, education, health, and community integration.',
};

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      icon: '🎯',
      title: 'Skills Training & Livelihoods',
      shortDesc: 'Employment readiness & independence',
      fullDesc: 'We provide practical vocational training including tailoring, digital literacy, welding, hairdressing, and entrepreneurship courses. English language classes help refugees communicate effectively.',
      outcome: 'Employment-ready individuals with marketable skills and self-reliance.',
      image: '/img/skill1.jpg',
      highlights: ['Tailoring', 'Digital Literacy', 'Welding', 'Hairdressing', 'Entrepreneurship', 'English Classes'],
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-500',
    },
    {
      id: 2,
      icon: '📚',
      title: 'Education & Youth Empowerment',
      shortDesc: 'Confident, responsible young leaders',
      fullDesc: 'Our education programs focus on tutoring, providing school materials, and establishing youth clubs. We believe in developing the next generation of community leaders.',
      outcome: 'Confident, academically-supported, and responsible young leaders.',
      image: '/img/skill2.jpg',
      highlights: ['Tutoring Support', 'School Materials', 'Youth Clubs', 'Leadership Training', 'Mentorship'],
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-500',
    },
    {
      id: 3,
      icon: '👩‍🦰',
      title: 'Women\'s Empowerment & Protection',
      shortDesc: 'Safe, confident, independent women',
      fullDesc: 'Safe spaces for support, prevention of gender-based violence, and economic empowerment programs tailored for women. We address the unique challenges women refugees face.',
      outcome: 'Women who are safe, confident, economically independent, and empowered.',
      image: '/img/lady.jpg',
      highlights: ['Safe Spaces', 'GBV Prevention', 'Economic Empowerment', 'Health Awareness', 'Support Groups'],
      color: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-500',
    },
    {
      id: 4,
      icon: '❤️',
      title: 'Psychosocial & Health Support',
      shortDesc: 'Strong emotional wellbeing & healing',
      fullDesc: 'Healing circles, professional counselling, and wellness workshops help address trauma and mental health. We support whole-person recovery.',
      outcome: 'Strong emotional wellbeing, trauma healing, and overall wellness.',
      image: '/img/skill4.jpg',
      highlights: ['Healing Circles', 'Counselling', 'Wellness Workshops', 'Peer Support', 'Mental Health'],
      color: 'from-red-50 to-red-100',
      borderColor: 'border-red-500',
    },
    {
      id: 5,
      icon: '🤝',
      title: 'Community Integration & Peacebuilding',
      shortDesc: 'Social cohesion & peaceful coexistence',
      fullDesc: 'Cultural exchanges and conflict resolution programs build bridges between refugees and host communities. We foster unity and understanding.',
      outcome: 'Integrated communities with strong social cohesion and peaceful coexistence.',
      image: '/img/showcase5.jpg',
      highlights: ['Cultural Exchanges', 'Conflict Resolution', 'Community Events', 'Dialogue Programs', 'Integration Support'],
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-500',
    },
    {
      id: 6,
      icon: '🚨',
      title: 'Humanitarian Response',
      shortDesc: 'Immediate relief for vulnerable families',
      fullDesc: 'Emergency assistance including food parcels, hygiene packs, and clothing for refugees during crisis periods. We address immediate survival needs.',
      outcome: 'Vulnerable families with immediate relief, dignity, and hope.',
      image: '/img/food.jpg',
      highlights: ['Food Assistance', 'Hygiene Packs', 'Clothing Distribution', 'New Arrival Support', 'Emergency Aid'],
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-500',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700 text-white pt-32 pb-16">
        <div className="container-custom text-center">
          <ScrollAnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive support across six core areas of refugee empowerment.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {programs.map((program, index) => (
              <ScrollAnimatedSection
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div
                    className="h-80 md:h-auto md:min-h-80 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${program.image}')`,
                    }}
                  />

                  {/* Content */}
                  <div className={`p-8 md:p-10 bg-gradient-to-br ${program.color}`}>
                    <div className="text-6xl mb-4">{program.icon}</div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {program.fullDesc}
                    </p>

                    <div className="mb-6 pb-6 border-b-2 border-gray-300">
                      <p className="text-sm font-semibold text-primary-700 mb-2">KEY ACTIVITIES:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border-2 border-primary-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-accent-700 mb-2">OUTCOME:</p>
                      <p className="text-gray-800 text-lg font-semibold">
                        {program.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Makes Our Programs Effective
            </h2>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👥',
                title: 'Community-Led',
                desc: 'Designed with and for refugees.',
              },
              {
                icon: '📊',
                title: 'Evidence-Based',
                desc: 'Data-driven approach to impact.',
              },
              {
                icon: '🎯',
                title: 'Results-Focused',
                desc: 'Clear outcomes and measurable goals.',
              },
              {
                icon: '🌍',
                title: 'Culturally Sensitive',
                desc: 'Respect for diverse backgrounds.',
              },
            ].map((feature, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Info */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How to Participate
            </h2>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Reach Out',
                description: 'Contact BUGUMA SOUTH AFRICA to learn about available programs and how you can participate.',
              },
              {
                step: '2',
                title: 'Assessment',
                description: 'We understand your needs and identify the best-fit programs for your situation.',
              },
              {
                step: '3',
                title: 'Enroll & Thrive',
                description: 'Join the program and begin your journey of empowerment and transformation.',
              },
            ].map((step, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Join our programs and begin your transformation journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all inline-block"
              >
                Contact Us
              </Link>
              <Link
                href="/donate"
                className="px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-400 transition-all border-2 border-white inline-block"
              >
                Support Programs
              </Link>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  );
}
