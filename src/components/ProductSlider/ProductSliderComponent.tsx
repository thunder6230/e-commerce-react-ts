import {FC} from "react";
import {IProduct} from "../../GlobalTypes";
import {ProductSliderElement} from "./components/ProductSliderElement";
interface Props {
    products: IProduct[],
    title: string
}
export const ProductSliderComponent:FC<Props> = ({title, products}) => {
    return (
        <div className={"shadow-md divide divide-gray-200 flex flex-col rounded"}>
            <div className={"py-2 px-4 bg-blue-700 rounded-t"}>
                <h2 className={" text-2xl font-semibold text-blue-100"}>{title}</h2>
            </div>
            <div className={"flex py-4"}>
                {products.map(product => <ProductSliderElement product={product} key={product.id}/>)}
            </div>
        </div>
    )
}