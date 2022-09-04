import {motion} from "framer-motion"
import {BannerComponent} from "../../components/Banner/BannerComponent";
import {IImg, IProduct} from "../../GlobalTypes";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ProductsContext, ProductsContextProvider} from "../../context/ProductsContext";
import {ProductSliderComponent} from "../../components/ProductSlider/ProductSliderComponent";

export const HomeIndex = () => {
    const {topProducts, getTopProducts, getCategories} = useContext(ProductsContext)
    const images:IImg[] = [
        {
            imgUrl: "/img/banner.jpg",
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
            animate={{opacity: 1, translateX: 0, position: "absolute" }}
            exit={{opacity: 0, translateX: -30}}
            className={"w-full flex flex-col py-16"}
        >
            <BannerComponent images={images} />
            {topProducts && <ProductSliderComponent products={topProducts} title="Top Products" />}

        </motion.div>
    )
}