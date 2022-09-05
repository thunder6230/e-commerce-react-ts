import Carousel from "better-react-carousel";
import {formatImage} from "../../../utilities/utilities";
import {FC} from "react";

interface Props{
    imgUrls: string[]
}
export const ImageSliderElement:FC<Props> = ({imgUrls}) => {
    return (
        <div className={""}>
            {
                    <Carousel gap={10} loop rows={1} autoplay  showDots scrollSnap>
                        {
                            imgUrls.map((url,index) =>
                                <Carousel.Item key={url}>
                                    <img src={formatImage(url)} alt={`Image ${index + 1}`} onClick={() => console.log("open fullscreen imggallery")}/>
                                </Carousel.Item>)
                        }
                    </Carousel>
            }
        </div>
    )
}