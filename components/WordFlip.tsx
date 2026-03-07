'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
    'DEVELOPER',
    'MERN DEV',
    'REACT DEV',
    'ENGINEER',
];

const WordFlip = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3500); // Slower word change interval

        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className="inline-grid relative w-[7em]"
            style={{ perspective: '1200px', clipPath: 'inset(0 -20% -50% -20%)' }}
        >
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={index}
                    initial={{
                        rotateX: 90,
                        y: '-50%',
                        opacity: 0,
                    }}
                    animate={{
                        rotateX: 0,
                        y: '0%',
                        opacity: 1,
                    }}
                    exit={{
                        rotateX: -90,
                        y: '50%',
                        opacity: 0,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 80,
                        damping: 25,
                        mass: 1,
                    }}
                    style={{ transformOrigin: 'center center -50px' }}
                    className="inline-block text-foreground whitespace-nowrap"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default WordFlip;
