import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, PhoneIncoming } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'VISIT US',
      details: [
        'Church Back Side, Near Noor Saloon',
        'Mission Compound, Saharanpur, UP 247001',
      ],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'CALL US',
      details: [
        '+91 9193961010',
      ],
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'EMAIL US',
      details: [
        'info@cityfitness.com',
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'WORKING HOURS',
      details: [
        'Mon - Fri: 5:00 AM - 11:00 PM',
        'Sat - Sun: 6:00 AM - 10:00 PM',
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 py-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Contact Hero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-display-lg text-white tracking-widest uppercase text-glow-primary">
            GET IN<br />TOUCH
          </h1>
          <p className="font-body-lg text-on-surface/80 mt-6 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and let's start
            your fitness journey together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 sm:px-6 py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:-translate-y-2 transition-all">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="font-title-lg text-white mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-body-md text-on-surface/70">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="px-4 sm:px-6 py-20 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="font-headline-lg text-white mb-2">SEND US A <span className="text-primary">MESSAGE</span></h2>
              <p className="font-body-md text-on-surface/70 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-md text-on-surface/80 mb-2">NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-low border-b-2 border-white/20 text-white px-4 py-3 focus:outline-none focus:border-primary-container transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface/80 mb-2">EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-low border-b-2 border-white/20 text-white px-4 py-3 focus:outline-none focus:border-primary-container transition-colors"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-md text-on-surface/80 mb-2">PHONE</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border-b-2 border-white/20 text-white px-4 py-3 focus:outline-none focus:border-primary-container transition-colors"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface/80 mb-2">SUBJECT *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-low border-b-2 border-white/20 text-white px-4 py-3 focus:outline-none focus:border-primary-container transition-colors"
                    >
                      <option value="">Select Subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="classes">Classes Inquiry</option>
                      <option value="personal">Personal Training</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-on-surface/80 mb-2">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-surface-container-low border-b-2 border-white/20 text-white px-4 py-3 focus:outline-none focus:border-primary-container transition-colors resize-none"
                    placeholder="Your Message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-container text-white font-headline-md uppercase py-4 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary flex items-center justify-center gap-2"
                >
                  SEND MESSAGE <Send size={20} />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="glass-card p-8 h-full">
                <h2 className="font-headline-lg text-white mb-2">FIND <span className="text-primary">US</span></h2>
                <p className="font-body-md text-on-surface/70 mb-6">
                  Visit our state-of-the-art facility in Mission Compound, Saharanpur.
                </p>

                {/* Actual Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0123456789!2d77.123456!3d29.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA3JzE4LjQiTiA3N8KwMDcnMTIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="City Fitness Studio Location"
                />

                <div className="mt-4 text-center">
                  <a
                    href="https://maps.app.goo.gl/RNK8TKqm7hcLGjj89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-label-md hover:underline"
                  >
                    <MapPin size={16} /> Open in Google Maps
                  </a>
                </div>

                {/* Quick Contact Options */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button className="glass-card p-4 flex items-center gap-3 hover:border-primary transition-all group">
                    <MessageSquare className="text-primary" />
                    <span className="font-label-md text-white group-hover:text-primary">Live Chat</span>
                  </button>
                  <button className="glass-card p-4 flex items-center gap-3 hover:border-primary transition-all group">
                    <PhoneIncoming className="text-primary" />
                    <span className="font-label-md text-white group-hover:text-primary">Request Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="px-4 sm:px-6 py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-white mb-6">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </h2>
          <p className="font-body-lg text-on-surface/70 mb-8">
            Our team is here to help. Whether you have questions about membership,
            classes, or anything else, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919193961010"
              className="bg-primary-container text-white font-headline-md uppercase px-8 py-4 rounded hover:scale-105 active:scale-95 transition-all box-glow-primary flex items-center gap-2"
            >
              <Phone size={20} /> CALL NOW
            </a>
            <a
              href="https://maps.app.goo.gl/RNK8TKqm7hcLGjj89"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-headline-md uppercase px-8 py-4 rounded hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              <MapPin size={20} /> FIND ON MAP
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;