import {motion} from "framer-motion";
import {FC, useContext} from "react";
import {ICartItem} from "../../../../GlobalTypes";
import {formatImage, formatPrice} from "../../../../utilities/utilities";
import {FaPhotoVideo, FaTimes} from "react-icons/all";
import {AccountContext} from "../../../../context/AccountContext";
import {Link} from "react-router-dom";
interface Props{
    cartItems: ICartItem[],
    showCartList: boolean
}
export const HeaderShoppingCartListComponent:FC<Props> = ({cartItems, showCartList}) => {
    const {removeFromCart, cartAmount} = useContext(AccountContext)
    const handleRemove = (cartItem: ICartItem) => {
        if(confirm(`Are you sure you want to delete ${cartItem.product.name} ?`))
            removeFromCart && removeFromCart(cartItem)
    }
    return (
        <motion.div className={"absolute bg-blue-50 rounded shadow-xl border-1 border-blue-700 border-opacity-30 top-3/4 right-0"}
                    style={{width: 300}} animate={showCartList && cartItems.length > 0 ? {
            opacity: 1,
            display:"block"
        } : {
            opacity:0,
            transitionEnd:{
                display: "none"
            }
        }}>

        <ul className={"divide-y divide-blue-700 divide-opacity-30 pl-2 pr-3"} style={{maxHeight:500,overflow:"auto"}}>
            { cartItems.map(cartItem =>
                    <li key={cartItem.product.id + cartItem.color + cartItem.size} className={"flex text-blue-700 py-2 hover:bg-blue-100 transition"}>
                        <div className={"grid grid-cols-4 relative"}>
                            <div className={"mr-2 flex items-center"}>
                                <Link to={`/product/${cartItem.product.id}`}>
                                    {
                                    cartItem.product.thumbnail
                                        ? <img src={formatImage(cartItem.product.thumbnail)} width={60} height={60} alt={cartItem.product.name}/>
                                        : <FaPhotoVideo />
                                    }
                                </Link>
                            </div>
                            <div className={"flex flex-col col-span-2"}>
                                <Link to={`/product/${cartItem.product.id}`}><h4 className={"m-0 font-semibold"}>{cartItem.product.name}</h4></Link>
                                <p className={"m-0"}>
                                {cartItem.color && cartItem.color} {cartItem.size && `${cartItem.size} ${cartItem.product.sizes!.unit}` }
                                </p>
                                <p className={"m-0"}>Quantity: {cartItem.count}</p>
                            </div>
                            <div className={"absolute bottom-0 -right-2 font-semibold"}>
                                <p>{formatPrice(cartItem.count * cartItem.product.price)}</p>
                            </div>
                            <div className={"absolute top-0 right-2"}>
                                <FaTimes className={"text-red-500 text-lg absolute hover:rotate-90 transition"} onClick={() => handleRemove(cartItem)}/>
                            </div>
                        </div>
                    </li>

                )
            }
            </ul>
            <div className={"flex justify-between p-2 items-center border-t-1 border-blue-700 border-opacity-30"}>
                <Link to={"/cart"} className={"px-4 py-2 bg-blue-700 hover:bg-red-700 rounded shadow-xl text-white transition"}>Open Cart</Link>
                <p className={"text-xl"}>Total: <span className={"font-semibold text-xl"}>{formatPrice(cartAmount!)}</span></p>
            </div>
        </motion.div>
    )
}