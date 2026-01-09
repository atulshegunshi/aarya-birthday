import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection: React.FC = () => {
    const [isAltText, setIsAltText] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleScrollDown = () => {
        const target = document.getElementById('info-section');
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1500; // 1.5 seconds (slower)
            let start: number | null = null;

            function step(timestamp: number) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);

                // Easing function (easeInOutCubic)
                const ease = percentage < 0.5
                    ? 4 * percentage * percentage * percentage
                    : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

                window.scrollTo(0, startPosition + distance * ease);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }
            window.requestAnimationFrame(step);
        }
    };

    const handleTextClick = (e: React.MouseEvent) => {
        e.stopPropagation();

        // Increment click count
        const newCount = clickCount + 1;
        setClickCount(newCount);

        // Toggle text always
        setIsAltText(!isAltText);

        // On 2nd click (or subsequent even clicks if we want repeating behavior, but "after two clicks" usually means the 2nd one triggers it)
        if (newCount >= 2) {
            handleScrollDown();
            setClickCount(0); // Reset or keep incrementing? "after two clicks scroll down". Let's reset to allow cycle.
        }
    };

    return (
        <section
            onClick={handleScrollDown}
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-4 pt-10 pb-0 overflow-hidden cursor-pointer"
        >

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center w-full h-full justify-center pb-20 gap-8">

                <AnimatePresence mode="wait">
                    <motion.h1
                        key={isAltText ? "alt" : "main"}
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: -90, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        onClick={handleTextClick}
                        className="text-6xl md:text-9xl font-party text-party-yellow cursor-pointer select-none drop-shadow-2xl"
                        style={{
                            textShadow: '4px 4px 0px #000000',
                            WebkitTextStroke: '2px #000000'
                        }}
                    >
                        {isAltText ? "Aarya is turning Five" : "It's my Birthday"}
                    </motion.h1>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default HeroSection;
