import {formatImage} from "../../../utilities/utilities";
import {FC} from "react";
import {Swiper, SwiperSlide}  from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/lazy";
import "swiper/css/pagination";
import {Autoplay, EffectCube, Lazy, Navigation, Pagination} from "swiper";
interface Props {
    imgUrls: string[]
}

export const ImageSliderElement: FC<Props> = ({imgUrls}) => {

    return (
        <Swiper
            style={{height:350, width:400}}
            effect={"cube"}
            grabCursor={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            cubeEffect={{
                shadow: true,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            lazy={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[EffectCube, Pagination, Navigation, Autoplay, Lazy]}
        >
                {imgUrls.map((url, index) =>
                    <SwiperSlide key={url} >
                        <img data-src={formatImage(url)} alt={`Image ${index + 1}`} className={"swiper-lazy"}
                             onClick={() => console.log("open fullscreen imggallery")}/>
                    </SwiperSlide>)
                }

        </Swiper>

    )
}