import {FaCartPlus, FaRegHeart} from "react-icons/all";

export const ProductToolsComponent = () => {
    const btnClasses = "flex items-center justify-center bg-blue-700 py-2 hover:bg-red-700 text-blue-50 text-xl rounded shadow-xl transition"
    return (
        <div className={"my-8 grid grid-flow-row gap-5 grid-rows-2"} style={{maxWidth:400}}>
            <button className={btnClasses}><FaCartPlus className={"text-xl mr-2"} />Add To Cart</button>

            <button className={btnClasses}><FaRegHeart className={"text-xl mr-2"}/> Add To Wishlist</button>

        </div>
    )
}