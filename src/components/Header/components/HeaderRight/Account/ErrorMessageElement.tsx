import {motion} from "framer-motion";
import {FC} from "react";
import {FieldError} from "react-hook-form";

interface Props {
    isError: FieldError,
    inputName: string
}

export const ErrorMessageElement:FC<Props> = ({isError,inputName}) => {
    return (
        <motion.small animate={isError ?
            {
                opacity: 1,
                display: 'block'
            } :
            {
                opacity: 0,
                transitionEnd:{
                    display: "none"
                }}
        } className={"text-red-700 font-semibold"}>
            {inputName} is required
        </motion.small>
    )
}