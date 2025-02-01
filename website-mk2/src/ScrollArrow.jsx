import { motion } from 'motion/react';
import { FaChevronDown } from "react-icons/fa";

function ScrollArrow(){
    return(
        <>

        <motion.div
        className='absolute bottom-10'
        initial={{ opacity: 0, y: 0 }}
        animate={{
            opacity: 1,
            y: [0, -10, 0, -5, 0], // Two bounces
        }}
        transition={{
            opacity: { duration: 1, delay: 6 }, // Fade in after 6s
            type: 'spring',
            y: {
                duration: 1.5, // Bounce duration
                repeat: Infinity, // Infinite loop
                repeatDelay: 3, // Pause before next bounce
                ease: "easeInOut",
            },
        }}
        >
            <FaChevronDown className="w-10 h-10"/>
        </motion.div>
        </>
    )
}

export default ScrollArrow;