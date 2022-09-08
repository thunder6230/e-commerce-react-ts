import {FaCartPlus, FaRegHeart} from "react-icons/all";
import {FC, useContext} from "react";
import {AccountContext} from "../../../context/AccountContext";
import {CartParams} from "../../../GlobalTypes";
import {ProductsContext} from "../../../context/ProductsContext";
interface Props{
    count: number,
    size?: string,
    color?: string
}
export const ProductToolsComponent:FC<Props> = ({count, size, color}) => {
    const {addToCart ,addToWishList} = useContext(AccountContext)
    const {openedProduct} = useContext(ProductsContext)
    const handleAddToCart = async () => {
        const params:CartParams = {
            product: openedProduct!,
            count,
            size: size !== "" ? size : undefined,
            color: color !== "" ? color : undefined,
        }
        addToCart && addToCart(params)
    }
    const btnClasses = "flex items-center justify-center bg-blue-700 py-2 hover:bg-red-700 text-blue-50 text-xl rounded shadow-xl transition"

    return (
        <div className={"my-8 grid grid-flow-row gap-5 grid-rows-2"} style={{maxWidth:400}}>
            <button className={btnClasses}  onClick={() => handleAddToCart()}><FaCartPlus className={"text-xl mr-2"}/>Add To Cart</button>
            {
                addToWishList &&
                <button className={btnClasses}
                        onClick={() => addToWishList(openedProduct!)}>
                    <FaRegHeart className={"text-xl mr-2"}/> Add To Wishlist
                </button>
            }


        </div>
    )
}