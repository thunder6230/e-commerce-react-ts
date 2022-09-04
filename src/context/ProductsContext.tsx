import {createContext, FC, useEffect, useState} from "react";
import {ICategory, IProduct, ISearchparams} from "../GlobalTypes";
import axios from "axios";
interface ProductsContext {
    topProducts: IProduct[]
    openedProduct: IProduct
    foundProducts: IProduct[]
    categories: ICategory[]
    getTopProducts: () => void
    getProduct: (id:number) => void
    searchProducts: (searchParams:ISearchparams) => void
    getCategories: () => void
}
export const ProductsContext = createContext<Partial<ProductsContext>>({})
interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ProductsContextProvider:FC<Props> = ({children}) => {
    const [topProducts, setTopProducts] = useState<IProduct[]>([])
    const [openedProduct, setOpenedProduct] = useState<IProduct>({
        id: "",
    })
    const [foundProducts, setFoundProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategory[]>([])

    const getTopProducts = async () => {
        const response = await axios.get("/products?categories_like=0")
        if(response.status != 200) return //errorHandling
        setTopProducts(response.data)
    }

    const getProduct = async (id:number | null) => {
        const response = await axios.get(`/products/${id}`)
        if(response.status != 200) return //errorHandling
        setOpenedProduct(response.data)
    }
    const searchProducts = async (searchParams: ISearchparams) => {
        const response = await axios.get("/products", {params: searchParams})
        if(response.status != 200) return //errorHandling
        setFoundProducts(response.data)
    }
    const getCategories = async () => {
        const response = await axios.get("/categories")
        if(response.status != 200) return //errorHandling
        setCategories(response.data)
    }
    useEffect(() => {getCategories()}, [])
    return <ProductsContext.Provider value={{topProducts, openedProduct, getTopProducts, foundProducts, getProduct, searchProducts, getCategories, categories }} >
        {children}
    </ProductsContext.Provider>
}

