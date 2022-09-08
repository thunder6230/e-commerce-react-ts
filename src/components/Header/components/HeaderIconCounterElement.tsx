import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {ICartItem, IProduct} from "../../../GlobalTypes";
interface Props{
    itemList: IProduct[] | ICartItem[]
}
export const HeaderIconCounterElement:FC<Props> =  ({itemList}) => {
    const [animation , setAnimation] = useState<string>("")

    useEffect(() => {
        setAnimation("animate-ping")
        setTimeout(() => setAnimation(""), 2000)
    }, [itemList])
    return (
        <motion.div className={`absolute bg-red-600 text-white rounded-full -top-1 -right-1 w-6 shadow shadow-white h-6 transition-1  ${animation}`} animate={itemList.length > 0 ? {
            opacity: 1,
            display:"block"
        } : {
            opacity:0,
            transitionEnd:{
                display: "none"
            }
        }}>
            <span className={`absolute inset-center font-semibold transition-1`}>{itemList.length}</span>
        </motion.div>
    )
}