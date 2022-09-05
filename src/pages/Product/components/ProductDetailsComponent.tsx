import {FC} from "react";
import {IProduct} from "../../../GlobalTypes";
interface Props {
    product: IProduct
}
export const ProductDetailsComponent:FC<Props> = ({product}) => {
    return (
        <div className={""}>
            <h1 className={"text-5xl mt-4 mb-12 text-center"}>{product.name}</h1>
            {
                product.description &&
                <div className={"my-8"}>
                    <h2 className={"font-semibold text-2xl mb-4"}>Description</h2>
                    <p className={"leading-7 text-lg text-justify"}>{product.description}</p>
                </div>
            }
            {
                product.specifications &&
                <div className={"my-8"}>
                    <h2 className={"font-semibold text-2xl mb-4"}>Specifications</h2>
                    <div>
                        {product.specifications.map(element => <div className={"flex justify-between"}><label>{element.title}</label><p>{element.content}</p></div> )}

                    </div>
                </div>
            }
        </div>
    )
}