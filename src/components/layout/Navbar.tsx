import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { Button } from '../ui';
import faviconSvg from '../../assets/favicon.svg';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-inprime-black/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
          >
            <img 
              src={faviconSvg} 
              alt="INPRIME" 
              className="h-10 w-10"
            />
            <span className="text-white font-bold text-xl tracking-wider">INPRIME</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="
                  text-inprime-light-gray hover:text-inprime-white
                  font-medium
                  transition-colors duration-300
                  relative
                "
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
                <span className="
                  absolute bottom-0 left-0 w-0 h-0.5
                  bg-inprime-red
                  hover:w-full
                  transition-all duration-300
                " />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#pricing')}
            >
              Приєднатися
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-inprime-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-inprime-dark/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    block text-inprime-light-gray hover:text-inprime-white
                    font-medium py-2
                    transition-colors duration-300
                  "
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="md"
                className="w-full mt-4"
                onClick={() => scrollToSection('#pricing')}
              >
                Приєднатися
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
