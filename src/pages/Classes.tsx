import { useState } from 'react';
import { Clock, Users, Flame } from 'lucide-react';

const Classes = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'ALL CLASSES' },
    { id: 'strength', label: 'STRENGTH' },
    { id: 'cardio', label: 'CARDIO' },
    { id: 'yoga', label: 'YOGA' },
    { id: 'hiit', label: 'HIIT' },
  ];

  const classes = [
    {
      id: 1,
      title: 'POWER LIFTING',
      category: 'strength',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      description: 'Build maximum strength with expert-guided barbell training.',
      duration: '60 min',
      level: 'Intermediate',
      intensity: 'High',
      instructor: 'Aryan Sharma',
      schedule: 'Mon, Wed, Fri',
    },
    {
      id: 2,
      title: 'HIIT INFERNO',
      category: 'hiit',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      description: 'High-intensity interval training for maximum calorie burn.',
      duration: '45 min',
      level: 'Advanced',
      intensity: 'Extreme',
      instructor: 'Rahul Verma',
      schedule: 'Daily',
    },
    {
      id: 3,
      title: 'YOGA FLOW',
      category: 'yoga',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      description: 'Find balance and flexibility through dynamic yoga sequences.',
      duration: '75 min',
      level: 'All Levels',
      intensity: 'Medium',
      instructor: 'Priya Singh',
      schedule: 'Morning & Evening',
    },
    {
      id: 4,
      title: 'SPIN CLASS',
      category: 'cardio',
      image: 'https://images.unsplash.com/photo-1534258936925-c48947b6bfd4?w=600&h=400&fit=crop',
      description: 'Indoor cycling session with energizing music and coaching.',
      duration: '45 min',
      level: 'All Levels',
      intensity: 'High',
      instructor: 'Rahul Verma',
      schedule: 'Daily',
    },
    {
      id: 5,
      title: 'FUNCTIONAL TRAINING',
      category: 'strength',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
      description: 'Full-body functional exercises for real-world strength.',
      duration: '60 min',
      level: 'Intermediate',
      intensity: 'High',
      instructor: 'Aryan Sharma',
      schedule: 'Tue, Thu, Sat',
    },
    {
      id: 6,
      title: 'CIRCUIT TRAINING',
      category: 'hiit',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      description: 'Rotating stations for total body conditioning.',
      duration: '50 min',
      level: 'All Levels',
      intensity: 'High',
      instructor: 'Rahul Verma',
      schedule: 'Mon-Sat',
    },
  ];

  const instructors = [
    {
      name: 'ARYAN SHARMA',
      role: 'Strength & Conditioning Coach',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
      specialties: ['Powerlifting', 'Bodybuilding', 'Sports Performance'],
    },
    {
      name: 'RAHUL VERMA',
      role: 'HIIT & Cardio Specialist',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      specialties: ['HIIT', 'Spin', 'CrossFit'],
    },
    {
      name: 'PRIYA SINGH',
      role: 'Yoga & Wellness Expert',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
      specialties: ['Vinyasa Yoga', 'Meditation', 'Pilates'],
    },
  ];

  const filteredClasses = activeFilter === 'all'
    ? classes
    : classes.filter(cls => cls.category === activeFilter);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Classes Hero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-display-lg text-white tracking-widest uppercase text-glow-primary">
            CLASSES &<br />PROGRAMS
          </h1>
          <p className="font-body-lg text-on-surface/80 mt-6 max-w-2xl mx-auto">
            Discover a diverse range of classes designed to challenge and inspire.
            From high-intensity workouts to mindful practices, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 py-8 sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-headline-md px-6 py-2 rounded transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary-container text-white box-glow-primary'
                  : 'border border-white/20 text-on-surface hover:border-primary hover:text-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Classes Grid */}
      <section className="px-4 sm:px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map(cls => (
            <div key={cls.id} className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary-container px-3 py-1 rounded">
                  <span className="font-label-md text-white uppercase">{cls.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-white mb-2">{cls.title}</h3>
                <p className="font-body-md text-on-surface/70 mb-4">{cls.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Clock size={16} className="mx-auto text-primary mb-1" />
                    <span className="font-label-md text-on-surface/60 text-xs">{cls.duration}</span>
                  </div>
                  <div className="text-center">
                    <Users size={16} className="mx-auto text-primary mb-1" />
                    <span className="font-label-md text-on-surface/60 text-xs">{cls.level}</span>
                  </div>
                  <div className="text-center">
                    <Flame size={16} className="mx-auto text-primary mb-1" />
                    <span className="font-label-md text-on-surface/60 text-xs">{cls.intensity}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="font-label-md text-on-surface/70">{cls.instructor}</span>
                  <span className="font-label-md text-primary">{cls.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors Section */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-white uppercase text-center mb-12 text-glow-primary">
            MEET THE INSTRUCTORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-title-lg text-white uppercase">{instructor.name}</h3>
                    <p className="font-body-md text-primary">{instructor.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-surface-container text-on-surface/70 rounded-full font-label-md text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-4 sm:px-6 py-16 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-white uppercase text-center mb-12 text-glow-primary">
            OWN YOUR SCHEDULE
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-left font-headline-md text-white">CLASS</th>
                  <th className="py-4 px-4 text-left font-headline-md text-white">MON</th>
                  <th className="py-4 px-4 text-left font-headline-md text-white">WED</th>
                  <th className="py-4 px-4 text-left font-headline-md text-white">FRI</th>
                  <th className="py-4 px-4 text-left font-headline-md text-white">TIME</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { class: 'Power Lifting', mon: '9:00 AM', wed: '9:00 AM', fri: '9:00 AM', time: '60 min' },
                  { class: 'HIIT Inferno', mon: '6:00 AM', wed: '6:00 PM', fri: '6:00 AM', time: '45 min' },
                  { class: 'Yoga Flow', mon: '7:00 AM', wed: '7:00 AM', fri: '7:00 AM', time: '75 min' },
                  { class: 'Spin Class', mon: '5:00 PM', wed: '5:00 PM', fri: '5:00 PM', time: '45 min' },
                  { class: 'Functional Training', mon: '7:00 PM', wed: '7:00 PM', fri: '7:00 PM', time: '60 min' },
                ].map((schedule, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-surface-container/50 transition-colors">
                    <td className="py-4 px-4 font-body-md text-white">{schedule.class}</td>
                    <td className="py-4 px-4 font-body-md text-on-surface/70">{schedule.mon}</td>
                    <td className="py-4 px-4 font-body-md text-on-surface/70">{schedule.wed}</td>
                    <td className="py-4 px-4 font-body-md text-on-surface/70">{schedule.fri}</td>
                    <td className="py-4 px-4 font-body-md text-primary">{schedule.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-white mb-6">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </h2>
          <p className="font-body-lg text-on-surface/70 mb-8">
            We offer personalized training programs tailored to your specific goals.
            Contact us to create your custom fitness plan.
          </p>
          <a
            href="/contact"
            className="bg-primary-container text-white font-headline-md uppercase px-8 py-4 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </main>
  );
};

export default Classes;