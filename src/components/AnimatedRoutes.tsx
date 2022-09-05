import {Route, Routes, useLocation} from "react-router-dom";
import {HomeIndex} from "../pages/Home/HomeIndex";
import {AccountIndex} from "../pages/Account/AccountIndex";
import {CartIndex} from "../pages/ShoppingCart/CartIndex";
import {WishlistIndex} from "../pages/WishList/WishlistIndex";
import { AnimatePresence } from "framer-motion";
import {FC} from "react";
import {CategoriesIndex} from "../pages/Categories/CategoriesIndex";
import {CategoryIndex} from "../pages/Categories/id/CategoryIndex";
import {ProductIndex} from "../pages/Product/ProductIndex";
import {SearchIndex} from "../pages/Search/SearchIndex";

export const AnimatedRoutes:FC = () => {

    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeIndex />}></Route>
                <Route path="/account" element={<AccountIndex />}></Route>
                <Route path="/cart" element={<CartIndex />}></Route>
                <Route path="/wishlist" element={<WishlistIndex />}></Route>
                <Route path="/categories" element={<CategoriesIndex />}></Route>
                <Route path="/categories/:id" element={<CategoryIndex />}></Route>
                <Route path="/product/:id" element={<ProductIndex />}></Route>
                <Route path="/search/name/:name" element={<SearchIndex />}></Route>
                <Route path="/search/brand/:brand" element={<SearchIndex />}></Route>
                <Route path="/search/id/:id" element={<SearchIndex />}></Route>
            </Routes>

        </AnimatePresence>
    )
}