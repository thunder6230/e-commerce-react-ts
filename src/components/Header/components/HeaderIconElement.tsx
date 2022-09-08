import {Link} from "react-router-dom";
import {FC} from "react";

interface Props {
    children: JSX.Element | JSX.Element[]| undefined,
    url: string
}

export const HeaderIconElement:FC<Props> = ({children, url}) => {
    return (
        <div className={"mx-1 relative"}>
            <Link to={url} className="text-blue-100 hover:text-red-600 transition inline-block p-2 relative">
                {children}
            </Link>
        </div>
    )
}