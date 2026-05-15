import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dumbbell, Timer, Users, TrendingUp, ArrowRight, Play, Quote, Award, X } from 'lucide-react';

const Home = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const features = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'ELITE EQUIPMENT',
      description: 'State-of-the-art gym machinery from top brands for optimal performance.',
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: '24/7 ACCESS',
      description: 'Train anytime with round-the-clock facility access for members.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'EXPERT TRAINERS',
      description: 'Certified professionals to guide you through every step of your fitness journey.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'PERSONALIZED PLANS',
      description: 'Customized workout programs tailored to your specific goals.',
    },
  ];

  const programs = [
    {
      title: 'STRENGTH TRAINING',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      description: 'Build muscle and increase power with our comprehensive strength programs.',
    },
    {
      title: 'CARDIO ZONE',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      description: 'Elevate your heart rate with cutting-edge cardio equipment.',
    },
    {
      title: 'HIIT WORKOUTS',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      description: 'High-intensity interval training for maximum calorie burn.',
    },
  ];

  const testimonials = [
    {
      name: 'RAHUL SHARMA',
      role: 'Member since 2022',
      text: 'City Fitness transformed my life. The trainers are incredible and the atmosphere is unmatched.',
    },
    {
      name: 'PRIYA GUPTA',
      role: 'Member since 2021',
      text: 'Best gym in Noida! The equipment is top-notch and the community is so supportive.',
    },
    {
      name: 'ANKIT VERMA',
      role: 'Member since 2023',
      text: 'Finally found a gym that delivers results. My fitness journey here has been amazing.',
    },
  ];

  const videos = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      title: 'INTENSE HIIT SESSION',
      duration: '15:30',
      videoId: 'ml6cT4AZdqI',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      title: 'STRENGTH TRAINING GUIDE',
      duration: '22:45',
      videoId: 'K4TOrB7at0Y',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      title: 'MORNING CARDIO BLAST',
      duration: '18:20',
      videoId: 'y1005lbNt5Q',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop',
      title: 'YOGA & STRETCHING',
      duration: '30:00',
      videoId: 'vShVphqTVyk',
    },
  ];

  const transformations = [
    {
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop&grayscale',
      after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
      name: 'VIKAS SINGH',
      result: '-15kg in 3 months',
      story: 'Lost significant weight and gained confidence through our personalized training program.',
    },
    {
      before: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=400&fit=crop&grayscale',
      after: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=400&fit=crop',
      name: 'RAJ KUMAR',
      result: '+8kg muscle mass',
      story: 'Transformed his physique with dedicated strength training and nutrition guidance.',
    },
    {
      before: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop&grayscale',
      after: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop',
      name: 'AMIT PATEL',
      result: 'Complete transformation',
      story: 'From beginner to competitor - his journey inspires us every day.',
    },
  ];

  const trainers = [
    {
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop',
      name: 'SUMIT KUMAR',
      specialty: 'Strength & Conditioning',
      experience: '8+ Years',
      achievement: 'Certified NSCA Trainer',
    },
    {
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop',
      name: 'PRIYA SHARMA',
      specialty: 'HIIT & Cardio Expert',
      experience: '6+ Years',
      achievement: 'CrossFit Level 2',
    },
    {
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop',
      name: 'ROHIT VERMA',
      specialty: 'Yoga & Flexibility',
      experience: '10+ Years',
      achievement: 'RYT-500 Certified',
    },
  ];

  const faqs = [
    {
      question: 'What are your gym operating hours?',
      answer: 'We are open 24/7 for all members. Our staff is available from 6:00 AM to 10:00 PM daily.',
    },
    {
      question: 'Do you offer free trial sessions?',
      answer: 'Yes! We offer a complimentary first session with one of our expert trainers.',
    },
    {
      question: 'What membership plans do you offer?',
      answer: 'We have three plans: Starter (₹2,499), Elite (₹4,999), and Pro (₹7,999) with varying benefits.',
    },
    {
      question: 'Can I get a personal trainer?',
      answer: 'Absolutely! All our Elite and Pro members get access to certified personal trainers.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Fitness Hero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 space-y-8 pt-20">
          <div className="inline-flex items-center gap-2 bg-primary-container/20 px-4 py-2 rounded-full border border-primary-container/30">
            <span className="text-primary font-label-md">🔥</span>
            <span className="text-primary font-label-md">NO PAIN, NO GAIN</span>
          </div>

          <h1 className="font-display-lg text-white tracking-widest uppercase text-glow-primary">
            UNLEASH YOUR<br />POTENTIAL
          </h1>

          <p className="font-body-lg text-on-surface/80 max-w-2xl mx-auto">
            Join the elite fitness community that pushes boundaries and redefines limits.
            Your transformation starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/membership"
              className="bg-primary-container text-white font-headline-md uppercase px-8 py-4 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary"
            >
              START YOUR JOURNEY
            </Link>
            <Link
              to="/classes"
              className="flex items-center gap-2 text-white font-headline-md uppercase px-8 py-4 border border-white/30 rounded hover:border-primary hover:text-primary transition-all"
            >
              <Play size={20} /> WATCH CLASSES
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'MEMBERS' },
              { number: '50+', label: 'TRAINERS' },
              { number: '100+', label: 'EQUIPMENT' },
              { number: '5★', label: 'RATING' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display-lg text-primary text-glow-primary">{stat.number}</div>
                <div className="font-label-md text-on-surface/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface-container-lowest" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">WHY CHOOSE US</span>
            <h2 className="font-headline-lg text-white mt-2">ELITE FACILITIES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center group hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-headline-md text-white mb-3">{feature.title}</h3>
                <p className="font-body-md text-on-surface/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-surface-dim" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=700&fit=crop"
              alt="About Us"
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-container p-8 rounded-lg box-glow-primary">
              <div className="font-display-lg text-white">5+</div>
              <div className="font-label-md text-white/80">Years Experience</div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-label-md text-primary">ABOUT US</span>
            <h2 className="font-headline-lg text-white">
              TRANSFORM YOUR BODY,<br />ELEVATE YOUR LIFE
            </h2>
            <p className="font-body-lg text-on-surface/70">
              At City Fitness Studio, we believe that fitness is more than just a hobby—it's a
              lifestyle. Our state-of-the-art facility, expert trainers, and diverse range of
              programs are designed to help you achieve your fitness goals.
            </p>
            <p className="font-body-md text-on-surface/60">
              Whether you're a beginner or an advanced athlete, we have everything you need to
              push your limits and become the best version of yourself.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { icon: '🏋️', value: '100+', label: 'Equipment' },
                { icon: '👨‍🏫', value: '50+', label: 'Expert Trainers' },
                { icon: '📅', value: '30+', label: 'Weekly Classes' },
                { icon: '⭐', value: '4.9', label: 'Rating' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-headline-md text-white">{item.value}</div>
                    <div className="font-label-md text-on-surface/60">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-headline-md uppercase hover:gap-4 transition-all"
            >
              LEARN MORE <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-surface-container-highest relative overflow-hidden" id="programs">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">OUR PROGRAMS</span>
            <h2 className="font-headline-lg text-white mt-2">FIND YOUR FIT</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-headline-md text-white mb-2">{program.title}</h3>
                  <p className="font-body-md text-on-surface/70">{program.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary-container px-3 py-1 rounded">
                  <span className="font-label-md text-white">VIEW</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 text-white font-headline-md uppercase border border-white/30 px-8 py-4 rounded hover:border-primary hover:text-primary transition-all"
            >
              VIEW ALL CLASSES <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">TESTIMONIALS</span>
            <h2 className="font-headline-lg text-white mt-2">WHAT OUR MEMBERS SAY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 relative">
                <div className="text-primary text-4xl font-display-lg absolute top-4 left-4 opacity-30">
                  "
                </div>
                <p className="font-body-lg text-on-surface/80 relative z-10 mb-6">
                  {testimonial.text}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-headline-md text-white">{testimonial.name}</div>
                  <div className="font-label-md text-on-surface/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534258936925-c48947b6bfd4?w=1920&h=600&fit=crop"
            alt="CTA Background"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="font-label-md text-primary">READY TO START?</span>
          <h2 className="font-headline-lg text-white mt-2 mb-6">
            JOIN THE ELITE TODAY
          </h2>
          <p className="font-body-lg text-on-surface/70 mb-8 max-w-2xl mx-auto">
            Take the first step towards a fitter, stronger you. Sign up now and get
            your first month at an exclusive rate.
          </p>
          <Link
            to="/membership"
            className="bg-primary-container text-white font-headline-md uppercase px-10 py-5 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary"
          >
            GET STARTED NOW
          </Link>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-20 bg-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">TRAINING ZONE</span>
            <h2 className="font-headline-lg text-white mt-2">WORKOUT HIGHLIGHTS</h2>
            <p className="font-body-md text-on-surface/60 mt-4 max-w-2xl mx-auto">
              Watch our expert trainers in action and get motivated by intense workout sessions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setPlayingVideo(index)}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center group-hover:scale-110 transition-transform box-glow-primary">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-headline-md text-white text-sm">{video.title}</h3>
                  <span className="font-label-md text-on-surface/60">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Video Modal */}
          {playingVideo !== null && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90"
              onClick={(e) => {
                if (e.target === e.currentTarget) setPlayingVideo(null)
              }}
            >
              <div className="relative w-full max-w-4xl">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[playingVideo].videoId}?autoplay=1`}
                  title={videos[playingVideo].title}
                  className="w-full aspect-video rounded-lg shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-white font-headline-md">
                    {videos[playingVideo].title}
                  </h3>
                  <button
                    onClick={() => setPlayingVideo(null)}
                    className="flex items-center gap-2 bg-primary-container px-6 py-3 rounded text-white font-label-md hover:bg-red-600 transition-colors"
                  >
                    <X size={20} /> CLOSE VIDEO
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 text-primary font-headline-md uppercase hover:gap-4 transition-all"
            >
              VIEW ALL VIDEOS <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Stories Section */}
      <section className="py-20 bg-surface-dim relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-container rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">SUCCESS STORIES</span>
            <h2 className="font-headline-lg text-white mt-2">TRANSFORMATION JOURNEYS</h2>
            <p className="font-body-md text-on-surface/60 mt-4 max-w-2xl mx-auto">
              Real results from real members who changed their lives with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 relative overflow-hidden rounded">
                    <span className="absolute top-2 left-2 font-label-md text-on-surface/60 bg-black/50 px-2 py-1 rounded">BEFORE</span>
                    <img src={item.before} alt="Before" className="w-full h-40 object-cover" />
                  </div>
                  <div className="flex-1 relative overflow-hidden rounded">
                    <span className="absolute top-2 left-2 font-label-md text-primary bg-primary-container/80 px-2 py-1 rounded">AFTER</span>
                    <img src={item.after} alt="After" className="w-full h-40 object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-headline-md text-white">{item.name}</h3>
                  <p className="font-label-md text-primary mt-1">{item.result}</p>
                  <p className="font-body-md text-on-surface/60 mt-3">{item.story}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white font-headline-md uppercase border border-white/30 px-8 py-4 rounded hover:border-primary hover:text-primary transition-all"
            >
              READ MORE STORIES <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trainer Spotlight Section */}
      <section className="py-20 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">MEET THE EXPERTS</span>
            <h2 className="font-headline-lg text-white mt-2">TRAINER SPOTLIGHT</h2>
            <p className="font-body-md text-on-surface/60 mt-4 max-w-2xl mx-auto">
              Our certified trainers are here to guide you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-headline-md text-white">{trainer.name}</h3>
                  <p className="font-body-md text-primary mt-1">{trainer.specialty}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 font-label-md text-on-surface/60">
                      <Award size={14} /> {trainer.experience}
                    </span>
                    <span className="font-label-md text-on-surface/60">
                      {trainer.achievement}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-container px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-label-md text-white">BOOK SESSION</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-primary-container text-white font-headline-md uppercase px-10 py-4 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary"
            >
              MEET ALL TRAINERS
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-dim">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-label-md text-primary">QUESTIONS?</span>
            <h2 className="font-headline-lg text-white mt-2">FREQUENTLY ASKED</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-container/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-white mb-2">{faq.question}</h3>
                    <p className="font-body-md text-on-surface/60">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-headline-md uppercase hover:gap-4 transition-all"
            >
              ASK MORE QUESTIONS <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;