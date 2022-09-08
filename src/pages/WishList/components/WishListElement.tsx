import {Link, useNavigate} from "react-router-dom";
import {formatImage} from "../../../utilities/utilities";
import {FaCartPlus, FaPhotoVideo, FaTimes} from "react-icons/all";
import {FC, useContext} from "react";
import { IProduct} from "../../../GlobalTypes";
import {AccountContext} from "../../../context/AccountContext";
import {motion} from "framer-motion";

interface Props {
    product: IProduct
}

export const WishListElement:FC<Props> = ({product}) => {
    const { removeFromWishList, addToCart} = useContext(AccountContext)
    const navigate  = useNavigate()
    const handleRemove = (product: IProduct) => {
        if(confirm(`Are you sure you want to remove ${product.name} ?`))
            removeFromWishList && removeFromWishList(product)
    }
    const handleAddToCart = () => {
        if(product.sizes && product.colors) return navigate(`/product/${product.id}`)
        addToCart && addToCart({product,  count: 1})
    }
    return (

        <motion.li key={product.id}
            className={"flex text-blue-700 py-4"}>
            <div className={"flex relative justify-between w-full"}>
                <div className={"flex"}>
                    <div className={"mr-2 flex items-center"}>
                        <Link to={`/product/${product.id}`}>
                            {
                                product.thumbnail
                                    ? <img src={formatImage(product.thumbnail)} width={150} height={150}
                                           alt={product.name}/>
                                    : <FaPhotoVideo/>
                            }
                        </Link>
                    </div>
                    <div className={"flex col-span-2 lg:col-span-3 lg:items-start justify-center lg:justify-start flex-col lg:flex-row"} style={{minHeight: 60}}>
                        <Link to={`/product/${product.id}`}><h4
                            className={"m-0 font-semibold text-lg lg:text-2xl"}>{product.name}</h4></Link>
                    </div>

                </div>
                <div className={"flex items-center"}>
                    <button
                        onClick={() => handleAddToCart()}
                        className={"py-2 px-4 bg-blue-700 flex items-center rounded text-blue-50 shadow-xl ml-2 hover:scale-110 transition hover:bg-red-700 text-xl"}>
                        <FaCartPlus className={"  transition  mr-2"}/>
                        Add To Cart
                    </button>
                    <button onClick={() => handleRemove(product)}  className={"py-2 px-4 bg-red-700  text-xl items-center flex rounded text-blue-50 shadow-xl hover:scale-110 transition ml-2"}>
                        <FaTimes className={" mr-2"}/>
                        Remove
                    </button>
                </div>
            </div>
        </motion.li>
    )
}