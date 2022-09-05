import {useContext} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {useParams} from "react-router-dom";

export const SearchIndex = () => {
    const {foundProducts} = useContext(ProductsContext)
    const params = useParams()
    console.log(params)
    return (
        <>
            {
                foundProducts && foundProducts.length > 0 ? foundProducts.map(product => <div>{product.name}</div>) :
                    <h1>No Products found</h1>
            }
                </>
    )
}