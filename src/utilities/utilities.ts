const webp = import.meta.env.VITE_ENABLE_WEBP === "TRUE"
const currency = import.meta.env.VITE_CURRENCY

export const formatImage = (imgUrl:string) => {
    console.log(webp)
    return webp ? `${imgUrl}.webp` : `${imgUrl}.jpg`
}
export const formatPrice = (price: number | string) => {
    const formattedPrice = price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    return `${formattedPrice} ${currency}`
}
