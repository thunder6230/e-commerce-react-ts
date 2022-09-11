export interface IImg {
    imgUrl: string
    button?: IBannerButton
    title?: string
    subtitle?: string
    alt: string
}

export interface IBannerButton {
    link: string
    text: string
}

export interface IProduct {
    id: string
    name: string
    imgUrls?: string[]
    description?: string
    categories: number[],
    price: number,
    specifications?: { title: string, content: string }[]
    brand: string
    thumbnail?: string
    seller?: string
    colors?: string[]
    sizes?: {
        selection: string[],
        unit: string
    },
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    address?: IUserAddress
    miscellaneous?:IUserMiscellaneous
}

export interface ISearchParams {
    name?: string,
    id?: number,
    brand?: string
}

export interface ICategory {
    name: string,
    id: number
}

export interface ICartItem {
    id?: number,
    product: IProduct,
    color?: string,
    size?: string,
    count: number,

}

export interface CartParams {
    product: IProduct,
    count: number,
    color?: string,
    size?: string
}

export interface ILoginParams {
    email: string,
    password: string,
    remember: boolean
}

export interface IRegisterParams {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address?: IUserAddress
    
    miscellaneous?:IUserMiscellaneous
}

export interface IUserAddress {
    street: string,
    zip: number,
    country: string,
    city: string
    streetNumber: string
}
export interface IUserMiscellaneous {
    phoneNumber: string,
    socialUrls:{
        [key in  SocialMediaKeys] : string
    }
}
type  SocialMediaKeys = "facebook" | "instagram" | "linkedIn" | "tiktok" | "youtube" | "telegram" | "snapchat"
