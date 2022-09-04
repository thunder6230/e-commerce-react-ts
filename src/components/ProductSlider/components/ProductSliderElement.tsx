import {FC} from "react";
import {IProduct} from "../../../GlobalTypes";
import {FaPhotoVideo} from "react-icons/all";
interface Props {
    product: IProduct
}
export const ProductSliderElement:FC<Props> = ({product}) => {
    return (
        <div>
            <div>
                {
                    product.imgUrls && product.imgUrls.length > 0
                        ? <img src={product.imgUrls[0]} style={{width: "100%", height:"auto"}} />
                        : <FaPhotoVideo />
                }

            </div>
        </div>
    )
}