import { motion } from 'framer-motion';

const Hero = () => {
  const floatAnimation = (delay) => ({
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }
  });

  return (
    <section className="py-20 text-center relative px-4 overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 leading-[1.2]"
      >
        The <span className="relative inline-block hover:scale-105 transition-transform cursor-default">
          thinkers
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-0 bottom-1 w-full h-1 bg-yellow-400 origin-left"
          ></motion.span>
        </span> and <br className="hidden md:block" />
        doers were <motion.span 
          whileHover={{ scale: 1.1, rotate: -2 }}
          className="inline-block bg-brand-pink rounded-full px-4 py-1 mx-1 text-gray-900 shadow-sm cursor-pointer"
        >changing</motion.span><br className="hidden md:block" />
        the <motion.span 
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="inline-block bg-brand-green rounded-full px-4 py-1 mx-1 text-gray-900 shadow-sm cursor-pointer"
        >status</motion.span> Quo with
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
      >
        We are a team of strategists, designers communicators, researchers. Together, 
        we believe that progress only happens when you refuse to play things safe.
      </motion.p>

      <div className="relative mt-24 h-48 w-full max-w-4xl mx-auto hidden md:block">
         <motion.img animate={floatAnimation(0)} whileHover={{ scale: 1.2, zIndex: 50 }} src="/img1.png" className="absolute top-0 left-[10%] w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover cursor-pointer" />
         <motion.img animate={floatAnimation(0.5)} whileHover={{ scale: 1.2, zIndex: 50 }} src="/img2.png" className="absolute top-10 left-[30%] w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover cursor-pointer" />
         <motion.img animate={floatAnimation(1)} whileHover={{ scale: 1.2, zIndex: 50 }} src="/img3.png" className="absolute -top-5 right-[45%] w-14 h-14 rounded-full border-4 border-white shadow-lg object-cover cursor-pointer" />
         <motion.img animate={floatAnimation(1.5)} whileHover={{ scale: 1.2, zIndex: 50 }} src="/img4.png" className="absolute top-8 right-[20%] w-[72px] h-[72px] rounded-full border-4 border-white shadow-lg object-cover cursor-pointer" />
         <motion.img animate={floatAnimation(2)} whileHover={{ scale: 1.2, zIndex: 50 }} src="/img5.png" className="absolute bottom-5 right-[5%] w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover cursor-pointer" />
         <motion.img animate={floatAnimation(0.8)} whileHover={{ scale: 1.2, zIndex: 50 }} src="/img6.png" className="absolute -top-2 left-[50%] w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover cursor-pointer" />
      </div>
    </section>
  );
};

export default Hero;