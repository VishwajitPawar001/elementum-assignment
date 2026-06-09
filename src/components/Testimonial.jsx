import { motion } from 'framer-motion';

const Testimonial = () => {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section className="py-32 px-4 relative flex flex-col items-center justify-center min-h-[600px] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-medium leading-[1.2]">
          <span className="inline-block bg-brand-green rounded-full px-4 py-1 mx-1 shadow-sm hover:scale-105 transition-transform cursor-default">What</span> our customer <br />
          says <span className="relative inline-block mt-2 group cursor-default">
            About Us
            <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-400 group-hover:h-full group-hover:opacity-20 transition-all duration-300 -z-10"></span>
          </span>
        </h2>
      </motion.div>

      <div className="relative w-full max-w-3xl flex justify-center items-center">
        <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0 }} src="/img1.png" className="hidden md:block absolute -left-12 top-0 w-12 h-12 rounded-full border-2 border-white shadow-md object-cover hover:scale-125 transition-transform cursor-pointer" />
        <motion.img animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} src="/img2.png" className="hidden md:block absolute left-10 -top-10 w-8 h-8 rounded-full border-2 border-white shadow-md object-cover hover:scale-125 transition-transform cursor-pointer" />
        <motion.img animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }} src="/img3.png" className="hidden md:block absolute -left-20 bottom-10 w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover hover:scale-110 transition-transform cursor-pointer" />
        <motion.img animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} src="/img4.png" className="hidden md:block absolute right-0 -top-8 w-16 h-16 rounded-full border-2 border-white shadow-md object-cover hover:scale-125 transition-transform cursor-pointer" />
        <motion.img animate={{ y: [0, -25, 0] }} transition={{ duration: 5.5, repeat: Infinity, delay: 1.5 }} src="/img5.png" className="hidden md:block absolute -right-16 bottom-12 w-32 h-32 rounded-full border-4 border-white shadow-lg z-20 object-cover hover:scale-110 transition-transform cursor-pointer" />
        <motion.img animate={{ y: [0, 15, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2.5 }} src="/img6.png" className="hidden md:block absolute right-4 -bottom-4 w-12 h-12 rounded-full border-2 border-white shadow-md object-cover hover:scale-125 transition-transform cursor-pointer" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, translateY: -5 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-14 text-center max-w-2xl relative z-10 shadow-lg hover:shadow-2xl border border-gray-100 transition-shadow duration-300"
        >
          <p className="text-gray-600 text-base md:text-lg leading-relaxed relative">
            <motion.span animate={pulseAnimation} className="text-6xl text-brand-purple/20 font-serif absolute -top-8 -left-4">"</motion.span>
            Elementum delivered the site with inthe timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
            <motion.span animate={pulseAnimation} className="text-6xl text-brand-purple/20 font-serif absolute -bottom-12 -right-4">"</motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;