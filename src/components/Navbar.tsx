import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/classes', label: 'CLASSES' },
    { path: '/membership', label: 'MEMBERSHIP' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full bg-primary-container text-white py-2 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center z-[250] relative">
        <div className="flex items-center gap-2 font-label-md text-label-md">
          <span className="text-sm">🔥</span>
          <span>PUSH YOUR LIMITS. NO EXCUSES.</span>
        </div>
        <div className="flex items-center gap-4 font-label-md text-label-md mt-1 sm:mt-0">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <a href="tel:+919193961010" className="hover:text-primary transition-colors">+91 9193961010</a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-[300] transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(255,85,64,0.1)]'
          : 'bg-background/80 backdrop-blur-sm'
      }`} style={{ marginTop: '36px' }}>
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.svg"
              alt="City Fitness Studio Logo"
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-display-lg-mobile md:font-display-lg text-primary tracking-wider hidden sm:block">
              CITY FITNESS STUDIO
            </span>
            <span className="font-display-lg-mobile text-primary tracking-wider sm:hidden text-sm">
              CITY FITNESS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-headline-md text-headline-md uppercase transition-all duration-300 hover:scale-105 ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/membership"
            className="hidden md:block bg-primary-container text-white font-headline-md text-headline-md uppercase px-6 py-2 rounded hover:scale-105 active:scale-95 transition-all duration-200 box-glow-primary"
          >
            JOIN ELITE
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-container-lowest border-t border-white/10">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-headline-md text-headline-md uppercase py-2 ${
                    isActive(link.path)
                      ? 'text-primary border-b border-primary'
                      : 'text-on-surface hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary-container text-white font-headline-md text-headline-md uppercase px-6 py-3 rounded text-center box-glow-primary"
              >
                JOIN ELITE
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;