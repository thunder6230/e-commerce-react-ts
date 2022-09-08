import {Link} from "react-router-dom";
import {FaRegHeart, FaRegUser, FaShoppingCart} from "react-icons/all";
import {useContext} from "react";
import {AccountContext} from "../../../context/AccountContext";
import {HeaderIconCounterElement} from "./HeaderIconCounterElement";
import {HeaderShoppingCartListComponent} from "./HeaderShoppingCartListComponent";

export const HeaderIconsComponent = () => {
    const { cart, wishList} = useContext(AccountContext)
    return (
            <div className="flex">
                <div className={"mx-1 relative"}>
                    <Link to="/wishlist" className="text-blue-100 hover:text-red-600 transition inline-block p-2 relative">
                        <FaRegHeart className={"text-3xl"}/>
                        {
                            wishList && <HeaderIconCounterElement itemList={wishList} />
                        }
                    </Link>
                </div>
                <div className={"mx-1 relative"} >
                    <Link to="/cart" className="text-blue-100 hover:text-red-600 transition inline-block p-2 relative">
                        <FaShoppingCart className={"text-3xl"} />
                        {
                            cart && <HeaderIconCounterElement itemList={cart} />
                        }
                    </Link>
                    {
                        cart && <HeaderShoppingCartListComponent cart={cart} />
                    }
                </div>
               <div className={"relative mx-1 "}>
                <Link to="/account" className="text-blue-100 hover:text-red-600 transition inline-block p-2">
                    <FaRegUser className={"text-3xl"} /></Link>
               </div>
            </div>
    )
}