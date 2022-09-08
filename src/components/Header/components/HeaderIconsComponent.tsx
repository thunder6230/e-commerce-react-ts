import {Link} from "react-router-dom";
import {FaRegHeart, FaRegUser, FaShoppingCart} from "react-icons/all";
import {useContext, useState} from "react";
import {AccountContext} from "../../../context/AccountContext";
import {HeaderIconCounterElement} from "./HeaderIconCounterElement";
import {HeaderShoppingCartListComponent} from "./HeaderShoppingCartListComponent";
import {HeaderIconElement} from "./HeaderIconElement";

export const HeaderIconsComponent = () => {
    const { cartItems, wishList} = useContext(AccountContext)
    const [showCartList, setCartShowList] = useState<boolean>(false)
    return (
            <div className="flex relative">
                <HeaderIconElement url="/wishlist">
                        <FaRegHeart className={"text-3xl"}/>
                         <HeaderIconCounterElement itemList={wishList!} />
                </HeaderIconElement>
                <div className={"mx-1 relative"} onMouseEnter={() => setCartShowList(true)} onMouseLeave={() => setCartShowList(false)}>
                    <Link to={"/cart"} className="text-blue-100 hover:text-red-600 transition inline-block p-2 relative">
                        <FaShoppingCart className={"text-3xl"} />
                    </Link>
                    <HeaderIconCounterElement itemList={cartItems!} />
                    <HeaderShoppingCartListComponent cartItems={cartItems!} showCartList={showCartList}/>
                </div>
                <HeaderIconElement url="/account">
                    <FaRegUser className={"text-3xl"} />
                </HeaderIconElement>
            </div>
    )
}