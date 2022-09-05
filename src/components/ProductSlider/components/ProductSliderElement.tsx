import {FC, useState} from "react";
import {IProduct} from "../../../GlobalTypes";
import {FaCartPlus, FaHeart, FaPhotoVideo, FaSearchPlus} from "react-icons/all";
import {motion} from "framer-motion"
import {Link} from "react-router-dom";
import {HoverMenuIconElement} from "./HoverMenuIconElement";

interface Props {
    product: IProduct
}

export const ProductSliderElement:FC<Props> = ({product}) => {
    const currency = import.meta.env.VITE_CURRENCY
    const formatPrice = (price: number | string) => {
        const formattedPrice = price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        return `${formattedPrice} ${currency}`
    }
    const [showHoverMenu, setShowHoverMenu] = useState<boolean>(false)

    return (
        <div
            className={"rounded mx-auto w-3/12"}
            onMouseEnter={() => setShowHoverMenu(true)}
            onMouseLeave={() => setShowHoverMenu(false)}
        >
            <div className={"p-2 h-full max-h-52 relative"}>
                <Link to={`/product/${product.id}`}>{
                    product.imgUrls && product.imgUrls.length > 0
                        ? <img src={product.imgUrls[0]}
                               style={{width: "100%", height: "100%", objectFit: "contain"}} alt={product.name}/>
                        : <FaPhotoVideo/>
                }</Link>
                <motion.ul
                    animate={{
                        opacity: showHoverMenu ? 1 : 0,
                        translateX: showHoverMenu ? 0 : "30px",
                        position: "absolute",
                        transition: {
                            duration: 0.5
                        }
                    }}
                    className={"bg-white bg-opacity-70 grid grid-rows-3 grid-flow-col h-full px-2 absolute right-0 top-0 gap-2 text-blue-700"}
                >
                        <HoverMenuIconElement callback={() => console.log("add to wishlist")} child={<FaHeart className={"h-8 w-8 m-auto"} />} />
                        <HoverMenuIconElement callback={() => console.log("add to Cart")} child={<FaCartPlus className={"h-8 w-8 m-auto"} />} />
                        <HoverMenuIconElement callback={() => console.log("open quickview")} child={<FaSearchPlus className={"h-8 w-8 m-auto"} />} />
                </motion.ul>


            </div>
            <div className={"flex flex-col items-center"}>
                <h3 className={"text-2xl "}>{product.name}</h3>
                {product.price && <p className={"text-2xl m-0"}>{formatPrice(product.price)}</p>}
            </div>
        </div>
    )
}