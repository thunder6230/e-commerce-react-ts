import {motion} from "framer-motion"
export const AccountIndex = () => {
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute" }}
            exit={{opacity: 0, translateX: -30}}
        >Account</motion.div>
    )
}