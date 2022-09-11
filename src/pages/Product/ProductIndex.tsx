import {Link, useParams} from "react-router-dom";
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {ProductSliderComponent} from "../../components/ProductSlider/ProductSliderComponent";
import {FaPhotoVideo} from "react-icons/all";
import {ImageSliderElement} from "./components/ImageSliderElement";
import {formatPrice} from "../../utilities/utilities";
import {SHOP_SETTINGS} from "../../utilities/Config";
import {CounterComponent} from "../../components/Utilities/CounterComponent";
import {ProductToolsComponent} from "./components/ProductToolsComponent";
import {ProductDetailsComponent} from "./components/ProductDetailsComponent";
import {CategoryLinksComponent} from "./components/CategoryLinksComponent";
import {MotionPage} from "../../components/Utilities/MotionPage";

export const ProductIndex = () => {
    const params = useParams()
    const {relatedProducts, getProduct, openedProduct} = useContext(ProductsContext)
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>("")
    const [size, setSize] = useState<string>("")
    const dropdownClass = "shadow-xl px-2 py-2 rounded focus:outline-none transition focus:border-blue-700 hover:border-blue-700 border-1 border-blue-300"

    useEffect(() => {
        getProduct && getProduct(params.id!)
    }, [])
    return (
       <MotionPage>
            <div className={"w-full flex flex-col py-16 pageComponent"}>
                {openedProduct &&
                    <div className={"container m-auto"}>
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-20 my-10"}>
                            {
                                openedProduct.imgUrls ? <ImageSliderElement imgUrls={openedProduct.imgUrls}/>
                                    : <FaPhotoVideo/>}

                            <div>
                                <h1 className={"text-5xl font-semibold "}>{openedProduct.name}</h1>
                                <div style={{maxWidth: 400}}>

                                    {SHOP_SETTINGS.SHOW_SELLER &&
                                        <h3 className={"cursor-pointer font-semibold mb-4 hover:underline transition pl-1"}
                                            onClick={() => console.log(`show all products from ${SHOP_SETTINGS.SHOP_NAME}`)}>other
                                            products from {SHOP_SETTINGS.SHOP_NAME}</h3>}
                                    {/*TODO Reviews Element*/}
                                    <h2 className={"text-4xl font-semibold"}>{formatPrice(openedProduct.price)}</h2>
                                    <p className={"my-2 opacity-80 text-sm"}>{SHOP_SETTINGS.PRICE_ADDITIONAL_TEXT} <Link
                                        to={"/GTC"}
                                        className={"font-semibold hover:underline"}>{SHOP_SETTINGS.PRICE_ADDITIONAL_LINK_TEXT}</Link>
                                    </p>
                                    {/*Sizes and Colors TODO Custom Dropdown Component*/}
                                    {openedProduct.sizes &&

                                        <div className={"flex flex-col my-2"} style={{maxWidth: 400}}>
                                            <label className={"font-semibold text-lg"}>Sizes</label>
                                            <select className={dropdownClass}
                                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setSize(e.target.value)}
                                                    value={size}>
                                                <option value="">Please Select</option>
                                                {openedProduct.sizes.selection.map(size =>
                                                    <option value={size} key={size}>
                                                        {size} {openedProduct.sizes!.unit}
                                                    </option>)}
                                            </select>

                                        </div>
                                    }
                                    {openedProduct.colors &&

                                        <div className={"flex flex-col my-2"} style={{maxWidth: 400}}>
                                            <label className={"font-semibold text-lg"}>Colors</label>
                                            <select className={dropdownClass}
                                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setColor(e.target.value)}
                                                    value={color}>
                                                <option value="">Please Select</option>
                                                {openedProduct.colors.map(color =>
                                                    <option value={color} key={color}>
                                                        {color}
                                                    </option>)}
                                            </select>

                                        </div>
                                    }
                                    <CounterComponent setCount={setCount} count={count}/>
                                    <ProductToolsComponent count={count} color={color} size={size}/>
                                    {
                                        openedProduct.categories &&
                                        <CategoryLinksComponent categoriesArr={openedProduct.categories}
                                                                brand={openedProduct.brand}/>
                                    }
                                </div>
                            </div>
                        </div>
                        <ProductDetailsComponent product={openedProduct}/>
                        {relatedProducts &&
                            <ProductSliderComponent products={relatedProducts} title="Related Products"/>}
                    </div>
                }
            </div>
       </MotionPage>

    )
}