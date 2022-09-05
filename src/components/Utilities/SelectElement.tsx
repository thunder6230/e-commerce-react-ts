import {FC} from "react";
interface Props {
    items: {
        title: string | number,
        value?: string | number
    }[]
}
export const SelectElement:FC<Props> = ({items}) => {
    return (
        <select>
            {items.map(item => <select value={item.value ? item.value : item.title} >{item.title}</select>)}
        </select>
    )
}