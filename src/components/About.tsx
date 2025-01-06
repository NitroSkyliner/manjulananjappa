import { motion } from 'framer-motion';
import { Monitor, Server, Shield, Database } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Digital Transformation',
    description: 'Successfully led global teams in driving digital transformation strategies and managing end-to-end IT operations.'
  },
  {
    icon: Server,
    title: 'M&A Expertise',
    description: 'Managed technology integration in mergers and acquisitions, creating unified, optimized solutions.'
  },
  {
    icon: Shield,
    title: 'Security Focus',
    description: 'Deployed cutting-edge AI-driven solutions and cybersecurity strategies to improve efficiency and secure data.'
  },
  {
    icon: Database,
    title: 'Infrastructure Leadership',
    description: 'Led data center setups with multi-stakeholder partners, achieving faster processing and cost savings.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-white mb-8">
            What has been brought to the table
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-left space-y-6 text-gray-300">
            <p>Global teams were successfully led in driving digital transformation strategies, managing end-to-end IT operations, and overseeing ERP, CRM, and supply chain management solutions. It was ensured that technology was seamlessly aligned with business objectives, optimizing system performance while maintaining security and operational efficiency.</p>
            <p>M&A was a key area of expertise. Technology integration in mergers and acquisitions was successfully managed, bringing together different systems into unified, optimized solutions that delivered operational improvements.</p>
            <p>From optimizing cloud infrastructures to deploying AI-driven solutions and cybersecurity strategies, I was at the forefront of enabling organizations to leverage cutting-edge technologies that improved efficiency and secured data.</p>
            <p>Experience included leading data center setups in collaboration with multi-stakeholder partners, contributing to faster data processing and significant cost savings.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}