import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {useContext, useEffect} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {ProductSliderComponent} from "../../components/ProductSlider/ProductSliderComponent";

export const ProductIndex = () => {
    const params = useParams()
    const {getRelatedProducts, relatedProducts, getProduct, openedProduct} = useContext(ProductsContext)
    useEffect(() => { getProduct && getProduct(params.id!)}, [])
    useEffect(() => { getRelatedProducts && getRelatedProducts(openedProduct?.categories!)}, [openedProduct])
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute",transitionEnd:{position:"unset"} }}
            exit={{opacity: 0, translateX: -30}}
            className={"py-16 pageComponent"}
        >
            <div className={"container m-auto"}>
                {openedProduct?.name}
            {relatedProducts && <ProductSliderComponent products={relatedProducts} title="Related Products"/>}
            </div>
        </motion.div>
    )
}