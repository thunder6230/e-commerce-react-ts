import {FC} from "react";
import {IProduct} from "../../GlobalTypes";
import {ProductSliderElement} from "./components/ProductSliderElement";
interface Props {
    products: IProduct[],
    title: string
}
export const ProductSliderComponent:FC<Props> = ({title, products}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {products.map(product => <ProductSliderElement product={product} key={product.id}/>)}
            </div>
        </div>
    )
}