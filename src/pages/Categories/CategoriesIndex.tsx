import {useContext} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import {Link, useParams} from "react-router-dom";
import {MotionPage} from "../../components/Utilities/MotionPage";

export const CategoriesIndex = () => {
    const {categories} = useContext(ProductsContext)
    const params = useParams()
    console.log(params)
    return (
        <MotionPage>
            <div className={"w-full flex flex-col py-16 pageComponent"}>
                Categories
                <div>
                    {
                        categories && categories.map(category => <Link to={`/categories/${category.id}`}>
                                <div key={category.name}>{category.name}</div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </MotionPage>
    )
}