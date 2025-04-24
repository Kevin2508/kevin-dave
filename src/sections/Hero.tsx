import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-700 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold"
      >
        Hi, I&apos;m Kevin 👋
      </motion.h1>
      <p className="text-xl mt-4">Building beautiful and scalable applications for the web and mobile.</p>
    </section>
  );
}