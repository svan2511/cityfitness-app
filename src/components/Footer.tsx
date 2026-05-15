import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/10 mt-auto">
      {/* Newsletter Section */}
      <div className="bg-surface-container py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display-lg text-display-lg-mobile md:font-headline-lg text-white mb-2">
              JOIN THE ELITE
            </h3>
            <p className="font-body-md text-on-surface/70">
              Subscribe for exclusive offers and fitness tips
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white font-body-md focus:outline-none focus:border-primary-container"
            />
            <button className="bg-primary-container text-white font-label-md px-6 py-3 rounded hover:scale-105 transition-transform box-glow-primary">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="City Fitness Studio"
                className="h-12 w-12 object-contain"
              />
              <span className="font-display-md text-2xl text-primary tracking-wider">
                CITY FITNESS STUDIO
              </span>
            </div>
            <p className="font-body-md text-on-surface/60 max-w-xs">
              Transform your body, elevate your life. Join the elite fitness community that pushes boundaries.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://maps.app.goo.gl/RNK8TKqm7hcLGjj89" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors font-label-md">Google Maps</a>
              <a href="#" className="text-primary hover:text-white transition-colors font-label-md">Instagram</a>
              <a href="#" className="text-primary hover:text-white transition-colors font-label-md">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title-lg text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-body-md text-on-surface/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-body-md text-on-surface/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="font-body-md text-on-surface/60 hover:text-primary transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/membership" className="font-body-md text-on-surface/60 hover:text-primary transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-body-md text-on-surface/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-title-lg text-white mb-4">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="font-body-md text-on-surface/60">
                  Church Back Side, Near Noor Saloon<br />
                  Mission Compound, Saharanpur, UP 247001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+919193961010" className="font-body-md text-on-surface/60 hover:text-primary transition-colors">
                  +91 9193961010
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@cityfitness.com" className="font-body-md text-on-surface/60 hover:text-primary transition-colors">
                  info@cityfitness.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-title-lg text-white mb-4">WORKING HOURS</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <span className="font-body-md text-on-surface/60">Mon - Fri: 5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <span className="font-body-md text-on-surface/60">Sat - Sun: 6:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-label-md text-on-surface/40">
            © 2024 City Fitness Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;