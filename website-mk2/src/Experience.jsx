import Card from './Card.jsx';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { FaCss3, FaPython, FaHtml5, FaJava, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';

function Experience() {

    const experience = [
        {
            name: "Java",
            img: FaJava
        },
        {
            name: "Python",
            img: FaPython
        },
        {
            name: "HTML",
            img: FaHtml5
        },
        {
            name: "CSS",
            img: FaCss3
        },
        {
            name: "TailwindCSS",
            img: RiTailwindCssFill
        },        
        {
            name: "JavaScript",
            img: FaJs
        },
        {
            name: "React.js",
            img: FaReact
        },
        {
          name: "Git",
          img: FaGitAlt
        },   
    ]

    const projects = [
      {
        name: "kinan.maarrawi.com",
        link: "https://github.com/KinanMaarrawi/WebsiteMK2"
      },
      {
        name: "GWTIT",
        link: "https://github.com/KinanMaarrawi/GWTIT"
      },
      {
        name: "Calculator",
        link: "https://github.com/KinanMaarrawi/JSCalculator"
      }
    ]

  return (
    <>
      {/* Experience Section */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.5, delay: 0.5 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        className="m-6"
      >
        {/* Title */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex justify-center items-center text-center">
          <h2 className="text-5xl p-15">i have experience with:</h2>
        </motion.div>

        {/* Mobile View - Experience (Marquee) */}
        <div className="md:hidden">
          <Marquee speed={50} gradient={false} pauseOnHover className="h-auto p-10">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
              className="flex flex-shrink-0 flex-row justify-center items-center gap-10"
            >
                {experience.map((card, index) => (
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} key={index}>
                     <Card img={card.img} name={card.name} alt={card.name} />
                  </motion.div>
                ))}
            </motion.div>
          </Marquee>
        </div>

        {/* Desktop View - Experience (Grid Layout) */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="hidden md:flex flex-shrink-0 flex-wrap flex-row justify-center items-center gap-10"
        >
          {experience.map((card, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
               <Card img={card.img} name={card.name} alt={card.name} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.5, delay: 4 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        className="m-6"
      >
        {/* Title */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex justify-center items-center text-center">
          <h2 className="text-5xl p-15">my projects:</h2>
        </motion.div>

        {/* Mobile View - Projects (Marquee) */}
        <div className="md:hidden">
          <Marquee speed={50} gradient={false} pauseOnHover className="h-auto p-10">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
              className="flex flex-shrink-0 flex-row justify-center items-center gap-10"
            >
                {projects.map((card, index) => (
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} key={index}>
                     <a href={card.link} target="_blank"><Card name={card.name} /></a>
                  </motion.div>
                ))}
            </motion.div>
          </Marquee>
        </div>

        {/* Desktop View - Projects (Grid Layout) */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="hidden md:flex flex-shrink-0 flex-wrap flex-row justify-center items-center gap-10"
        >
          {projects.map((card, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
               <a href={card.link} target="_blank"><Card name={card.name} /></a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Experience;
