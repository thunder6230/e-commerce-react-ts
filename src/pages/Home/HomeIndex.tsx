import {BannerComponent} from "../../components/Banner/BannerComponent";
import {IImg} from "../../GlobalTypes";
import {Fragment, useContext, useEffect} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {ProductSliderComponent} from "../../components/ProductSlider/ProductSliderComponent";
import {MotionPage} from "../../components/Utilities/MotionPage";

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
        <MotionPage>
            <BannerComponent images={images} />
           <Fragment>
                {topProducts &&
                    <div className={"container m-auto my-8 "}>
                        <ProductSliderComponent products={topProducts} title="Top Products" />
                    </div>
                }
           </Fragment>

            </MotionPage>

        // </motion.div>
    )
}