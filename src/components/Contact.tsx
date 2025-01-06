import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="https://www.linkedin.com/in/manjula-nanjappa-5108658/?originalSubdomain=ca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <Linkedin className="w-12 h-12 text-blue-400" />
        </a>
      </motion.div>
    </section>
  );
}