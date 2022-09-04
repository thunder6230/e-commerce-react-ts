import {Route, Routes, useLocation} from "react-router-dom";
import {HomeIndex} from "../pages/Home/HomeIndex";
import {AccountIndex} from "../pages/Account/AccountIndex";
import {CartIndex} from "../pages/ShoppingCart/CartIndex";
import {WishlistIndex} from "../pages/WishList/WishlistIndex";
import { AnimatePresence } from "framer-motion";
import {FC} from "react";

export const AnimatedRoutes:FC = () => {

    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeIndex />}></Route>
                <Route path="/account" element={<AccountIndex />}></Route>
                <Route path="/cart" element={<CartIndex />}></Route>
                <Route path="/wishlist" element={<WishlistIndex />}></Route>
            </Routes>

        </AnimatePresence>
    )
}