import { motion } from 'framer-motion';
import { Target, Code, Users, Lightbulb } from 'lucide-react';

const uniquePoints = [
  {
    icon: Target,
    title: 'Results-Driven Approach',
    description: 'Focused on delivering measurable outcomes that improved efficiency, reduced costs, and positioned businesses for future growth.'
  },
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'Specialized in end-to-end application and software delivery, utilizing DevOps and Agile methodologies to streamline development.'
  },
  {
    icon: Users,
    title: 'Leadership Experience',
    description: 'Served as a trusted partner to clients, drove AI strategies, and ensured regulatory compliance in sensitive environments.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Passionate about helping businesses leverage technology to achieve their goals through digital transformation and IT optimization.'
  }
];

export default function Unique() {
  return (
    <section id="unique" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-playfair font-bold text-white mb-16">
            What Made Me Unique
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {uniquePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <point.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-left space-y-6 text-gray-300">
            <p>I was driven by results. Whether it was setting up a data center, leading a large-scale cloud migration, or helping organizations scale their IT infrastructure, the focus was on delivering measurable outcomes that improved efficiency, reduced costs, and positioned businesses for future growth.</p>
            <p>In addition to infrastructure optimization, I specialized in end-to-end application and software delivery, utilizing DevOps and Agile methodologies to streamline development, deployment, and operations. It was ensured that all processes adhered to secure practices and aligned with IT governance frameworks, enabling rapid, reliable, and compliant software releases.</p>
            <p>I had the privilege of working in senior leadership roles across industries, where I served as a trusted partner to clients, drove AI strategies, optimized infrastructure, and ensured regulatory compliance in highly sensitive environments such as healthcare and utilities. My experience in governance ensured that technology solutions met both operational goals and industry standards.</p>
            <p>My experience spoke for itself, and I was passionate about helping businesses leverage technology to achieve their goals. If digital transformation, optimizing IT operations, or enhancing application delivery with secure, agile, and efficient processes were sought, I would have loved to help make that happen.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}