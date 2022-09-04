import {Link} from "react-router-dom";
import {FC, useContext} from "react";
import {ProductsContext} from "../../../context/ProductsContext";


export const HeaderCategoriesComponent:FC = () => {
    const {categories} = useContext(ProductsContext)
    return (

            <ul className={"divide-y divide-blue-300 flex flex-col"} style={{width: 300, maxWidth: "100%"}} >
                {categories && categories.map(category =>
                    <Link to={`/categories/${category.id}`} key={category.name}
                          className={"cursor-pointer px-4 py-2 text-lg font-semibold hover:bg-blue-700 hover:text-blue-50 transition"}>
                        {category.name}
                    </Link>
                )}
            </ul>


    )
}