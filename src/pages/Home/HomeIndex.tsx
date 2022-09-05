import {motion} from "framer-motion"
import {BannerComponent} from "../../components/Banner/BannerComponent";
import {IImg} from "../../GlobalTypes";
import {useContext, useEffect} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {ProductSliderComponent} from "../../components/ProductSlider/ProductSliderComponent";

export const HomeIndex = () => {
    const {topProducts, getTopProducts} = useContext(ProductsContext)
    const images:IImg[] = [
        {
            imgUrl: "/img/banner",
            alt: "banner",
            button:{
                link: "/wishlist",
                text: "go to wishlist"
            },
            title: "Example TItle",
            subtitle: "Example subtitle Example subtitle Example subtitle Example subtitle "
        }
    ]


    useEffect(() => {getTopProducts && getTopProducts()}, [])
    return (
        <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute", transitionEnd:{position:"unset"} }}
            exit={{opacity: 0, translateX: -30}}
            className={"w-full flex flex-col py-16 pageComponent"}
        >
            <BannerComponent images={images} />
            {topProducts &&
                <div className={"container m-auto my-8 "}>
                    <ProductSliderComponent products={topProducts} title="Top Products" />
                </div>
            }

        </motion.div>
    )
}