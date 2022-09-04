import {Link} from "react-router-dom";
import {FaBootstrap, FaRegHeart, FaRegUser, FaShoppingCart} from "react-icons/all";
import { useState} from "react";
import {motion} from "framer-motion"
import {HeaderCategoriesComponent} from "./components/HeaderCategoriesComponent";
export const HeaderComponent = () => {
    const [isCategoryDropdownOn, setIsCategoryDropdownOn] = useState<boolean>(false)
    const dropdownAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            position: "absolute",
            transition: {
                duration: 0.5
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -30,
            transition: {
                duration: 0.5,
                delay: 0.2,
            },
            transitionEnd: {
                display: "none"
            }

        },
    }
    return (
        <header className="fixed w-full top-0 z-50 border-b-2 border-blue-500">
            <nav className="bg-blue-700">
                <div className="flex justify-between items-center py-2 container m-auto" >
                    <div className={"flex items-center"}>
                        <Link to="/"><FaBootstrap className={"text-blue-50 text-5xl"}/></Link>
                        <motion.div className={"relative"}
                             onMouseEnter={() => setIsCategoryDropdownOn(true)}
                             onMouseLeave={() => setIsCategoryDropdownOn(false)}>
                            <Link to="/categories" className={"px-3 py-2 font-semibold text-blue-100"}
                                  >Categories</Link>
                            <motion.div
                                initial={{opacity: 0, translateY: -30}}
                                animate={isCategoryDropdownOn ? "enter" : "exit"}
                                variants={dropdownAnimate}
                                className={"absolute top-16 flex flex-col bg-blue-100 h-fit"} style={{border: "1px solid white"}}
                            >
                                <HeaderCategoriesComponent />
                            </motion.div>
                        </motion.div>

                    </div>
                    <div className="flex">
                            <Link to="/wishlist" className="text-blue-100 hover:text-cyan-400 transition hover:text-blue-700 p-2 font-medium"><FaRegHeart className={"text-3xl"}/></Link>
                            <Link to="/cart" className="text-blue-100 hover:text-cyan-400 transition hover:text-blue-700 p-2 mx-2 "><FaShoppingCart className={"text-3xl"} /></Link>
                            <Link to="/account" className="text-blue-100 hover:text-cyan-400 transition hover:text-blue-700 p-2"><FaRegUser className={"text-3xl"} /></Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}