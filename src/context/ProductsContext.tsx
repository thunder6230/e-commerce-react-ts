import {createContext, FC, useEffect, useMemo, useState} from "react";
import {ICategory, IProduct} from "../GlobalTypes";
import axios from "axios";

interface ProductsContext {
    topProducts: IProduct[]
    openedProduct: IProduct | null
    foundProducts: IProduct[]
    categories: ICategory[]
    relatedProducts: IProduct[]
    seller: string
    getTopProducts: () => void
    getProduct: (id: string) => void
    searchProducts: (searchTerm: string) => void
    getCategories: () => void
    getRelatedProducts: (categoryIds: number[]) => void
}

export const ProductsContext = createContext<Partial<ProductsContext>>({})

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ProductsContextProvider: FC<Props> = ({children}) => {
    const [topProducts, setTopProducts] = useState<IProduct[]>([])
    const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([])
    const [openedProduct, setOpenedProduct] = useState<IProduct | null>(null)
    const [foundProducts, setFoundProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategory[]>([])
    const [seller, setSeller] = useState<string>("")

    const getTopProducts = async () => {
        const response = await axios.get("/products?categories_like=0")
        if (response.status != 200) return //errorHandling
        setTopProducts(response.data)
    }

    const getProduct = async (id: string | null) => {
        const response = await axios.get(`/products/${id}`)
        if (response.status != 200) return //errorHandling
        setOpenedProduct(response.data)
    }

    const searchProducts = async (searchParams: string) => {
        const response = await axios.get("/products", {params: searchParams})
        if (response.status != 200) return //errorHandling
        setFoundProducts(response.data)
    }
    const getCategories = async () => {
        const response = await axios.get("/categories")
        if (response.status != 200) return //errorHandling
        setCategories(response.data)
    }
    const getRelatedProducts = async (categoryIds: number[]) => {
        let categoryId = -1
        categoryIds.forEach(id => {
            if (id !== 0) return categoryId = id
        })
        console.log(categoryId)
        const response = await axios.get(`/products?categories_like=${categoryId}`)
        if (response.status !== 200) return console.log("error")
        setRelatedProducts(response.data)
    }
    const getSeller = () => {
        import.meta.env.VITE_SHOW_SELLER === "TRUE" ? setSeller(import.meta.env.VITE_SHOP_NAME) : ""
    }
    useEffect(() => {
        getCategories()
        getSeller()
    }, [])

    useMemo(() => {
        openedProduct && openedProduct.categories && getRelatedProducts(openedProduct.categories!)
    }, [openedProduct])
    return <ProductsContext.Provider value={{
        topProducts,
        openedProduct,
        getTopProducts,
        foundProducts,
        getProduct,
        searchProducts,
        getCategories,
        categories,
        relatedProducts,
        getRelatedProducts,
        seller
    }}>
        {children}
    </ProductsContext.Provider>
}

