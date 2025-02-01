import {motion} from 'motion/react';

function Navi(props){
    return(
        <>
        <motion.span // Parent container
            className='relative inline-block'
            whileHover="hover" // Trigger hover state
            initial="initial"
        >
            <a href={`#${props.section}`} className="relative z-10">
                {props.section}
            </a>
            <motion.div // Underline
                className='absolute left-0 bottom-0 h-px bg-[#E0E0E0] z-0'
                variants={{
                    initial: { width: 0 }, // Initial state
                    hover: { width: '100%' }, // Hover state
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            />
        </motion.span>
        </>
    )
}

export default Navi;