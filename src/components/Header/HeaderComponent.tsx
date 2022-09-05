import {Link} from "react-router-dom";
import {FaBootstrap, FaRegHeart, FaRegUser, FaSearch, FaShoppingCart} from "react-icons/all";
import { useState} from "react";
import {motion} from "framer-motion"
import {HeaderCategoriesComponent} from "./components/HeaderCategoriesComponent";
export const HeaderComponent = () => {
    const [isCategoryDropdownOn, setIsCategoryDropdownOn] = useState<boolean>(false)
    const [isInputFocus, setIsInputFocus] = useState<boolean>(false)
   const searchFocusStyle= {
        boxShadow: "0 0 300px 300px rgba(0,0,0)",

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
                                animate={isCategoryDropdownOn ?  {
                                    opacity: 1,
                                    rotateX: 0,
                                    position: "absolute",
                                    display: "block"
                                } : {
                                    opacity: 0,
                                    rotateX: -30,
                                    transitionEnd: {
                                        display: "none"
                                    }

                                }}
                                transition={{duration: 0.5}}
                                className={"absolute top-16 flex flex-col bg-blue-100 h-fit"} style={{border: "1px solid white"}}
                            >
                                <HeaderCategoriesComponent />
                            </motion.div>
                        </motion.div>

                    </div>
                    <div className={"w-full"} style={{maxWidth: 400,}}>
                        <form >
                            <div className={"relative "} >
                                <input type="text" placeholder={"What are you looking for?"}
                                       className={`px-4 py-1 text-lg rounded w-full transition focus:outline-none ${isInputFocus ? 'border-2 border-blue-400' : ''}`}
                                       style={isInputFocus ? searchFocusStyle : {}}
                                       onFocus={() => setIsInputFocus(true)}
                                       onBlur={() => setIsInputFocus(false)}
                                />
                                <div  className={"absolute right-0 inset-y-2/4 p-2 "}>
                                    <FaSearch/>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="flex">
                            <Link to="/wishlist" className="text-blue-100 hover:text-red-600 transition  p-2 font-medium"><FaRegHeart className={"text-3xl"}/></Link>
                            <Link to="/cart" className="text-blue-100 hover:text-red-600 transition p-2 mx-2 "><FaShoppingCart className={"text-3xl"} /></Link>
                            <Link to="/account" className="text-blue-100 hover:text-red-600 transition  p-2"><FaRegUser className={"text-3xl"} /></Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}