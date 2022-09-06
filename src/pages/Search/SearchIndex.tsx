import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {useParams} from "react-router-dom";
import {ProductSliderElement} from "../../components/ProductSlider/components/ProductSliderElement";
import {motion} from "framer-motion";

export const SearchIndex = () => {
    const {foundProducts, searchProducts} = useContext(ProductsContext)
    const [searchDetails, setSearchDetails] = useState<{type: string, value: string} | null>(null)
    const params = useParams()
    const prepareSearchDetails = () => {
        if(params.name) setSearchDetails({type: "name",value: params.name})
        if(params.brand) setSearchDetails({type: "brand",value: params.brand})
    }
    useEffect(() => {
        searchProducts && searchProducts(params)
        prepareSearchDetails()
    }, [])
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute", transitionEnd: {position: "unset"}}}
            exit={{opacity: 0, translateX: -30}}
            className={"py-16 pageComponent px-4"}
        >
            {
                /*foundProducts && foundProducts.length > 0 ? foundProducts.map(product => <div key={product.id}>{product.name}</div>) :
                    <h1>No Products found</h1>*/
                foundProducts &&
                    <motion.div
                initial={{opacity: 0, translateX: -30}}
                animate={{opacity: 1, translateX: 0, position: "absolute", transitionEnd: {position: "unset"}}}
                exit={{opacity: 0, translateX: -30}}
                >
                        <h1>Search Results for the {searchDetails?.type} "{searchDetails?.value}"</h1>
                        {
                            foundProducts?.length > 0 ? <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}>
                            {foundProducts?.map(product => <ProductSliderElement product={product}/>)}
                        </div>
                            : <h1>No Products Found</h1>
                        }
                    </motion.div>



            }
        </motion.div>
    )
}