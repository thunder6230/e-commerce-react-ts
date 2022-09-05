import {createContext, FC, useState} from "react";
import {IProduct, IUser} from "../GlobalTypes";
interface IAccountContext{
    userLoggedIn: IUser ,
    wishList: IProduct[],
    cart: IProduct[]
}
export const AccountContext = createContext<Partial<IAccountContext>>({})
interface Props{
    children: JSX.Element | JSX.Element[]
}
export const AccountContextProvider:FC<Props> = ({children}) => {
    const [userLoggedIn, setUserLoggedIn] = useState<IUser>({})
    const [wishList, setWischList] = useState<IProduct[]>([])
    const [cart, setCart] = useState<IProduct[]>([])


    return <AccountContext.Provider value={{userLoggedIn,wishList, cart}}>
        {children}
    </AccountContext.Provider>
}