import { Link } from 'react-router-dom';
import { Dumbbell, Award, Users, Lightbulb, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: 'DISCIPLINE',
      description: 'We believe in consistent effort and dedication as the foundation of all achievement.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'EXCELLENCE',
      description: 'We strive for greatness in everything we do, from equipment to coaching.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'COMMUNITY',
      description: 'A supportive environment where every member feels like family.',
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'INNOVATION',
      description: 'Constantly evolving with the latest fitness trends and technology.',
    },
  ];

  const trainers = [
    {
      name: 'ARYAN SHARMA',
      role: 'Head Strength Coach',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop',
      specialties: ['Strength Training', 'Powerlifting', 'Sports Performance'],
      experience: '8+ Years',
    },
    {
      name: 'RAHUL VERMA',
      role: 'HIIT & Cardio Specialist',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      specialties: ['HIIT', 'CrossFit', 'Weight Management'],
      experience: '6+ Years',
    },
    {
      name: 'PRIYA SINGH',
      role: 'Yoga & Mindfulness Expert',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop',
      specialties: ['Yoga', 'Meditation', 'Flexibility'],
      experience: '5+ Years',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="About Hero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display-lg text-white mb-6 uppercase tracking-tight text-glow-primary">
            BEYOND THE GYM.<br />
            <span className="text-primary">A LEGACY OF STRENGTH.</span>
          </h1>
          <p className="font-body-lg text-on-surface/80 max-w-2xl mx-auto">
            We don't just build bodies. We forge champions, create leaders, and transform lives
            through the power of fitness.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-label-md text-primary">OUR STORY</span>
            <h2 className="font-headline-lg text-white mt-2 mb-6">
              FORGED IN <span className="text-primary">DEDICATION</span>
            </h2>
            <div className="space-y-4">
              <p className="font-body-lg text-on-surface/80">
                City Fitness Studio began with a simple vision: to create a fitness sanctuary
                where people could push their limits in an environment that inspires excellence.
              </p>
              <p className="font-body-md text-on-surface/70">
                What started as a small training space has evolved into Noida's premier fitness
                destination, serving hundreds of members on their transformation journeys. Our
                commitment to quality equipment, expert coaching, and community spirit sets us
                apart from the rest.
              </p>
              <p className="font-body-md text-on-surface/70">
                Today, we continue to innovate and expand, bringing the latest training methods
                and technologies to our members while maintaining the personal touch that makes
                City Fitness feel like home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🏋️', value: '500+', label: 'Active Members' },
              { icon: '🏆', value: '50+', label: 'Champions' },
              { icon: '📚', value: '1000+', label: 'Success Stories' },
              { icon: '🌟', value: '5+', label: 'Years Excellence' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-headline-md text-primary">{stat.value}</div>
                <div className="font-label-md text-on-surface/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">OUR VALUES</span>
            <h2 className="font-headline-lg text-white mt-2">
              THE PILLARS OF <span className="text-primary">PERFORMANCE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-title-lg text-white mb-3 uppercase text-center">
                  {value.title}
                </h3>
                <p className="font-body-md text-on-surface/70 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-label-md text-primary">OUR TEAM</span>
          <h2 className="font-headline-lg text-white mt-2">
            MEET OUR <span className="text-primary">ELITE COACHES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-title-lg text-white uppercase mb-1">{trainer.name}</h3>
                  <p className="font-body-md text-primary">{trainer.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-container/20 text-primary rounded-full font-label-md text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-on-surface/60">
                    {trainer.experience} Experience
                  </span>
                  <div className="flex gap-2">
                    <button className="text-on-surface/60 hover:text-primary transition-colors font-label-md">Instagram</button>
                    <button className="text-on-surface/60 hover:text-primary transition-colors font-label-md">LinkedIn</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-headline-lg text-white mb-6">
            READY TO START YOUR <span className="text-primary">TRANSFORMATION?</span>
          </h2>
          <p className="font-body-lg text-on-surface/70 mb-8">
            Join City Fitness Studio today and experience the difference that expert guidance
            and a supportive community can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="bg-primary-container text-white font-headline-md uppercase px-8 py-4 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary"
            >
              JOIN NOW
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-white font-headline-md uppercase px-8 py-4 border border-white/30 rounded hover:border-primary hover:text-primary transition-all"
            >
              CONTACT US <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;