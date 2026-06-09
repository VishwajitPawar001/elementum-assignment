import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplitSection from './components/SplitSection';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <SplitSection 
          titleStart="Tomorrow should be better than "
          highlightWord="today"
          titleEnd=""
          highlightColor="bg-brand-green"
          description="We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
          imageSrc="/img1.png"
          imagePosition="right"
        />
        <SplitSection 
          titleStart="See how we can help you "
          highlightWord="progress"
          titleEnd=""
          highlightColor="bg-transparent border-b-4 border-yellow-400 rounded-none shadow-none px-1"
          description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research."
          imageSrc="/img2.png"
          imagePosition="left"
        />
        <Services />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;