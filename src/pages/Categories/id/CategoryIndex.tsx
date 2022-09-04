import {useParams} from "react-router-dom";
import {motion} from "framer-motion"
export const CategoryIndex = () => {
    const params = useParams()
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute",transitionEnd:{position:"unset"} }}
            exit={{opacity: 0, translateX: -30}}
            className={"py-16 pageComponent"}
        >Category {params.id}</motion.div>
    )
}