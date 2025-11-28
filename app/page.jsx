"use client"
import HeroSlider from './components/HeroSlider';
import { ScrollAnimatedSection } from './components/ScrollObserver';
import Link from 'next/link';


export default function Home() {
  const objectives = [
    {
      icon: '🎓',
      title: 'Empowerment & Skills',
      description: 'Creating pathways to employment and independence through training.',
    },
    {
      icon: '🛡️',
      title: 'Protection & Rights',
      description: 'Promoting safety, justice, and dignity for all.',
    },
    {
      icon: '📚',
      title: 'Education & Youth',
      description: 'Supporting learning and developing young leaders.',
    },
    {
      icon: '💼',
      title: 'Livelihoods & Economy',
      description: 'Enabling financial stability and economic growth.',
    },
    {
      icon: '🤝',
      title: 'Community Integration',
      description: 'Building unity and shared community vision.',
    },
    {
      icon: '❤️',
      title: 'Health & Wellness',
      description: 'Strengthening emotional and physical wellbeing.',
    },
    {
      icon: '📢',
      title: 'Advocacy & Leadership',
      description: 'Promoting refugee voices and representation.',
    },
    {
      icon: '🚨',
      title: 'Humanitarian Aid',
      description: 'Offering urgent relief and essential support.',
    },
  ];

  const values = [
    {
      icon: '👤',
      title: 'Dignity',
      description: 'Every person deserves respect and opportunity.',
    },
    {
      icon: '🌈',
      title: 'Inclusion',
      description: 'We embrace diversity and build unity.',
    },
    {
      icon: '👥',
      title: 'Leadership',
      description: 'Refugee-led, experience-driven solutions.',
    },
    {
      icon: '✅',
      title: 'Accountability',
      description: 'Transparent and responsible stewardship.',
    },
    {
      icon: '💝',
      title: 'Compassion',
      description: 'Serving with empathy and care.',
    },
  ];

  const stories = [
    {
      name: 'Amara',
      role: 'Skills Training Graduate',
      image: '/img/showcase.jpg',
      quote: 'The commmunity gave me the skills and confidence to start my own business. Now I can support my family.',
    },
    {
      name: 'Esperer Ruhegeza',
      role: 'Youth Empowerment',
      image: '/img/youth.jpg',
      quote: 'The youth program changed my life. I learned leadership and made lifelong friends.',
    },
    {
      name: 'Mariam Abdul',
      role: 'Women Empowerment',
      image: '/img/women.jpg',
      quote: 'Thanks you so much team, I found my voice and became an advocate for other women.',
    },
  ];

  return (
  <>
      
  
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a team of refugees, community leaders, volunteers, and professionals dedicated to improving the lives of displaced people. Built from lived experience, we understand the challenges of displacement and work to provide practical solutions, hope, and sustainable support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach is refugee-led and community-centered, built on solutions based on lived experience, with a focus on empowerment, dignity, and long-term wellbeing.
              </p>
            </div>

            <ScrollAnimatedSection className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary-700 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To build a world where refugees live with dignity, security, and equal opportunities—empowered to rebuild their lives and contribute meaningfully to their communities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-accent-600 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To support, empower, and advocate for refugees by providing skills, protection, education, and socio-economic opportunities that promote self-reliance, integration, and long-term wellbeing.
                </p>
              </div>
            </ScrollAnimatedSection>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our principles guide every action and decision we make.
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work across multiple areas to create lasting impact in refugees' lives.
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl card-hover border-l-4 border-primary-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{objective.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-700">{objective.description}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Impact Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from those whose lives have been transformed by our programs.
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div
                    className="w-20 h-20 mx-auto rounded-full bg-cover bg-center mb-4"
                    style={{ backgroundImage: `url('${story.image}')` }}
                  />
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-primary-600 font-semibold">{story.role}</p>
                </div>

                <p className="text-gray-700 italic mb-4">"{story.quote}"</p>

                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
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
              Make a Difference Today
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-100">
              Your support helps provide food, education, skills training, protection, and hope to displaced families.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 inline-block"
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                className="px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-400 transition-all hover:scale-105 inline-block border-2 border-white"
              >
                Learn More
              </Link>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  );
}
