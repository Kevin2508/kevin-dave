import {
  Mail, Github, Linkedin, Home as HomeIcon, User,
  FolderGit2, Phone, ArrowRight, Menu, X, ExternalLink,
  MapPin, Calendar, Award, Code2, Smartphone, Globe,
  ChevronDown, Sparkles, Download, Send, Briefcase, Trophy,
  Shield, Zap
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// ─── Data ───────────────────────────────────────────────────────
const NAV_ITEMS = [
  { name: 'home', icon: HomeIcon, label: 'Home' },
  { name: 'about', icon: User, label: 'About' },
  { name: 'experience', icon: Briefcase, label: 'Experience' },
  { name: 'projects', icon: FolderGit2, label: 'Projects' },
  { name: 'contact', icon: Phone, label: 'Contact' },
];

const SKILLS: Record<string, string[]> = {
  'Languages': ['C', 'C++', 'Python', 'Core Java', 'JavaScript', 'Dart', 'HTML', 'CSS'],
  'Frameworks': ['Flutter', 'Next.js'],
  'Backend Services': ['Firebase', 'Supabase', 'MongoDB', 'PostgreSQL', 'Prisma ORM'],
  'Core Concepts': ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'SQL'],
  'Tools & Design': ['Git', 'GitHub', 'Figma', 'Adobe Creative Suite'],
};

const PROJECTS = [
  {
    title: 'Real-Time Disaster Management System',
    subtitle: 'Hackathon Winner — InnovAItion by DA-IICT',
    desc: 'Built a real-time disaster response platform with offline Wi-Fi SOS communication to enable victim–rescuer connectivity without cellular networks. Applied AI-based analysis on drone and satellite data to detect high-risk zones and prioritize rescue operations. Integrated IoT sensors (ESP32, MQ-135) for early detection of forest fires and gas leakage.',
    tech: ['Flutter', 'MERN Stack', 'DeepLabV3+', 'ResNet-101', 'Redis', 'Docker', 'Kubernetes'],
    link: 'https://github.com/Kevin2508',
    color: 'from-rose-500/20 to-orange-500/20',
    accent: 'text-rose-400',
    icon: Shield,
  },
  {
    title: 'OneFlow',
    subtitle: 'Odoo X Amalthea IIT Gandhinagar Hackathon',
    desc: 'Built a full-stack project management platform enabling task tracking, team collaboration, timesheets, and analytics dashboards. Implemented role-based access, task workflows, priority/status management, and real-time data handling. Designed scalable backend APIs and optimized database schema for multi-project resource planning.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'REST APIs'],
    link: 'https://github.com/Kevin2508',
    color: 'from-violet-500/20 to-purple-500/20',
    accent: 'text-violet-400',
    icon: Zap,
  },
  {
    title: 'Quick Court',
    subtitle: 'Finalist — Odoo Hackathon 2025',
    desc: 'Developed a full-stack web platform for booking sports courts (badminton, cricket, pickleball) with date and time scheduling. Implemented user authentication, court availability management, and booking workflows. Built a companion Flutter mobile app providing seamless booking experience with consistent UI and backend integration.',
    tech: ['Next.js', 'Flutter', 'PostgreSQL', 'Prisma ORM', 'REST APIs'],
    link: 'https://github.com/Kevin2508',
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
    icon: Globe,
  },
];

