import { motion } from 'motion/react';
import { Tilt } from 'react-tilt';
import React from 'react';

function Card(props) {
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,         // max tilt rotation (degrees)
        perspective: 1250, // Transform perspective, the lower the more extreme the tilt gets.
        axis: null,      // What axis should be disabled. Can be X or Y.
        reset: true,     // If the tilt effect has to be reset on exit.
    }

    return (
        <>
            <Tilt options={defaultOptions}>
                <motion.div
                    whileHover={{
                        scale: 1.20,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                >
                    <div className="flex flex-col justify-center mx-5 p-5 rounded-lg bg-gray-900 relative bg-black/10 backdrop-blur-md shadow-lg shadow-black/30 text-white items-center">
                        {/* Render the icon component passed as props */}
                        <div className="icon-container">
                            {props.img && React.createElement(props.img, { size: 28 })} {/* Correctly render the icon */}
                        </div>
                        <p className="text-lg">{props.name}</p>
                    </div>
                </motion.div>
            </Tilt>
        </>
    )
}

export default Card;
