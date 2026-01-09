import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import RSVPForm from './components/RSVPForm';

// Import the background assets
import animatedBg from './assets/Aarya-soccer.mp4';


function App() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden font-body selection:bg-party-yellow selection:text-white">

      {/* Tennis Court Background */}
      {/* Layer 1: Background Filler (Animated Video) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 z-0 w-full h-full object-cover md:object-contain object-center brightness-110 saturate-125"
      >
        <source src={animatedBg} type="video/mp4" />
      </video>





      {/* Blur removed. Gradient kept lightly for text contrast if needed */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent to-white/10 pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto pt-4">
        <HeroSection />
        <InfoSection />
        <RSVPForm />
      </main>

      <footer className="w-full text-center py-6 pb-10 text-party-purple font-party text-2xl relative z-10 drop-shadow-md">
        <p className="bg-white/60 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
          Made with ❤️ for Aarya!
        </p>
      </footer>
    </div>
  );
}

export default App;
