import axios from "axios";
import {SHOP_SETTINGS} from "./Config";

export const formatImage = (imgUrl:string) => {
    return SHOP_SETTINGS.ENABLE_WEBP ? `${imgUrl}.webp` : `${imgUrl}.jpg`
}
export const formatPrice = (price: number | string) => {
    const formattedPrice = price.toLocaleString(window.navigator.language, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    return `${formattedPrice} ${SHOP_SETTINGS.CURRENCY}`
}
export const getElements = async (url:string, params:{[key:string]:string}) => {
    return axios.get(url, {params: params})
}

