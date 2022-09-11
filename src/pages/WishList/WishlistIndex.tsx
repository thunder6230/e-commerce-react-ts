import {motion} from "framer-motion"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AccountContext} from "../../context/AccountContext";
import {WishListElement} from "./components/WishListElement";


export const WishlistIndex = () => {
    const {wishList} = useContext(AccountContext)
    const buttonCss = "px-4 py-2 bg-blue-700 hover:bg-red-700 rounded shadow-xl text-white transition text-xl mt-4 inline-block"

    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute", transitionEnd: {position: "unset"}}}
            exit={{opacity: 0, translateX: -30}}
        >
            <div className={"w-full flex flex-col py-16 pageComponent"}>
                <h1 className={"text-5xl my-8"}>Shopping Cart</h1>
                {wishList && wishList.length > 0 ?
                    <div className={"w-full mb-8"}>

                        <ul className={"divide-y divide-blue-700 divide-opacity-30 pl-2 pr-3 "}>
                            {wishList.map(product => <WishListElement product={product} key={product.id}/>)}
                        </ul>
                    </div>
                    : <div className={"my-8"}>
                        <h4 className={"text-3xl"}>Your Wishlist is empty</h4>
                        <Link to={"/categories"} className={buttonCss}>Go To Categories</Link>
                    </div>
                }
            </div>
        </motion.div>
    )
}