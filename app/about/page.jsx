import { ScrollAnimatedSection } from '../components/ScrollObserver';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - BUGUMA',
  description: 'Learn about BUGUMA\'s mission, vision, and values dedicated to supporting refugees.',
};

export default function AboutPage() {
  const approachPoints = [
    {
      icon: '👥',
      title: 'Refugee-Led & Community-Centered',
      description: 'Solutions created by and for those with lived experience of displacement.',
    },
    {
      icon: '💡',
      title: 'Experience-Driven Solutions',
      description: 'All programs are built on real-world understanding of refugee challenges.',
    },
    {
      icon: '🌟',
      title: 'Focus on Empowerment',
      description: 'We prioritize dignity, agency, and long-term sustainable wellbeing.',
    },
  ];

  const team = [
    {
      name: 'Leadership Team',
      role: 'Refugee-led Direction',
      description: 'Our leadership includes experienced refugees who guide our vision and strategy.',
      icon: '👔',
    },
    {
      name: 'Community Partners',
      role: 'Local Collaborators',
      description: 'We work with grassroots organizations and community members.',
      icon: '🤝',
    },
    {
      name: 'Volunteers',
      role: 'Passionate Advocates',
      description: 'Dedicated volunteers contribute skills, time, and compassion daily.',
      icon: '❤️',
    },
    {
      name: 'Professionals',
      role: 'Skilled Specialists',
      description: 'Experts in education, health, protection, and economic development.',
      icon: '🎓',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700 text-white pt-32 pb-16">
        <div className="container-custom text-center">
          <ScrollAnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About BUGUMA
            </h1>
            <p className="text-2xl text-gray-100 max-w-3xl mx-auto">
              A movement by refugees, for refugees, committed to dignity and opportunity.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  BUGUMA was founded on the belief that every refugee deserves the opportunity to rebuild their life with dignity, security, and purpose. Our organization emerged from the lived experiences of those who have walked the difficult path of displacement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We recognized that refugees aren't just victims in need of charity—they are resilient individuals with valuable skills, talents, and dreams. Our mission is to unlock these potentials through empowerment, education, and economic opportunity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, BUGUMA serves hundreds of refugees across South Africa, providing practical support that creates real, measurable change in people's lives.
                </p>
              </div>
            </div>

            <ScrollAnimatedSection className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-primary-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">🎯 Vision</h3>
                <p className="text-gray-800 leading-relaxed">
                  A world where refugees live with dignity, security, and equal opportunities—empowered to rebuild their lives and contribute meaningfully to their communities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent-50 via-amber-50 to-orange-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-accent-600 mb-4">🚀 Mission</h3>
                <p className="text-gray-800 leading-relaxed">
                  To support, empower, and advocate for refugees by providing skills, protection, education, and socio-economic opportunities that promote self-reliance, integration, and long-term wellbeing.
                </p>
              </div>
            </ScrollAnimatedSection>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three principles guide everything we do.
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachPoints.map((point, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse talents united by a shared mission to support refugees.
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg card-hover text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg text-gray-100">Refugees Supported</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-lg text-gray-100">Programs & Services</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-lg text-gray-100">Volunteers Active</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg text-gray-100">Support Available</p>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Values Deep Dive */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Values in Action
            </h2>
          </ScrollAnimatedSection>

          <div className="space-y-8">
            {[
              {
                title: '👤 Dignity',
                description: 'We believe every person deserves respect, agency, and the opportunity to choose their own path. Dignity is not given—it is recognized and protected.',
              },
              {
                title: '🌈 Inclusion',
                description: 'Our programs embrace diversity across ethnicity, religion, gender, and background. We build communities where everyone belongs.',
              },
              {
                title: '👥 Refugee Leadership',
                description: 'We are led by people with lived experience. Their insights shape our strategy, programs, and solutions.',
              },
              {
                title: '✅ Accountability',
                description: 'We are transparent about our work, finances, and impact. We answer to the communities we serve and the supporters who trust us.',
              },
              {
                title: '💝 Compassion',
                description: 'We serve with genuine empathy, understanding the trauma, resilience, and hope that our beneficiaries carry.',
              },
            ].map((value, index) => (
              <ScrollAnimatedSection key={index} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-lg text-gray-700">{value.description}</p>
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
              Join Our Movement
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Whether through donations, volunteering, or partnership, there are many ways to support our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all inline-block"
              >
                Support Our Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-400 transition-all border-2 border-white inline-block"
              >
                Get Involved
              </Link>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  );
}
