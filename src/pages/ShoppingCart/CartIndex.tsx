import {motion} from "framer-motion"
import {Link} from "react-router-dom";
import { formatPrice} from "../../utilities/utilities";
import {useContext, useEffect} from "react";
import {AccountContext} from "../../context/AccountContext";
import {ProductsContext} from "../../context/ProductsContext";
import {ProductSliderComponent} from "../../components/ProductSlider/ProductSliderComponent";
import {CartListElement} from "./components/CartListElement";
export const CartIndex = () => {
    const {cartItems, cartAmount} = useContext(AccountContext)
    const {topProducts, getTopProducts} = useContext(ProductsContext)
    const buttonCss = "px-4 py-2 bg-blue-700 hover:bg-red-700 rounded shadow-xl text-white transition text-xl mt-4 inline-block"

    useEffect(() => {getTopProducts && getTopProducts()}, [])
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute",transitionEnd:{position:"unset"} }}
            exit={{opacity: 0, translateX: -30}}
            className={"w-full flex flex-col py-16 pageComponent container m-auto"}
        >
            <h1 className={"text-5xl my-8"}>Shopping Cart</h1>
            {cartItems && cartItems.length > 0 ?
                <div className={"w-full mb-8"}>

                    <ul className={"divide-y divide-blue-700 divide-opacity-30 pl-2 pr-3 "}>
                        { cartItems.map(cartItem =>  <CartListElement cartItem={cartItem} />) }
                    </ul>
                    <div className={"flex flex-col py-2 px-4 items-end border-t-1 border-blue-700 border-opacity-30"}>

                        <p className={"text-xl"}>Total: <span
                            className={"font-semibold text-xl lg:text-2xl"}>{formatPrice(cartAmount!)}</span></p>
                    <Link to={"/checkout"}
                          className={buttonCss}>Cash Out</Link>
                    </div>
                </div>
                : <div className={"my-8"}>
                    <h4 className={"text-3xl"}>Your Cart is empty</h4>
                    <Link to={"/categories"} className={buttonCss}>Go To Categories</Link>
                </div>
            }
            <ProductSliderComponent products={topProducts!} title="Top Products"/>
        </motion.div>
    )
}