import {motion} from 'framer-motion';
import { lines } from "../utils/animations"
import Line from "../assets/icon/line.svg"

export default function AnimatedLine() {
    return(
        <div className="container-line">
             {[...Array(99)].map((_, index) => ( 
                <motion.div
                    className='animated-line'
                    key={index}
                    variants={lines}
                    initial="hidden"
                    animate="show"
                     whileHover={{ scale: 2 }}
                    style={{
                        position: 'absolute',
                        right: `${Math.random() * 45}vw`, 
                        top: `${Math.random() * 80}vh`,
                        rotate: Math.random() * 360,
                      
                      }}
                >
                    <img src={Line} alt={`Line ${index}`} />
                </motion.div>
            ))};
            
        </div>
    )
}