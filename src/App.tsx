/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scale, 
  Car, 
  Gavel, 
  ShieldCheck, 
  Star, 
  Menu, 
  X,
  ChevronRight,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Τροχαία Ατυχήματα",
    description: "Εξειδικευμένη υποστήριξη για την πλήρη αποζημίωση και την προστασία των δικαιωμάτων σας μετά από οδικό συμβάν.",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Αστικό Δίκαιο",
    description: "Διαχείριση υποθέσεων ακινήτων, συμβάσεων, κληρονομικών και ενοχικών διαφορών με στρατηγική ακρίβεια.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Ποινικό Δίκαιο",
    description: "Δυναμική υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας με έμφαση στη διασφάλιση των εγγυήσεων του νόμου.",
  },
  {
    icon: <Gavel className="w-8 h-8" />,
    title: "Οικογενειακό Δίκαιο",
    description: "Ευαίσθητος χειρισμός υποθέσεων διαζυγίου, επιμέλειας και διατροφής με ανθρωποκεντρική προσέγγιση.",
  }
];

const REVIEWS = [
  {
    author: "Νίκος Π.",
    text: "Εξαιρετικός επαγγελματίας. Ανέλαβε την υπόθεση του τροχαίου μου και το αποτέλεσμα ήταν πέρα από κάθε προσδοκία. Συνιστάται ανεπιφύλακτα.",
    stars: 5
  },
  {
    author: "Μαρία Κ.",
    text: "Άμεση ανταπόκριση και βαθιά γνώση του αντικειμένου. Με βοήθησε να λύσω ένα δυσεπίλυτο αστικό ζήτημα με απόλυτη σαφήνεια.",
    stars: 5
  },
  {
    author: "Γιάννης Μ.",
    text: "Ανθρώπινη προσέγγιση και αληθινό ενδιαφέρον. Σπάνιο να βρίσκεις δικηγόρο που να είναι τόσο δίπλα σου σε κάθε βήμα.",
    stars: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "2815107639"; // Updated to real number

  return (
    <div className="min-h-screen font-sans selection:bg-legal-gold/30">
      {/* 24/7 Floating Phone Button for Mobile */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden bg-legal-gold text-white p-4 rounded-full shadow-lg ring-4 ring-white"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-legal-gold/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl tracking-tight leading-none ${isScrolled ? 'text-legal-dark' : 'text-legal-dark md:text-legal-dark'}`}>
              ΛΙΟΝΑΚΗΣ ΓΕΩΡΓΙΟΣ 
            </span>
            <span className={`font-sans text-[10px] uppercase tracking-[0.2em] font-medium mt-1 ${isScrolled ? 'text-legal-gold' : 'text-legal-gold'}`}>
              & ΣΥΝΕΡΓΑΤΕΣ • ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Αρχική', 'Υπηρεσίες', 'Το Γραφείο', 'Επικοινωνία'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-sm font-medium text-legal-dark hover:text-legal-gold transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-legal-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-legal-gray transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Κλήση 24/7
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-legal-dark p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif font-bold text-xl">ΛΙΟΝΑΚΗΣ</span>
                <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
              </div>
              <div className="flex flex-col space-y-8 text-2xl font-serif">
                {['Αρχική', 'Υπηρεσίες', 'Το Γραφείο', 'Επικοινωνία'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item}`} 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="mt-auto space-y-6 pt-12 border-t border-gray-100">
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-4 text-legal-gold text-lg font-medium">
                  <Phone className="w-6 h-6" />
                  Άμεση Επικοινωνία
                </a>
                <div className="flex items-center gap-4 text-legal-gray">
                  <MapPin className="w-6 h-6" />
                  Ρούσου Χούρδου 7, Ηράκλειο
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="αρχική" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-legal-gold/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-legal-gold/10 text-legal-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            Έδρα: Ηράκλειο Κρήτης
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-legal-dark mb-8 max-w-4xl"
          >
            Αφοσίωση στη Δικαιοσύνη, <span className="text-legal-gold italic">Αποτέλεσμα</span> στην Πράξη.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-legal-gray max-w-2xl mb-12 leading-relaxed"
          >
            Με ανθρωποκεντρική προσέγγιση και εξειδικευμένη εμπειρία στα τροχαία ατυχήματα και το αστικό δίκαιο, διασφαλίζουμε τα συμφέροντά σας με συνέπεια και σαφήνεια.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => document.getElementById('υπηρεσίες')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-legal-gold text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all shadow-xl shadow-legal-gold/20 flex items-center justify-center gap-2"
            >
              Υπηρεσίες <ChevronRight className="w-4 h-4" />
            </button>
            <a href={`tel:${phoneNumber}`} className="bg-legal-dark text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-legal-gray transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              24/7 Επικοινωνία
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="flex flex-col items-center">
              <div className="flex text-legal-gold mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-serif text-3xl font-bold">5.0 / 5</span>
              <span className="text-xs text-legal-gray uppercase tracking-widest mt-1">Αξιολόγηση Google</span>
            </div>
            <div className="flex flex-col items-center border-l border-gray-100">
              <span className="font-serif text-3xl font-bold">149+</span>
              <span className="text-xs text-legal-gray uppercase tracking-widest mt-1">Θετικές Κριτικές</span>
            </div>
            <div className="flex flex-col items-center border-l-0 md:border-l border-gray-100 col-span-1">
              <span className="font-serif text-3xl font-bold">24h</span>
              <span className="text-xs text-legal-gray uppercase tracking-widest mt-1">Διαθεσιμότητα</span>
            </div>
            <div className="flex flex-col items-center border-l border-gray-100">
              <Award className="w-8 h-8 text-legal-gold mb-1" />
              <span className="text-xs text-legal-gray uppercase tracking-widest font-semibold">Πολυετής Εμπειρία</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="υπηρεσίες" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-legal-dark mb-6 tracking-tight">
                Τομείς Εξειδίκευσης
              </h2>
              <p className="text-legal-gray text-lg leading-relaxed">
                Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες με έμφαση στη στρατηγική επίλυση διαφορών και την προστασία του πελάτη.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2 text-legal-gold font-medium uppercase text-xs tracking-[0.2em]">
                <div className="w-12 h-[1px] bg-legal-gold/30"></div>
                Υπηρεσίες Γραφείου
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-legal-gold/20 hover:shadow-2xl hover:shadow-legal-gold/5 transition-all group"
              >
                <div className="text-legal-gold mb-6 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                <h3 className="font-serif text-2xl text-legal-dark mb-4 group-hover:text-legal-gold transition-colors">{service.title}</h3>
                <p className="text-legal-gray text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Architectural Imagery Section */}
      <section id="το-γραφείο" className="bg-legal-dark py-24 md:py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/legal-statue/1920/1080?grayscale" 
            alt="Justice statue background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Γιατί να επιλέξετε <span className="text-legal-gold">Λιονακης & Συνεργάτες</span>
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-legal-gold backdrop-blur-sm">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Προσωπική Ενασχόληση</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">Κάθε υπόθεση αντιμετωπίζεται μοναδικά, με άμεση επαφή και συνεχή ενημέρωση του εντολέα μας.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-legal-gold backdrop-blur-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">24ωρη Διαθεσιμότητα</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">Κατανοούμε την κρισιμότητα των νομικών ζητημάτων, γι' αυτό είμαστε δίπλα σας 24/7 για επείγοντα περιστατικά.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-legal-gold backdrop-blur-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Αποτελεσματικότητα</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">Συνδυάζουμε τη βαθιά γνώση του νόμου με τη στρατηγική σκέψη για την επίτευξη του βέλτιστου αποτελέσματος.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group lg:pl-10">
            <div className="aspect-[4/5] bg-legal-gray/20 rounded-2xl overflow-hidden border border-white/10 shadow-3xl">
              <img 
                src="https://picsum.photos/seed/legal-scale/800/1000" 
                alt="Modern Legal Aesthetics" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-legal-gold p-8 rounded-xl shadow-2xl max-w-xs backdrop-blur-sm">
              <p className="text-white font-serif text-lg leading-snug italic">
                "Η εμπιστοσύνη δεν κερδίζεται με λόγια, αλλά με την έκβαση των υποθέσεών μας."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Segment */}
      <section className="py-24 bg-legal-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex justify-center text-legal-gold mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <h2 className="font-serif text-4xl text-legal-dark mb-4 tracking-tight">Τι λένε οι πελάτες μας</h2>
            <p className="text-legal-gray max-w-xl mx-auto">Η φήμη μας βασίζεται στην ικανοποίηση των ανθρώπων που μας εμπιστεύτηκαν τις υποθέσεις τους.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm relative italic leading-relaxed text-legal-gray italic">
                <div className="absolute -top-4 -left-2 text-6xl text-legal-gold opacity-20 font-serif">“</div>
                <p className="mb-6 relative z-10">"{rev.text}"</p>
                <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 bg-legal-gold/10 rounded-full flex items-center justify-center font-bold text-legal-gold">
                    {rev.author[0]}
                  </div>
                  <div className="text-sm font-bold text-legal-dark not-italic">{rev.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="επικοινωνία" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-12 bg-legal-dark text-white flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl mb-8">Στοιχεία Επικοινωνίας</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-legal-gold shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-300 mb-1">Διεύθυνση</h5>
                      <p className="text-white">Ρούσου Χούρδου 7, Τ.Κ. 71201<br/>Ηράκλειο, Κρήτη</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-legal-gold shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-300 mb-1">Τηλέφωνο (24/7)</h5>
                      <p className="text-white">2815 107639</p>
                      <p className="text-gray-400 text-xs mt-1 italic">Εξυπηρέτηση και το Σαββατοκύριακο</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-legal-gold shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-300 mb-1">Ωράριο Γραφείου</h5>
                      <p className="text-white">Δευτέρα - Παρασκευή: 09:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 h-[400px] lg:h-auto bg-gray-100">
              {/* Replace with actual Google Maps Embed if needed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.505708!2d25.133276!3d35.33924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIwJzIxLjMiTiAyNcKwMDcnNTkuOCJF!5e0!3m2!1sel!2sgr!4v1618831000000" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="font-serif font-bold text-lg">ΛΙΟΝΑΚΗΣ & ΣΥΝΕΡΓΑΤΕΣ</div>
            <div className="text-sm text-legal-gray flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span>© {new Date().getFullYear()} Lionakis Law Firm</span>
              <a href="#" className="hover:text-legal-gold">Πολιτική Απορρήτου</a>
              <a href="#" className="hover:text-legal-gold">Όροι Χρήσης</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
