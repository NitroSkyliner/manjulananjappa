import { motion } from 'framer-motion';
import { Award, Database, Shield, BarChart, Factory, Zap } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { CardContainer } from './ui/CardContainer';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-white mb-8">
            Key Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <CardContainer key={index} delay={index * 0.1}>
                <achievement.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                <ul className="text-left space-y-2">
                  {achievement.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <Zap className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContainer>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}