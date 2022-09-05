import {FaCartPlus} from "react-icons/all";
import {FC} from "react";
interface Props {
    callback: () => void
    child: JSX.Element
}
export const HoverMenuIconElement:FC<Props> = ({callback, child}) => {
    return (
        <li>
            <button  className={"p-2 hover:scale-125 transition"} onClick={() => callback()}>
                {child}
            </button>
        </li>
    )
}