import {FC, useEffect, useState} from "react";
import {IProduct} from "../../GlobalTypes";
import {ProductSliderElement} from "./components/ProductSliderElement";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
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
        <div className={"shadow-md divide divide-gray-200 rounded"}>
            <div className={"py-2 px-4 bg-blue-700 rounded-t"}>
                <h2 className={" text-2xl font-semibold text-blue-100"}>{title}</h2>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                navigation={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className={"px-2"}
            style={{height:350}}>
                {
                    totalProducts && totalProducts.map((product,index) =>
                        <SwiperSlide key={product.id + index}>
                            <ProductSliderElement product={product} key={product.id}/>
                        </SwiperSlide>)

                }
            </Swiper>
        </div>
    )
}