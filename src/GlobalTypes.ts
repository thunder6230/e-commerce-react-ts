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
    name?: string
    imgUrls?: string[]
    description?: string
    categories?: number[],
    price?: number,
    unit?: string,
    specifications?: string[]
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