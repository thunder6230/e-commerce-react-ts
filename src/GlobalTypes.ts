export interface IImg{
    imgUrl: string
    button?: IBannerButton
    title?: string
    subtitle?: string
    alt: string
}
export interface IBannerButton {
    link:string
    text: string
}
export interface IProduct {
    id: string
    name: string
    imgUrls?: string[]
    description?: string
    categories: number[],
    price: number,
    specifications?: { title:string, content: string }[]
    brand: string
    thumbnail?: string
    seller?: string
    colors?: string[]
    sizes?: {
        selection: string[],
        unit: string
    },
}
export interface IUser{

}
export interface ISearchparams{
    name?: string,
    category: number
}
export interface ICategory{
    name?: string,
    id: number
}
