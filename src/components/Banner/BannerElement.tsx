import {IImg} from "../../GlobalTypes";
import {FC} from "react";
import {Link} from "react-router-dom";
import {formatImage} from "../../utilities/utilities";

interface Props {
    img: IImg
}
export const BannerElement:FC<Props> = ({img}) => {
    return (
        <div className={"relative w-full"}>
            <img src={formatImage(img.imgUrl)} alt={img.alt} key={img.imgUrl}  style={{maxHeight: "500px",
                width: "100%", objectFit: "cover" }}
            />
            <div className={"absolute w-full h-full top-0"}>
                <div className={"absolute top-1/4 inset-x-1/4 text-blue-50"}>
                    {img.title ? <h3 className={"text-6xl font-semibold my-8"}>{img.title}</h3> : null}
                    {img.subtitle ? <p className={"my-2 text-2xl"}>{img.subtitle}</p> : null}
                    {img.button ? <Link to={img.button.link} className="text-blue-700 bg-blue-100 transition hover:text-blue-100 hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium  inline-block">{img.button.text}</Link> : null}
                </div>
            </div>
        </div>
    )
}