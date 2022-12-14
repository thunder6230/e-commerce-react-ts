import {motion} from "framer-motion"
export const AccountIndex = () => {
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute",transitionEnd:{position:"unset"} }}
            exit={{opacity: 0, translateX: -30}}
            className={"py-16 pageComponent"}
        >Account</motion.div>
    )
}