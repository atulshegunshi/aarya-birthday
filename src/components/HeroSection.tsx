import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-4 pt-10 pb-0 overflow-hidden">

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center w-full h-full justify-center pb-20 gap-8">

                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="text-6xl md:text-9xl font-party text-party-yellow"
                    style={{
                        textShadow: '4px 4px 0px #FB923C, 8px 8px 0px #C084FC',
                        WebkitTextStroke: '3px white'
                    }}
                >
                    It's my Birthday
                </motion.h1>
            </div>
        </section>
    );
};

export default HeroSection;
