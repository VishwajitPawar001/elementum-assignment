import { motion } from 'framer-motion';

const SplitSection = ({ titleStart, highlightWord, titleEnd, highlightColor, description, imageSrc, imagePosition }) => {
  const isLeft = imagePosition === 'left';

  return (
    <section className={`flex flex-col ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-24 px-4 overflow-hidden`}>
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 space-y-6 max-w-xl"
      >
        <h2 className="text-4xl md:text-5xl font-medium leading-[1.2]">
          {titleStart} 
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className={`inline-block px-4 py-1 mx-1 rounded-full text-gray-900 shadow-sm transition-colors duration-300 ${highlightColor}`}
          >
            {highlightWord}
          </motion.span>
          {titleEnd}
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          {description}
        </p>
        <motion.button 
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-medium border-b-2 border-brand-dark pb-1 hover:text-brand-purple hover:border-brand-purple transition-all mt-4"
        >
          Read more
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: isLeft ? -10 : 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 relative flex justify-center w-full group"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative z-10 border-8 border-white shadow-xl bg-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:border-brand-pink/30">
           <motion.img 
             whileHover={{ scale: 1.15 }}
             transition={{ duration: 0.6 }}
             src={imageSrc} 
             className="w-full h-full object-cover" 
           />
        </div>
      </motion.div>
    </section>
  );
};

export default SplitSection;