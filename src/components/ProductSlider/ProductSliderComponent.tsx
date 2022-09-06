import {FC, useEffect, useState} from "react";
import {IProduct} from "../../GlobalTypes";
import {ProductSliderElement} from "./components/ProductSliderElement";
import Carousel from "better-react-carousel";

interface Props {
    products: IProduct[],
    title: string
}

export const ProductSliderComponent: FC<Props> = ({title, products}) => {
    const [totalProducts, setTotalProducts] = useState<IProduct[]>([])
    const prepareSlideSHowItems = () => {
        setTotalProducts(prevState =>
            prevState.length < 12
                ? [...prevState].concat(products)
                : prevState
        )

    }
    useEffect(() => setTotalProducts(prevState => [...prevState].concat(products)), [])
    useEffect(() => prepareSlideSHowItems(), [totalProducts])
    return (
        <div className={"shadow-md divide divide-gray-200 flex flex-col rounded"}>
            <div className={"py-2 px-4 bg-blue-700 rounded-t"}>
                <h2 className={" text-2xl font-semibold text-blue-100"}>{title}</h2>
            </div>
            <Carousel gap={10} loop rows={1} cols={4} autoplay={5000} showDots>
                {
                       totalProducts.length > 11 && totalProducts.map((product) =>
                        <Carousel.Item key={product.id}>
                            <ProductSliderElement product={product} key={product.id}/>
                        </Carousel.Item>)

                }
            </Carousel>
        </div>
    )
}