import { motion } from 'framer-motion';

const Services = () => {
  const servicesList = [
    { id: 1, category: "Office of multiple interest content", title: "Collaborative & partnership" },
    { id: 2, category: "The hanger US Air force digital experimental", title: "We talk about our weight" },
    { id: 3, category: "Delta faucet content, social, digital", title: "Piloting digital confidence" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <section className="py-24 px-4 border-b border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.2]">
            What we <span className="inline-block bg-brand-green rounded-full px-4 py-1 mx-1 text-gray-900 shadow-sm hover:bg-green-200 transition-colors cursor-default">can</span><br />
            <span className="relative inline-block mt-2 group cursor-default">
              offer
              <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-400 transition-all duration-300 group-hover:h-3 group-hover:opacity-50"></span>
            </span> you!
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:w-2/3 flex flex-col"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "#fafafa", paddingLeft: "1rem", paddingRight: "1rem" }}
              key={service.id} 
              className={`flex items-center justify-between py-8 transition-all duration-300 rounded-xl cursor-pointer group ${index !== 0 ? 'border-t border-gray-200' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full">
                <p className="text-gray-500 text-xs md:text-sm md:w-1/3 leading-relaxed group-hover:text-brand-purple transition-colors">
                  {service.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 md:w-2/3 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>
              <motion.button 
                whileHover={{ rotate: 45, scale: 1.2 }}
                className="text-gray-400 hover:text-brand-purple transition-colors ml-6 flex-shrink-0"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;