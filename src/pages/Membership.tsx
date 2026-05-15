import { Check, X, Zap, Crown, Star } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: 'STARTER',
      price: '₹2,499',
      period: '/month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        { name: 'Gym Access', included: true },
        { name: 'Basic Equipment Usage', included: true },
        { name: 'Locker Room Access', included: true },
        { name: 'Free Parking', included: true },
        { name: 'Group Classes', included: false },
        { name: 'Personal Trainer', included: false },
        { name: 'Nutrition Plan', included: false },
        { name: 'Guest Passes', included: false },
      ],
      icon: <Zap className="w-8 h-8" />,
      popular: false,
    },
    {
      name: 'ELITE',
      price: '₹4,999',
      period: '/month',
      description: 'Our most popular plan for serious fitness enthusiasts',
      features: [
        { name: '24/7 Gym Access', included: true },
        { name: 'All Equipment Usage', included: true },
        { name: 'Locker Room & Shower', included: true },
        { name: 'Free Parking', included: true },
        { name: 'Unlimited Group Classes', included: true },
        { name: '1 Personal Trainer Session/mo', included: true },
        { name: 'Basic Nutrition Guide', included: true },
        { name: '1 Guest Pass/mo', included: true },
      ],
      icon: <Crown className="w-8 h-8" />,
      popular: true,
    },
    {
      name: 'PRO',
      price: '₹7,999',
      period: '/month',
      description: 'Premium package for ultimate fitness transformation',
      features: [
        { name: '24/7 Gym Access', included: true },
        { name: 'All Equipment + Premium Zone', included: true },
        { name: 'Premium Locker & Spa Access', included: true },
        { name: 'Valet Parking', included: true },
        { name: 'Unlimited All Classes', included: true },
        { name: '8 Personal Trainer Sessions/mo', included: true },
        { name: 'Custom Nutrition Plan', included: true },
        { name: '4 Guest Passes/mo', included: true },
      ],
      icon: <Star className="w-8 h-8" />,
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: '🏋️',
      title: 'Premium Equipment',
      description: 'Top-of-the-line gym machinery from leading brands',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Trainers',
      description: 'Certified professionals to guide your journey',
    },
    {
      icon: '📱',
      title: 'App Access',
      description: 'Track workouts and book classes from your phone',
    },
    {
      icon: '🍎',
      title: 'Nutrition Support',
      description: 'Customized meal plans and dietary guidance',
    },
    {
      icon: '🏆',
      title: 'Progress Tracking',
      description: 'Regular assessments and goal adjustments',
    },
    {
      icon: '🎉',
      title: 'Exclusive Events',
      description: 'Member-only workshops and competitions',
    },
  ];

  const faqs = [
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes, you can cancel your membership with 30 days notice. No questions asked.',
    },
    {
      question: 'Is there a joining fee?',
      answer: 'No joining fee for annual plans. Short-term plans have a one-time registration fee.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time.',
    },
    {
      question: 'Do you offer trial sessions?',
      answer: 'Yes, we offer a free trial day for all new members to experience our facility.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Membership Hero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-display-lg text-white tracking-widest uppercase text-glow-primary">
            JOIN THE<br />ELITE
          </h1>
          <p className="font-body-lg text-on-surface/80 mt-6 max-w-2xl mx-auto">
            Choose the plan that fits your goals. All memberships include access to our
            world-class facilities and expert coaching.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 sm:px-6 py-20 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">MEMBERSHIP PLANS</span>
            <h2 className="font-headline-lg text-white mt-2">CHOOSE YOUR TIER</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl overflow-hidden relative ${
                  plan.popular ? 'scale-105 ring-2 ring-primary-container' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-container text-center py-2">
                    <span className="font-label-md text-white uppercase">Most Popular</span>
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-primary mb-4 flex justify-center">
                    {plan.icon}
                  </div>

                  <h3 className="font-headline-md text-white text-center mb-2">{plan.name}</h3>
                  <div className="text-center mb-4">
                    <span className="font-display-lg text-white">{plan.price}</span>
                    <span className="font-body-md text-on-surface/60">{plan.period}</span>
                  </div>
                  <p className="font-body-md text-on-surface/70 text-center mb-8">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check size={18} className="text-primary flex-shrink-0" />
                        ) : (
                          <X size={18} className="text-on-surface/30 flex-shrink-0" />
                        )}
                        <span className={`font-body-md ${
                          feature.included ? 'text-on-surface' : 'text-on-surface/40'
                        }`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full font-headline-md uppercase py-4 rounded transition-all ${
                      plan.popular
                        ? 'bg-primary-container text-white hover:scale-105 box-glow-primary'
                        : 'border border-white/30 text-white hover:border-primary hover:text-primary'
                    }`}
                  >
                    JOIN NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">WHY JOIN US</span>
            <h2 className="font-headline-lg text-white mt-2">MEMBER BENEFITS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 flex gap-4 hover:-translate-y-2 transition-all">
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-title-lg text-white mb-2">{benefit.title}</h3>
                  <p className="font-body-md text-on-surface/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 py-20 bg-surface-dim">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">FAQ</span>
            <h2 className="font-headline-lg text-white mt-2">COMMON QUESTIONS</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="font-title-lg text-white mb-3">{faq.question}</h3>
                <p className="font-body-md text-on-surface/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-20 bg-surface-container-highest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display-lg text-white mb-6">
            READY TO <span className="text-primary">TRANSFORM</span>?
          </h2>
          <p className="font-body-lg text-on-surface/80 mb-8 max-w-2xl mx-auto">
            Start your fitness journey today. Visit us for a free trial and let us show you
            what you're capable of achieving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-container text-white font-headline-md uppercase px-10 py-5 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary">
              START FREE TRIAL
            </button>
            <button className="border border-white/30 text-white font-headline-md uppercase px-10 py-5 rounded hover:border-primary hover:text-primary transition-all">
              SCHEDULE A TOUR
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Membership;