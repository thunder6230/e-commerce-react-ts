import {createContext, FC, useState} from "react";
import {CartParams, ICartItem, IProduct, IUser} from "../GlobalTypes";
import axios from "axios";
interface IAccountContext{
    userLoggedIn: IUser ,
    wishList: IProduct[],
    cart: ICartItem[],
    addToCart: (params:CartParams) => void
    addToWishList: (id: string) => void
}
export const AccountContext = createContext<Partial<IAccountContext>>({})
interface Props{
    children: JSX.Element | JSX.Element[],
}
export const AccountContextProvider:FC<Props> = ({children}) => {
    const [userLoggedIn, setUserLoggedIn] = useState<IUser>({})
    const [wishList, setWishList] = useState<IProduct[]>([])
    const [cart, setCart] = useState<ICartItem[]>([])

    const addToCart = async (params:CartParams) => {
        const response = await axios.get(`/products/${params.id}`)
        if(response.status !== 200) return alert("product not found")
        const product = response.data
        const newCartItem:ICartItem = {
            product: product,
            count: params.count,
        }
        if(params.size) newCartItem.size = params.size
        if(params.color) newCartItem.color = params.color


        setCart(prevState => {
            if (prevState.find(item => item.product.id == params.id && item?.size == params.size && item.color == params.color) == null) {
                return [...prevState, newCartItem]
            }
            return prevState.map(item => {
                if (item.product.id == params.id && item.size == params.size && item.color == params.color) {
                    return {...item, count: item.count + params.count}
                }
                return item
            })

        })

    }
    const removeFromCart = (cartItem: ICartItem) => {
        setCart(prevState => {
            return prevState.filter(item => item !== cartItem)
        })
    }
    const addToWishList = async (id: string) => {
        const response = await axios.get(`/products/${id}`)
        if(response.status !== 200) return alert("product not found")
        const product = response.data
        setWishList(prevState => {
            if(prevState.find(product => product.id === id) == null) return [...prevState, product]
            alert(`${product.name} is already in the wishlist!`)
            return prevState
        })
    }
    return <AccountContext.Provider value={{userLoggedIn,wishList, cart, addToCart, addToWishList}}>
        {children}
    </AccountContext.Provider>
}