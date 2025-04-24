import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  tech: string[];
}

export default function Card({ title, description, tech }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded bg-white dark:bg-gray-800 shadow"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 rounded bg-primary-light text-white">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}