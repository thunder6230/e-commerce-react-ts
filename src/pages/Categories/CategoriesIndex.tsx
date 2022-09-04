import {useContext} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {motion} from "framer-motion"
import {Link, useParams} from "react-router-dom";

export const CategoriesIndex = () => {
    const {categories} =  useContext(ProductsContext)
    const params = useParams()
    console.log(params)
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute",transitionEnd:{position:"unset"} }}
            exit={{opacity: 0, translateX: -30}}
            className={"py-16 pageComponent"}
        >
            Categories
            <div>
                {
                    categories &&  categories.map(category => <Link to={`/categories/${category.id}`}><div key={category.name}>{category.name}</div></Link>

                    )
                }
            </div>
        </motion.div>
    )
}