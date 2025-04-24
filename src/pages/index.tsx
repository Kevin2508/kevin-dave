import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"
    : "bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100";
  const textColor = darkMode ? "text-white" : "text-gray-900";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${bgGradient} ${textColor}`}>
      <div className="flex justify-end p-4">
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text"
        >
          Hi, I'm Kevin 👋
        </motion.h1>
        <p className="text-xl max-w-xl mx-auto mb-6 font-light">
          Passionate about solving real-world problems with smart, scalable, and beautiful software.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="px-4 py-2 bg-emerald-500 text-white rounded shadow hover:bg-emerald-600">Download Resume</a>
          <a href="#contact" className="px-4 py-2 border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-500 hover:text-white transition">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mb-6">
          I'm a developer with experience in Flutter, AI, and full-stack development. I enjoy building smart apps that make a real difference. With a background in graphic design, I value clean interfaces and engaging experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          {['React', 'Flutter', 'TypeScript', 'Supabase', 'Django', 'Firebase', 'Python', 'Tailwind CSS'].map(skill => (
            <span key={skill} className="bg-opacity-20 px-4 py-2 rounded-full text-sm backdrop-blur shadow text-white border border-white border-opacity-20">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "MindHaven",
              desc: "Mental health app with mood tracking, journaling, and AI chatbot.",
              tech: ["Flutter", "Supabase", "Python"],
            },
            {
              title: "CityEye",
              desc: "AI-based civic monitoring system using CCTV and real-time alerts.",
              tech: ["React", "YOLOv11", "Django", "Supabase"],
            },
            {
              title: "Newsly",
              desc: "Personalized news app using TF-IDF and LSA for smart recommendations.",
              tech: ["Flutter", "Python", "Supabase"],
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-30 backdrop-blur shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-opacity-20 text-sm px-2 py-1 rounded-full border border-white border-opacity-10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">Let's build something amazing. Reach out to collaborate or chat.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:kevindave1308@gmail.com" aria-label="Email"><Mail size={24} /></a>
          <a href="https://github.com/Kevin2508" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></a>
          <a href="https://linkedin.com/in/kevin-dave-18674a312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
        </div>
      </section>
    </div>
  );
} 