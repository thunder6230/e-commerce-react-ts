import {Link} from "react-router-dom";
import {FaBootstrap, FaIceCream} from "react-icons/all";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {motion} from "framer-motion"
import {HeaderCategoriesComponent} from "./components/HeaderCategoriesComponent";
export const HeaderComponent = () => {
    const [isCategoryDropdownOn, setIsCategoryDropdownOn] = useState<boolean>(false)
    const { categories } = useContext(ProductsContext)

    return (
        <header className="fixed w-full top-0 z-50 border-b-2 border-blue-500">
            <nav className="bg-blue-700">
                <div className="flex justify-between items-center py-2 container m-auto" >
                    <div className={"flex items-center"}>
                        <Link to="/"><FaBootstrap className={"text-blue-50 text-5xl"}/></Link>
                        <div className={"relative"}
                             onMouseEnter={() => setIsCategoryDropdownOn(true)}
                             >
                            <Link to="/categories" className={"px-3 py-2 font-semibold text-blue-100"}
                                  >Categories</Link>
                            {isCategoryDropdownOn ?
                            <motion.div
                                initial={{opacity: 0, translateY: -30}}
                                animate={{opacity: 1, translateX: 0, position: "absolute" }}
                                exit={{opacity: 0, translateY: -30}}
                                className={"absolute top-16 flex flex-col bg-blue-100 h-fit"} style={{border: "1px solid white"}}
                            >
                                 <HeaderCategoriesComponent callback={setIsCategoryDropdownOn} />
                            </motion.div> : null }
                        </div>

                    </div>
                    <div className="flex">
                            <Link to="/wishlist" className="text-blue-100 hover:bg-blue-100 transition hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Wishlist</Link>
                            <Link to="/cart" className="text-blue-100 hover:bg-blue-100 transition hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Shopping Cart</Link>
                            <Link to="/account" className="text-blue-100 hover:bg-blue-100 transition hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Account</Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}