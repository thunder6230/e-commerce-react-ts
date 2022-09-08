import {FC, useContext} from "react";
import {ProductsContext} from "../../../context/ProductsContext";
import {Link} from "react-router-dom";

interface Props {
    categoriesArr: number[]
    brand: string
}

export const CategoryLinksComponent: FC<Props> = ({categoriesArr,brand}) => {
    const {categories} = useContext(ProductsContext)
    const linkClass = "text-blue-700 font-semibold hover:text-red-700 transition mr-2"
    const findCategoryName = (id: number):string => {
        let name:string = ""
        categories && categories.find(category => {
            if(id === 0) return
            if (category.id === id) return name = category.name
        })
        return name
    }
    return (
        <div>
            {
                categoriesArr.map(catId =>
                    categories && <Link to={`/categories/${catId}`} key={catId} className={linkClass}>{findCategoryName(catId)}</Link>
                )
            }
            <Link to={`/search/brand/${brand}`} className={linkClass}>{brand}</Link>
        </div>
    )
}