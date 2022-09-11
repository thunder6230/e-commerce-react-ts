import {createContext, FC, useEffect, useState} from "react";
import {CartParams, ICartItem, ILoginParams, IProduct, IRegisterParams, IUser} from "../GlobalTypes";
import axios from "axios";
interface IAccountContext{
    userLoggedIn: IUser | null ,
    wishList: IProduct[],
    cartItems: ICartItem[],
    cartAmount: number,
    loginErrorMessage: string,
    addToCart: (params:CartParams) => void
    addToWishList: (product: IProduct) => void
    removeFromWishList: (product: IProduct) => void
    removeFromCart: (cartItem: ICartItem) => void
    incrementCartItem: (cartItem: ICartItem) => void
    decrementCartItem: (cartItem: ICartItem) => void
    setCountCartItem: (cartItem: ICartItem, count:number) => void
    login: (loginParams: ILoginParams) => void
    register: (registerParams: IRegisterParams) => void
}
export const AccountContext = createContext<Partial<IAccountContext>>({})
interface Props{
    children: JSX.Element | JSX.Element[],
}


export const AccountContextProvider:FC<Props> = ({children}) => {
    const [userLoggedIn, setUserLoggedIn] = useState<IUser | null>(null)
    const [wishList, setWishList] = useState<IProduct[]>([])
    const [cartItems, setCartItems] = useState<ICartItem[]>([])
    const [cartAmount, setCartAmount] = useState<number>(0)
    const [loginErrorMessage, setLoginErrorMessage] = useState<string>("")
    const login = async (loginParams: ILoginParams) => {
        setLoginErrorMessage("")
        const response = await axios.get(`/users`, {params: {email:loginParams.email}})
        const user = response.data[0]
       if(response.data.length === 0) return setLoginErrorMessage("This user doesn't exist")
       if(user.password !== loginParams.password) return setLoginErrorMessage("Invalid password")
       setUserLoggedIn(user)
    }
    const register = (registerParams: IRegisterParams) => {
        console.log(registerParams)
    }
    const addToCart = async (params:CartParams) => {
        const newCartItem:ICartItem = {
            product: params.product,
            count: params.count,
        }
        if(params.size) newCartItem.size = params.size
        if(params.color) newCartItem.color = params.color


        setCartItems(prevState => {
            if (prevState.find(item => item.product.id == params.product.id && item?.size == params.size && item.color == params.color) == null) {
                return [...prevState, newCartItem]
            }
            return prevState.map(item => {
                if (item.product.id == params.product.id && item.size == params.size && item.color == params.color) {
                    return {...item, count: item.count + params.count}
                }
                return item
            })

        })

    }
    const incrementCartItem = (cartItem: ICartItem) => {
        setCartItems(prevState => {
            return prevState.map(item => {
                if (item == cartItem) {
                    return {...item, count: item.count + 1}
                }
                return item
            })
        })
    }
    const decrementCartItem = (cartItem: ICartItem) => {
        setCartItems(prevState => {
            return prevState.map(item => {
                if (item == cartItem) {
                    return {...item, count: item.count == 1 ? item.count : item.count - 1}
                }
                return item
            })
        })
    }
    const setCountCartItem = (cartItem: ICartItem,count:number) => {
        setCartItems(prevState => {
            return prevState.map(item => {
                if (item == cartItem) {
                    return {...item, count: count}
                }
                return item
            })
        })
    }
    const getCartAmount = () => {
        const prices = cartItems.map(item => item.count * item.product.price)
        let total = 0
        if(prices.length > 0)
            total = prices.reduce((oldPrice, newPrice) => oldPrice + newPrice)
           setCartAmount(total)
    }
    const removeFromCart = (cartItem: ICartItem) => {
        setCartItems(prevState => {
            return prevState.filter(item => item !== cartItem)
        })
    }
    const addToWishList = async (product: IProduct) => {
        setWishList(prevState => {
            if(prevState.find(listProduct => listProduct === product) == null) return [...prevState, product]
            alert(`${product.name} is already in the wishlist!`)
            return prevState
        })
    }
    const removeFromWishList = (product: IProduct) => {
        setWishList(prevState => {
            return prevState.filter(item => item !== product)
        })
    }
    const contextValues = {
        userLoggedIn,wishList, cartItems,cartAmount,loginErrorMessage, addToCart, addToWishList, removeFromWishList, removeFromCart, incrementCartItem, decrementCartItem, setCountCartItem, login, register
    }
    useEffect(() => getCartAmount(), [cartItems])
    return <AccountContext.Provider value={contextValues}>
        {children}
    </AccountContext.Provider>
}