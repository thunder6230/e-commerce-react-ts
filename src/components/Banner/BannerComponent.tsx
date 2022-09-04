import {FC} from "react";
import {IImg} from "../../GlobalTypes";
import {BannerElement} from "./BannerElement";

interface Props {
    images: IImg[]
}
export const BannerComponent:FC<Props> = ({images}) => {
    return (
        <div className={"relative "}>
            {images.map(img => {
               return <BannerElement img={img} key={img.imgUrl}/>
            })}

        </div>

    )
}