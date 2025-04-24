import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-20 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4">Let’s build something amazing. Reach out to collaborate or chat.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:kevindave1308@gmail.com" aria-label="Email"><Mail size={24} /></a>
        <a href="https://github.com/Kevin2508" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></a>
        <a href="https://linkedin.com/in/kevin-dave-18674a312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
      </div>
    </section>
  );
}