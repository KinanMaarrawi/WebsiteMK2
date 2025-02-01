import {motion} from 'motion/react';

function About(){
    return(
        <>
        <motion.div
        variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, staggerChildren: 0.5, delay: 0.3}}

        className="h-dvh flex justify-center items-center">
            <p className="text-2xl p-10 max-w-md">hi there! i'm <span className="italic text-[#64B5F6]">kinan maarrawi.</span> i'm a year 1 computer science student at the <span className="italic text-[#64B5F6]">university of birmingham dubai</span>. this website is meant to be a <span className="italic text-[#64B5F6]">digital portfolio</span> of sorts to showcase my experience and projects i have completed within the fields of <span className="italic text-[#64B5F6]">programming and computer science.</span> think of it as a digital cv of sorts. thanks for stopping by, and feel free to <span className="italic text-[#64B5F6]">contact me</span> through the links at the bottom of the page.</p>
        </motion.div>
        </>
    )

}

export default About;