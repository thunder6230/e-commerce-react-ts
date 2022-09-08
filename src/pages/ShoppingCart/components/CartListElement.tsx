import {Link} from "react-router-dom";
import {formatImage, formatPrice} from "../../../utilities/utilities";
import {FaPhotoVideo, FaRegHeart, FaTimes} from "react-icons/all";
import {CounterComponent} from "../../../components/Utilities/CounterComponent";
import {FC, useContext, useEffect, useState} from "react";
import {ICartItem} from "../../../GlobalTypes";
import {AccountContext} from "../../../context/AccountContext";

interface Props {
    cartItem: ICartItem
}

export const CartListElement:FC<Props> = ({cartItem}) => {
    const {removeFromCart, setCountCartItem, addToWishList} = useContext(AccountContext)
    const [count, setCount] = useState<number>(cartItem.count)
    const handleRemove = (cartItem: ICartItem) => {
        if(confirm(`Are you sure you want to delete ${cartItem.product.name} ?`))
            removeFromCart && removeFromCart(cartItem)
    }
    useEffect(() => setCountCartItem && setCountCartItem(cartItem, count), [count])
    return (
        <li key={cartItem.product.id + cartItem.color + cartItem.size}
            className={"flex text-blue-700 py-4 hover:bg-blue-100 transition"}>
            <div className={"grid grid-cols-7 lg:grid-cols-12 relative"}>
                <div className={"mr-2 flex items-center"}>
                    <Link to={`/product/${cartItem.product.id}`}>
                        {
                            cartItem.product.thumbnail
                                ? <img src={formatImage(cartItem.product.thumbnail)} width={150} height={150}
                                       alt={cartItem.product.name}/>
                                : <FaPhotoVideo/>
                        }
                    </Link>
                </div>
                <div className={"flex col-span-2 lg:col-span-7 lg:items-start justify-center lg:justify-start flex-col lg:flex-row"} style={{minHeight: 60}}>
                    <Link to={`/product/${cartItem.product.id}`}><h4
                        className={"m-0 font-semibold text-lg lg:text-2xl"}>{cartItem.product.name}</h4></Link>
                    {
                        cartItem.color && <p className={"lg:mx-4 text-md lg:text-xl font-semibold"}>Color:  {cartItem.color}</p>
                    }
                    {
                        cartItem.size && <p className={"lg:mx-4 text-md lg:text-xl font-semibold"}>Size: {cartItem.size} {cartItem.product.sizes!.unit}</p>
                    }
                </div>
                <CounterComponent setCount={setCount} count={count} cssClass="col-span-2 {/*mt-4 lg:mt-2*/}" showLabel={false} />

                <div className={"absolute bottom-0 right-2 col-2 lg-col-1"}>
                    <p className={"font-semibold text-xl lg:text-2xl"}>{formatPrice(cartItem.count * cartItem.product.price)}</p>
                </div>
                <div className={"absolute top-0 right-0 flex"}>
                    <button  className={"p-1"}>
                        <FaRegHeart  onClick={() => addToWishList && addToWishList(cartItem.product)} className={"text-blue-700 hover:text-red-700 hover:scale-110 transition text-xl ml-2"}/>
                    </button>
                    <button onClick={() => handleRemove(cartItem)} className={"p-1"}>
                        <FaTimes className={"text-red-500 text-xl hover:rotate-90 transition"}/>
                    </button>
                </div>
            </div>
        </li>
    )
}