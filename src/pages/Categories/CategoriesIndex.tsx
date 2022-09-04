import {useContext} from "react";
import {ProductsContext} from "../../context/ProductsContext";

export const CategoriesIndex = () => {
    const {categories} =  useContext(ProductsContext)
    return (
        <div>
            Categories
            <div>
                {
                    categories &&  categories.map(category => <div>{category.name}</div>

                    )
                }
            </div>
        </div>
    )
}