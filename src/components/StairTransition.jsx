"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Stairs from './Stairs';

const StairTransition = () => {
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

            try { sessionStorage.setItem('ranIntro', 'true'); } catch (e) { console.warn('sessionStorage.setItem failed', e); }
        } catch (e) {
            setShowIntro(false);
        }
    }, []);

    if (!showIntro) return null;

    return (
        <>
            <AnimatePresence mode='wait'>
                <div>
                    <div className='h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex'>
                        <Stairs />
                    </div>

                    <motion.div
                        className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: {
                                delay: 1,
                                duration: 0.4,
                                ease: 'easeInOut',
                            },
                        }}
                    />

                </div>
            </AnimatePresence>
        </>
    );
};

export default StairTransition;