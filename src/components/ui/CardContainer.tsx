import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardContainerProps {
  children: ReactNode;
  delay?: number;
}

export function CardContainer({ children, delay = 0 }: CardContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
}