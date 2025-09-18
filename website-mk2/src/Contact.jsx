import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { motion } from "motion/react";

function Contact(){
    

    return(
        <>
            <div className="flex flex-row justify-center m-5 p-5 gap-8">
                <motion.a
                whileHover={{scale:1.5, ease:"easeInOut", type:"spring"}}
                href="https://github.com/KinanMaarrawi" target="_blank"><FaGithub /></motion.a>
                <motion.a
                whileHover={{scale:1.5, ease:"easeInOut", type:"spring"}}
                href="https://www.linkedin.com/in/kinan-maarrawi/" target="blank"><FaLinkedin /></motion.a>
                <motion.a
                whileHover={{scale:1.5, ease:"easeInOut", type:"spring"}}
                href="mailto:kinan@maarrawi.com" target="_blank"><MdOutlineEmail /></motion.a>
                <motion.a
                whileHover={{scale:1.5, ease:"easeInOut", type:"spring"}}
                href="./public/CV.pdf" target="_blank"><IoDocumentAttachOutline /></motion.a>
                
            </div>
        </>
    )

}

export default Contact;
