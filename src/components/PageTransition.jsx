"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageTransition = ({ children }) => {
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        try {
            const navEntries = performance.getEntriesByType
                ? performance.getEntriesByType('navigation')
                : [];
            const navType = navEntries && navEntries.length
                ? navEntries[0].type
                : (performance && performance.navigation && performance.navigation.type === 1 ? 'reload' : 'navigate');

            const seen = typeof window !== 'undefined' && sessionStorage.getItem('ranIntro');

            const shouldRun = !seen || navType === 'reload';
            setShowIntro(shouldRun);

            // Mark that the intro has run so subsequent client navigation skips it
            try { sessionStorage.setItem('ranIntro', 'true'); } catch (e) {}
        } catch (e) {
            setShowIntro(false);
        }
    }, []);

    return (
        <AnimatePresence>
            <div>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
                        }}
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                    />
                )}
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;