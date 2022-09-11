import {FC, useContext, useState} from "react";
import {IProduct} from "../../../GlobalTypes";
import {FaCartPlus, FaHeart, FaPhotoVideo, FaSearchPlus} from "react-icons/all";
import {motion} from "framer-motion"
import {Link, useNavigate} from "react-router-dom";
import {HoverMenuIconElement} from "./HoverMenuIconElement";
import {formatImage, formatPrice} from "../../../utilities/utilities";
import {AccountContext} from "../../../context/AccountContext";

interface Props {
    product: IProduct
}

export const ProductSliderElement:FC<Props> = ({product}) => {

    const [showHoverMenu, setShowHoverMenu] = useState<boolean>(false)
    const {addToWishList, addToCart} = useContext(AccountContext)
    const navigate = useNavigate()
    const handleAddToCart = () => {
        if(product.sizes && product.colors) return navigate(`/product/${product.id}`)
        addToCart && addToCart({product,  count: 1})
    }
    return (
        <div
            className={"rounded p-3 h-full"}
            onMouseEnter={() => setShowHoverMenu(true)}
            onMouseLeave={() => setShowHoverMenu(false)}
        >
            <div className={"p-2 h-full max-h-52 relative"}>
                <Link to={`/product/${product.id}`}>{
                    product.thumbnail ?
                        <img src={formatImage(product.thumbnail)}
                             loading={"lazy"}
                               style={{width: "100%", height: "100%", objectFit: "contain"}}
                             alt={product.name} title={product.name}/>
                        : <FaPhotoVideo title={product.name}/>
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

                            <HoverMenuIconElement callback={() => addToWishList && addToWishList(product)} child={<FaHeart className={"h-8 w-8 m-auto"} />} />
                            <HoverMenuIconElement callback={() => handleAddToCart()} child={<FaCartPlus className={"h-8 w-8 m-auto"} />} />
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