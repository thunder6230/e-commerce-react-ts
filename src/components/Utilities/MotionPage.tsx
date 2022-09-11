import {FC} from "react";
import {motion} from "framer-motion";

interface Props {
    children: JSX.Element| JSX.Element[]
}

export const MotionPage:FC<Props> = ({children}) => {
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute", transitionEnd: {position: "unset"}}}
            exit={{opacity: 0, translateX: -30}}
        >
            {children}
        </motion.div>
    )
}