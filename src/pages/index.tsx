
import { Mail, Github, Linkedin, Sun, Moon, Home as HomeIcon, User, FolderGit2, Phone, ArrowRight, Menu, X } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom cursor position (disabled on mobile)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorSize = useTransform(
    cursorXSpring,
    isClient ? [0, window.innerWidth] : [0, 0],
    [isHovering ? 40 : 20, isHovering ? 40 : 20]
  );

  // Cursor colors
  const cursorColor = darkMode ? 'bg-white' : 'bg-black';
  const cursorRingColor = darkMode ? 'border-white' : 'border-black';

  // Theme colors
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-slate-900 via-blue-950 to-gray-900"
    : "bg-gradient-to-br from-slate-50 via-blue-100 to-gray-50";
  const textColor = darkMode ? "text-slate-100" : "text-slate-900";
  const secondaryTextColor = darkMode ? "text-slate-300" : "text-slate-700";
  const cardBg = darkMode ? "bg-white/10" : "bg-white/90";
  const cardBorder = darkMode ? "border-white/20" : "border-slate-200";
  const skillBg = darkMode ? "bg-white/15" : "bg-slate-200";
  const skillText = darkMode ? "text-slate-200" : "text-slate-800";
  const hoverBg = darkMode ? "hover:bg-white/30" : "hover:bg-slate-400";
  const navBg = darkMode ? "bg-white/10" : "bg-white/90";
  const navBorder = darkMode ? "border-white/20" : "border-slate-200";
  const gradientColors = darkMode
    ? "from-cyan-300 via-blue-400 to-indigo-500"
    : "from-cyan-700 via-blue-800 to-indigo-900";
  const linkHover = darkMode ? "hover:text-cyan-300" : "hover:text-cyan-700";
  const iconColor = darkMode ? "text-slate-200" : "text-slate-800";

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
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsClient(true);

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));

    if (!isClient) return;

    // Disable cursor on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isClient]);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen font-urbanist transition-colors duration-500 ${bgGradient} ${textColor} ${isClient && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'cursor-none' : ''} overflow-x-hidden`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9,#3b82f6,#6366f1)] opacity-20 mix-blend-multiply"></div>
      </div>

      {/* Custom Cursor (Disabled on Mobile) */}
      {isClient && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (
        <>
          <motion.div
            className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 ${cursorColor}`}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
          <motion.div
            className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 border ${cursorRingColor} border-opacity-50`}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              width: cursorSize,
              height: cursorSize,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        </>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md ${navBg} border-b ${navBorder}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-sm ${secondaryTextColor}`}
            >
              {currentDate}
            </motion.div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                {[
                  { name: 'home', icon: HomeIcon },
                  { name: 'about', icon: User },
                  { name: 'projects', icon: FolderGit2 },
                  { name: 'contact', icon: Phone },
                ].map(({ name, icon: Icon }) => (
                  <a
                    key={name}
                    href={`#${name}`}
                    className={`flex items-center gap-2 ${linkHover} transition-colors ${textColor} relative group text-base`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={18} className={iconColor} />
                    <span className="relative">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${gradientColors} ${
                          activeSection === name ? 'h-0.5' : 'h-0'
                        } transition-all duration-300`}
                      ></span>
                    </span>
                  </a>
                ))}
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${skillBg} ${hoverBg} transition-colors`}
              >
                {darkMode ? <Sun size={20} className={iconColor} /> : <Moon size={20} className={iconColor} />}
              </button>
              <button
                className="md:hidden p-2 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} className={iconColor} /> : <Menu size={24} className={iconColor} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${navBg} backdrop-blur-md border-t ${navBorder} px-4 py-4`}
            >
              {[
                { name: 'home', icon: HomeIcon },
                { name: 'about', icon: User },
                { name: 'projects', icon: FolderGit2 },
                { name: 'contact', icon: Phone },
              ].map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href={`#${name}`}
                  className={`flex items-center gap-2 ${linkHover} transition-colors ${textColor} py-3 text-lg`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={20} className={iconColor} />
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text`}
            >
              Hi, I'm Kevin 👋
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`text-lg sm:text-xl md:text-2xl ${secondaryTextColor} mb-8 max-w-2xl mx-auto`}
            >
              Full-Stack Developer & AI Enthusiast crafting digital experiences that make a difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/kevin_final_resume.pdf"
                className={`px-6 py-3 bg-gradient-to-r ${gradientColors} text-white rounded-lg shadow-lg hover:shadow-xl transition-all group relative overflow-hidden text-base`}
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`px-6 py-3 border ${cardBorder} rounded-lg ${hoverBg} transition-all ${textColor} group relative overflow-hidden text-base`}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${cardBg} backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 border ${cardBorder} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20"></div>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text relative z-10`}>About Me</h2>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className={`max-w-3xl mb-6 ${secondaryTextColor} text-base sm:text-lg`}>
                  I'm Kevin Dave — a passionate full-stack developer and creative thinker with a strong focus on building meaningful, user-centered applications. With experience in <strong className={textColor}>Flutter</strong>, <strong className={textColor}>React</strong>, <strong className={textColor}>Python</strong>, and <strong className={textColor}>Supabase</strong>, I specialize in crafting intuitive, cross-platform experiences that solve real-world problems.
                  <br /><br />
                  I've led and contributed to impactful projects ranging from AI-powered civic monitoring systems to mental wellness apps and personalized news platforms. My foundation in <strong className={textColor}>graphic design</strong> and love for clean UI/UX helps me bridge the gap between form and function.
                  <br /><br />
                  Whether it's through clean code, collaborative teamwork, or thoughtful design, I strive to build software that's not just functional — but also delightful to use. I'm currently exploring AI integrations and scalable system design, and I'm always open to exciting opportunities and collaborations.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>Technical Skills</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {['React', 'Flutter', 'TypeScript', 'Python', 'Django', 'Firebase', 'Supabase', 'Tailwind CSS'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`px-3 py-1 ${skillBg} rounded-full text-sm sm:text-base backdrop-blur-sm ${skillText} group relative overflow-hidden`}
                        >
                          <span className="relative z-10">{skill}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>AI & ML Expertise</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {['TensorFlow', 'YOLOv11', 'TF-IDF', 'LSA', 'NLP', 'Computer Vision'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                          className={`px-3 py-1 ${skillBg} rounded-full text-sm sm:text-base backdrop-blur-sm ${skillText} group relative overflow-hidden`}
                        >
                          <span className="relative z-10">{skill}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
                >
                  {/* Background Shape */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${darkMode ? 'bg-white/5' : 'bg-black/5'} blur-xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />

                  {/* Photo Container */}
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 30px rgba(255,255,255,0.2)' : '0 0 30px rgba(0,0,0,0.2)' }}
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent"
                    style={{
                      background: `conic-gradient(${darkMode ? '#22d3ee, #3b82f6, #22d3ee' : '#0891b2, #1e3a8a, #0891b2'})`,
                    }}
                  >
                    <img src="/kevin-photo.jpg" alt="Kevin Dave" className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Particle Animations */}
                  {[...Array(6)].map((_, index) => (
                    <motion.div
                      key={index}
                      className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-cyan-300' : 'bg-cyan-700'} opacity-50`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0, 1, 0],
                        x: Math.cos((index * Math.PI) / 3) * 100,
                        y: Math.sin((index * Math.PI) / 3) * 100,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text`}>Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "MindHaven",
                desc: "Mental health app with mood tracking, journaling, and AI chatbot.",
                tech: ["Flutter", "Supabase", "Python"],
                link: "https://github.com/Kevin2508/MindHaven",
              },
              {
                title: "CityEye",
                desc: "AI-based civic monitoring system using CCTV and real-time alerts.",
                tech: ["React", "YOLOv11", "Django", "Supabase"],
                link: "https://github.com/Kevin2508/Civic_Services_Monitoring",
              },
              {
                title: "Newsly",
                desc: "Personalized news app using TF-IDF and LSA for smart recommendations.",
                tech: ["Flutter", "Python", "Supabase"],
                link: "https://github.com/Kevin2508/NewsApp",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: darkMode
                    ? "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
                className={`${cardBg} backdrop-blur-lg rounded-xl p-4 sm:p-6 ${hoverBg} transition-all border ${cardBorder} relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${textColor} relative z-10`}>{project.title}</h3>
                <p className={`${secondaryTextColor} mb-4 text-sm sm:text-base relative z-10`}>{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 ${skillBg} rounded-full text-xs sm:text-sm ${skillText} group-hover:bg-white/30 transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${darkMode ? 'text-cyan-300 hover:text-cyan-200' : 'text-cyan-700 hover:text-cyan-600'} transition-colors flex items-center gap-2 relative z-10 group/link text-sm sm:text-base`}
                  >
                    <Github size={16} />
                    <span>View Source Code</span>
                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${cardBg} backdrop-blur-lg rounded-2xl p-8 sm:p-12 border ${cardBorder} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20"></div>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text relative z-10`}>Get in Touch</h2>
            <p className={`text-lg sm:text-xl ${secondaryTextColor} mb-6 relative z-10`}>Let's build something amazing together.</p>
            <div className="flex justify-center gap-4 sm:gap-8 relative z-10">
              {[
                { icon: Mail, href: "mailto:kevindave1308@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/Kevin2508", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/kevin-dave-18674a312", label: "LinkedIn" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 sm:p-4 rounded-full ${skillBg} ${hoverBg} transition-all group relative overflow-hidden`}
                  aria-label={item.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <item.icon size={20} className={`${iconColor} relative z-10 group-hover:text-white transition-colors`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
