import { TypeAnimation } from 'react-type-animation'; 
import {motion} from 'motion/react';
import Navi from './Navi.jsx';
import ScrollArrow from './ScrollArrow.jsx';

function Hello(){

    document.body.style.overflow = "hidden";

    return(
        <>
        <motion.div
        variants={{
            hidden: {opacity:0, x:75},
            visible: {opacity:1, x:0, scale:[1.2,1]},
        }}

        initial="hidden"
        animate="visible"

        transition={{duration:1, delay:7, ease:"easeInOut", type:"spring"}}

        onAnimationComplete={() => {
            document.body.style.overflow = "auto";}}
        
        

        className="hidden fixed top-5 right-5 md:flex md:flex-col items-end p-3">
            <Navi section="home"/>
            <Navi section="about" />
            <Navi section="experience" />
            <Navi section="contact" />
        </motion.div>


        <div className="h-dvh flex flex-col items-center justify-center text-center">
            <TypeAnimation 
                sequence={[
                    1000,
                    'hi'
                ]}
                className='text-5xl md:text-7xl'
                speed={12}
                cursor={false}
                />
                <TypeAnimation 
                sequence={[
                    3000,
                    "i'm kinan"
                ]}
                className='text-5xl md:text-7xl'
                speed={12}
                cursor={false}
                />
                <TypeAnimation 
                sequence={[
                    5000,
                    "i'm a student",
                    2000,
                    "i'm a developer",
                    2000,
                    "i'm a tech enthusiast"
                ]}
                className='text-5xl md:text-7xl'
                speed={12}
                cursor={true}
                repeat={Infinity}
                />
        <a href="#about"><ScrollArrow /></a>

        </div>

        </>
    )

}

export default Hello;