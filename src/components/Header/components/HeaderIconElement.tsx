import {FaRegHeart} from "react-icons/all";
import {Link} from "react-router-dom";
import {FC} from "react";

interface Props {
    children: JSX.Element | JSX.Element[],
}

export const HeaderIconElement:FC<Props> = () => {
    return (
        <Link to="/wishlist" className="text-blue-100 hover:text-red-600 transition  p-2 font-medium"><FaRegHeart className={"text-3xl"}/></Link>
    )
}