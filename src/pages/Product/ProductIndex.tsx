import {Link, useNavigate, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {ProductSliderComponent} from "../../components/ProductSlider/ProductSliderComponent";
import { FaPhotoVideo} from "react-icons/all";
import {ImageSliderElement} from "./components/ImageSliderElement";
import {formatPrice} from "../../utilities/utilities";
import {SHOP_SETTINGS} from "../../utilities/Config";
import {CounterComponent} from "../../components/Utilities/CounterComponent";
import {ProductToolsComponent} from "./components/ProductToolsComponent";
import {ProductDetailsComponent} from "./components/ProductDetailsComponent";

export const ProductIndex = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {relatedProducts, getProduct, openedProduct} = useContext(ProductsContext)
    const [count, setCount] = useState<number>(1)
    const dropdownClass = "shadow-xl px-2 py-2 rounded focus:outline-none transition focus:border-blue-700 hover:border-blue-700 border-1 border-blue-300"
    const handleSearchBrand = (brand: string) => {
        navigate(`/search/brand/${brand}`)
    }
    useEffect(() => { getProduct && getProduct(params.id!)}, [])
    console.log(params)
    return (
       <motion.div
            initial={{opacity: 0, translateX: -30}}
            animate={{opacity: 1, translateX: 0, position: "absolute",transitionEnd:{position:"unset"} }}
            exit={{opacity: 0, translateX: -30}}
            className={"py-16 pageComponent px-4"}
        >
           {openedProduct &&
               <div className={"container m-auto"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-20 my-10"}>
                    {
                        openedProduct.imgUrls ? <ImageSliderElement imgUrls={openedProduct.imgUrls} />
                    : <FaPhotoVideo />}

                    <div>
                        <h1 className={"text-5xl font-semibold "}>{openedProduct.name}</h1>
                        <div style={{maxWidth:400}}>

                            {SHOP_SETTINGS.SHOW_SELLER  && <h3 className={"cursor-pointer font-semibold mb-4 hover:underline transition pl-1"} onClick={() => console.log(`show all products from ${SHOP_SETTINGS.SHOP_NAME}`)}>other products from {SHOP_SETTINGS.SHOP_NAME}</h3>}
                            {/* TODO Reviews Element*/}
                            <h2 className={"text-4xl font-semibold"}>{formatPrice(openedProduct.price)}</h2>
                            <p className={"my-2 opacity-80 text-sm"}>{SHOP_SETTINGS.PRICE_ADDITIONAL_TEXT} <Link to={"/GTC"} className={"font-semibold hover:underline"}>{SHOP_SETTINGS.PRICE_ADDITIONAL_LINK_TEXT}</Link></p>
                            {/*Sizes and Colors TODO Custom Dropdown Component*/}
                            { openedProduct.sizes &&

                                <div className={"flex flex-col my-2"} style={{maxWidth:400}}>
                                    <label className={"font-semibold text-lg"}>Sizes</label>
                                    <select className={dropdownClass}>
                                        { openedProduct.sizes.selection.map(size =>
                                            <option value={size}>
                                                {size} {openedProduct.sizes!.unit}
                                            </option>) }
                                    </select>

                                </div>
                            }
                            { openedProduct.colors &&

                                <div className={"flex flex-col my-2"} style={{maxWidth:400}}>
                                    <label className={"font-semibold text-lg"}>Colors</label>
                                    <select className={dropdownClass}>
                                        { openedProduct.colors.map(color =>
                                            <option value={color}>
                                                {color}
                                            </option>) }
                                    </select>

                                </div>
                            }
                            <CounterComponent setCount={setCount} count={count} />
                            <ProductToolsComponent />
                        </div>
                        {/*{openedProduct.brand !== "" && <h3 className={"my-2 cursor-pointer font-semibold"} onClick={() => handleSearchBrand(openedProduct.brand)}>{openedProduct.brand}</h3>}*/}
                    </div>
                </div>
                <ProductDetailsComponent product={openedProduct}/>
                {relatedProducts && <ProductSliderComponent products={relatedProducts} title="Related Products"/>}
            </div>
       }
        </motion.div>

    )
}