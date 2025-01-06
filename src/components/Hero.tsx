import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="Manjula 4.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/90" />
      </div>
      
      <motion.div 
        initial={{ opacity: 100, x: 100 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-0"
      >
        <h1 className="text-4xl lg:text-6xl font-playfair text-white font-bold mb-6">
          Introducing Manjula Nanjappa
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          A strategic executive with over 25+ years of experience driving digital transformations across diverse industries. Specializes in IT Operations, Cloud Infrastructure, Cybersecurity, Analytics, and AI solutions. Achieved exceptional outcomes within Fortune 100 corporations globally. Skilled in leading teams across diverse sectors--telecommunications, oil/gas, Infrastructure, Utility, Health, Manufacturing, and Education. Committed to enhancing customer experience, optimizing digital assets, and driving operational efficiencies. Proficiency in orchestrating Mergers & Acquisitions, adeptly navigated change management intricacies, and spearheading technology transformations to enable seamless integration and optimization.
        </p>
      </motion.div>
    </section>
  );
}