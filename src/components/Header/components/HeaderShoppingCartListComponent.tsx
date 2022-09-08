import {motion} from "framer-motion";
import {FC} from "react";
import {ICartItem} from "../../../GlobalTypes";
interface Props{
    cart: ICartItem[]
}
export const HeaderShoppingCartListComponent:FC<Props> = ({cart}) => {
    return (
        <motion.ul className={"absolute"} style={{width: 400, left: "-300px"}} animate={cart.length > 0 ? {
            opacity: 1,
            display:"block"
        } : {
            opacity:0,
            transitionEnd:{
                display: "none"
            }
        }}>
            { cart.map(cartItem => <li key={cartItem.product.id + cartItem.color + cartItem.size} className={"flex"}>{cartItem.count} x {cartItem.product.name} {cartItem.color} {cartItem.size ? `${cartItem.size} ${cartItem.product.sizes!.unit}` : ""}</li>)}
        </motion.ul>
    )
}