const SOCIALS = [
  { icon: Mail, href: 'mailto:kevindave1408@gmail.com', label: 'Email', user: 'kevindave1408@gmail.com' },
  { icon: Github, href: 'https://github.com/Kevin2508', label: 'GitHub', user: 'Kevin2508' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kevin-dave-18674a312', label: 'LinkedIn', user: 'kevin-dave' },
  { icon: Phone, href: 'tel:+919624713824', label: 'Phone', user: '+91-9624713824' },
];

// ─── Animation Variants ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Particle Background Component ──────────────────────────────
function ParticleField() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Main gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/[0.07] blur-[120px] animate-float-slow" />
      <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/[0.05] blur-[100px] animate-float-slow" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${5 + (i * 4.7) % 90}%`,
            top: `${3 + (i * 5.3) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: (i % 4) * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ─── Section Header Component ────────────────────────────────────
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
        <Sparkles size={14} />
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>
    </motion.div>
  );
}

// ─── Skill Badge Component ───────────────────────────────────────
function SkillBadge({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      variants={scaleIn}
      custom={index}
      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:bg-violet-500/10 hover:border-violet-500/20 hover:text-violet-300 transition-all duration-300 cursor-default"
    >
      {name}
    </motion.span>
  );
}

// ─── Main Component ──────────────────────────────────────────────
export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const navBgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#06060e] text-white overflow-x-hidden noise">
      <ParticleField />

      {/* ── Navigation ─────────────────────────────────────── */}
      <motion.nav
        className="fixed top-0 w-full z-50"
      >
        <motion.div
          className="absolute inset-0 bg-[#06060e]/80 backdrop-blur-xl border-b border-white/[0.05]"
          style={{ opacity: navBgOpacity }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                KD
              </div>
              <span className="text-lg sm:text-xl font-bold text-white hidden sm:block">
                Kevin<span className="text-violet-400">.</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(({ name, label }) => (
                <a
                  key={name}
                  href={`#${name}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === name
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeSection === name && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/[0.08]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              ))}
            </div>

            {/* Resume Button + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Kevin_Dave_Resume.pdf"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
              >
                <Download size={14} />
                Resume
              </motion.a>
              <button
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[#06060e]/95 backdrop-blur-xl border-b border-white/[0.05]"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_ITEMS.map(({ name, icon: Icon, label }) => (
                  <a
                    key={name}
                    href={`#${name}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      activeSection === name
                        ? 'text-white bg-white/[0.06]'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </a>
                ))}
                <a
                  href="/Kevin_Dave_Resume.pdf"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-violet-400 hover:bg-violet-500/10 transition-all sm:hidden"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Hero Section ───────────────────────────────────── */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        {/* Hero glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-300">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Kevin Dave
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Mobile &amp; Web Developer specializing in{' '}
            <span className="text-violet-400 font-medium">Flutter</span>,{' '}
            <span className="text-blue-400 font-medium">Full Stack Web Development</span>, and{' '}
            <span className="text-cyan-400 font-medium">RESTful APIs</span>.
            Experienced in building scalable, cloud-backed applications using Next.js, Node.js, Firebase, Supabase, and SQL/NoSQL databases.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              <Send size={18} />
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08] transition-all"
            >
              <Code2 size={18} />
              View Projects
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {SOCIALS.map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={24} className="text-slate-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── About Section ──────────────────────────────────── */}
      <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="About Me" title="Know Me Better" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Photo + Info Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col items-center"
            >
              {/* Photo */}
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 z-10" />
                  <img
                    src="/kevin-photo.jpg"
                    alt="Kevin Dave"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 opacity-60 animate-pulse" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-60 animate-pulse" />
              </div>

              {/* Quick info cards */}
              <div className="w-full max-w-[280px] space-y-3">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <MapPin size={16} className="text-violet-400 shrink-0" />
                  <span className="text-sm text-slate-300">Ahmedabad, Gujarat, India</span>
                </div>
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <Calendar size={16} className="text-blue-400 shrink-0" />
                  <span className="text-sm text-slate-300">B.Tech CE — CGPA 8.82</span>
                </div>
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <Briefcase size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-300">SDE Intern @ eSparkBiz</span>
                </div>
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <Award size={16} className="text-cyan-400 shrink-0" />
                  <span className="text-sm text-slate-300">Hackathon Winner</span>
                </div>
              </div>
            </motion.div>

            {/* Bio + Skills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {/* Bio */}
              <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  My Story
                </h3>
                <div className="space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    I&apos;m Kevin Dave — a Software Developer specializing in Flutter, Full Stack Web Development, and RESTful APIs. Currently pursuing my B.Tech in Computer Engineering at <span className="text-violet-400">G.H. Patel College of Engineering &amp; Technology</span> (2022–2026) with a CGPA of 8.82.
                  </p>
                  <p>
                    I&apos;m currently working as a Software Developer Intern at <span className="text-emerald-400">eSparkBiz Technologies Pvt Ltd</span>, contributing to real-world web and mobile application development by implementing scalable features and optimizing application performance.
                  </p>
                  <p>
                    I have strong foundations in Data Structures &amp; Algorithms, OOP, DBMS, and Operating Systems, with proven experience in hackathon-driven development — including a <span className="text-rose-400">winning project at InnovAItion by DA-IICT</span>. As an Executive Member of <span className="text-blue-400">CSI-GCET</span>, I&apos;ve boosted workshop participation by 40% and managed technical events with 500+ attendees.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Technical Skills
                </h3>
                <div className="space-y-5">
                  {Object.entries(SKILLS).map(([category, skills]) => (
                    <motion.div
                      key={category}
                      variants={stagger}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                          <SkillBadge key={skill} name={skill} index={idx} />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Experience Section ──────────────────────────── */}
      <section id="experience" className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Experience" title="Where I&apos;ve Worked" />

          <div className="max-w-3xl mx-auto space-y-6">
            {/* eSparkBiz */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 sm:p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Software Developer Intern</h3>
                    <p className="text-emerald-400 font-medium text-sm sm:text-base">eSparkBiz Technologies Pvt Ltd</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                    Jan 2026 – Present
                  </span>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Contributing to real-world web and mobile application development by implementing scalable features and optimizing application performance.
                </p>
              </div>
            </motion.div>

            {/* GPHOOD */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 sm:p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Flutter Developer Intern</h3>
                    <p className="text-violet-400 font-medium text-sm sm:text-base">GPHOOD TECH NIGAM PVT LTD</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 w-fit">
                    May 2025 – June 2025
                  </span>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Engineered cross-platform Flutter features using Firebase Authentication and Firestore, improving performance and UI responsiveness. Collaborated with the team to design responsive UIs and enhance app performance.
                </p>
              </div>
            </motion.div>

            {/* CSI-GCET */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 sm:p-8 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Executive Member</h3>
                    <p className="text-blue-400 font-medium text-sm sm:text-base">CSI-GCET</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                    Feb 2025 – Present
                  </span>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Boosted workshop participation by 40% and managed technical events with 500+ attendees through strategic marketing and event coordination.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Projects Section ───────────────────────────────── */}
      <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Projects" title="Featured Work" />

          <div className="space-y-6 sm:space-y-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={idx}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-strong rounded-2xl overflow-hidden group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Project Icon */}
                      <div className="shrink-0">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                          <project.icon size={24} className={project.accent} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] ${project.accent} w-fit`}>
                            {project.subtitle}
                          </span>
                        </div>
                        <p className="text-slate-400 mb-5 text-sm sm:text-base leading-relaxed">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-sm font-medium ${project.accent} hover:underline group/link`}
                        >
                          <Github size={16} />
                          View Source Code
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ────────────────────────────────── */}
      <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader label="Contact" title="Let's Work Together" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-6 sm:p-10 text-center"
          >
            <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              I&apos;m always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out!
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {SOCIALS.map((social, idx) => (
                <motion.a
                  key={idx}
                  variants={scaleIn}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-5 flex flex-col items-center gap-3 group hover:bg-violet-500/5 hover:border-violet-500/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-violet-500/10 transition-colors">
                    <social.icon size={22} className="text-slate-400 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{social.label}</p>
                    <p className="text-sm text-slate-300 font-medium">{social.user}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kevindave1408@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              <Mail size={18} />
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="relative border-t border-white/[0.05] py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
              KD
            </div>
            <span className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Kevin Dave. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
