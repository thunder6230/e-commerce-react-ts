import {Link} from "react-router-dom";
import {FaBootstrap} from "react-icons/all";
import { useState} from "react";
import {motion} from "framer-motion"
import {HeaderCategoriesComponent} from "./components/HeaderCategoriesComponent";
import {SearchComponent} from "./components/SearchComponent";
import {HeaderIconsComponent} from "./components/HeaderIconsComponent";
export const HeaderComponent = () => {
    const [isCategoryDropdownOn, setIsCategoryDropdownOn] = useState<boolean>(false)
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
                    <SearchComponent />
                    <HeaderIconsComponent />
                </div>

            </nav>
        </header>
    )
}