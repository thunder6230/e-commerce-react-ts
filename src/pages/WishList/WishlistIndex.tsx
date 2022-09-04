import {motion} from "framer-motion"
export const WishlistIndex = () => {
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute" }}
            exit={{opacity: 0, translateX: -30}}
        >Wishlist</motion.div>
    )
}