import { Mail, Github, Linkedin, Sun, Moon, Home as HomeIcon, User, FolderGit2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  
  // Color variables for better contrast
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50";
  const textColor = darkMode ? "text-slate-100" : "text-slate-900";
  const secondaryTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const cardBg = darkMode ? "bg-white/5" : "bg-white/80";
  const cardBorder = darkMode ? "border-white/10" : "border-slate-200";
  const skillBg = darkMode ? "bg-white/10" : "bg-slate-100";
  const skillText = darkMode ? "text-slate-300" : "text-slate-700";
  const hoverBg = darkMode ? "hover:bg-white/20" : "hover:bg-slate-200";
  const navBg = darkMode ? "bg-white/5" : "bg-white/80";
  const navBorder = darkMode ? "border-white/10" : "border-slate-200";
  const gradientColors = darkMode ? "from-blue-500 to-purple-500" : "from-blue-600 to-purple-600";
  const linkHover = darkMode ? "hover:text-blue-400" : "hover:text-blue-600";
  const iconColor = darkMode ? "text-slate-300" : "text-slate-700";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${bgGradient} ${textColor}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md ${navBg} border-b ${navBorder}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-xl font-bold bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text`}
            >
              Kevin Dave
            </motion.div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a href="#home" className={`flex items-center gap-2 ${linkHover} transition-colors ${textColor}`}>
                  <HomeIcon size={20} className={iconColor} /> Home
                </a>
                <a href="#about" className={`flex items-center gap-2 ${linkHover} transition-colors ${textColor}`}>
                  <User size={20} className={iconColor} /> About
                </a>
                <a href="#projects" className={`flex items-center gap-2 ${linkHover} transition-colors ${textColor}`}>
                  <FolderGit2 size={20} className={iconColor} /> Projects
                </a>
                <a href="#contact" className={`flex items-center gap-2 ${linkHover} transition-colors ${textColor}`}>
                  <Phone size={20} className={iconColor} /> Contact
                </a>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full ${skillBg} ${hoverBg} transition-colors`}
              >
                {darkMode ? <Sun size={20} className={iconColor} /> : <Moon size={20} className={iconColor} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={`text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text`}>
              Hi, I'm Kevin 👋
            </h1>
            <p className={`text-xl md:text-2xl ${secondaryTextColor} mb-8 max-w-2xl mx-auto`}>
              Full-Stack Developer & AI Enthusiast crafting digital experiences that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/kevin_final_resume.pdf"
                className={`px-8 py-3 bg-gradient-to-r ${gradientColors} text-white rounded-lg shadow-lg hover:shadow-xl transition-all`}
              >
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`px-8 py-3 border ${cardBorder} rounded-lg ${hoverBg} transition-all ${textColor}`}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${cardBg} backdrop-blur-lg rounded-2xl p-8 md:p-12 border ${cardBorder}`}
          >
            <h2 className={`text-4xl font-bold mb-8 bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text`}>About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className={`text-lg ${secondaryTextColor} mb-8`}>
                  I'm a passionate Full-Stack Developer with a strong focus on creating intelligent and user-friendly applications. 
                  With expertise in both mobile and web development, I specialize in building solutions that combine cutting-edge 
                  technology with intuitive design.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Technical Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Flutter', 'TypeScript', 'Python', 'Django', 'Firebase', 'Supabase', 'Tailwind CSS'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`px-4 py-2 ${skillBg} rounded-full text-sm backdrop-blur-sm ${skillText}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>AI & ML Expertise</h3>
                    <div className="flex flex-wrap gap-3">
                      {['TensorFlow', 'YOLOv11', 'TF-IDF', 'LSA', 'NLP', 'Computer Vision'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                          className={`px-4 py-2 ${skillBg} rounded-full text-sm backdrop-blur-sm ${skillText}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className={`w-64 h-64 rounded-full bg-gradient-to-r ${gradientColors} p-1`}>
                  <img 
                    src="/kevin-photo.jpg" 
                    alt="Kevin Dave" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text`}>Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                whileHover={{ y: -10 }}
                className={`${cardBg} backdrop-blur-lg rounded-xl p-6 ${hoverBg} transition-all border ${cardBorder}`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>{project.title}</h3>
                <p className={`${secondaryTextColor} mb-6`}>{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className={`px-3 py-1 ${skillBg} rounded-full text-sm ${skillText}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors flex items-center gap-2`}
                  >
                    <Github size={16} /> View Source Code
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${cardBg} backdrop-blur-lg rounded-2xl p-12 border ${cardBorder}`}
          >
            <h2 className={`text-4xl font-bold mb-6 bg-gradient-to-r ${gradientColors} text-transparent bg-clip-text`}>Get in Touch</h2>
            <p className={`text-xl ${secondaryTextColor} mb-8`}>Let's build something amazing together.</p>
            <div className="flex justify-center gap-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:kevindave1308@gmail.com"
                className={`p-4 rounded-full ${skillBg} ${hoverBg} transition-all`}
                aria-label="Email"
              >
                <Mail size={24} className={iconColor} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Kevin2508"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full ${skillBg} ${hoverBg} transition-all`}
                aria-label="GitHub"
              >
                <Github size={24} className={iconColor} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/kevin-dave-18674a312"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full ${skillBg} ${hoverBg} transition-all`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className={iconColor} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 