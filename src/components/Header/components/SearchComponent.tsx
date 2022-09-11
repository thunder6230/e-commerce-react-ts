import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaSearch} from "react-icons/all";

export const SearchComponent = () => {
    const [isInputFocus, setIsInputFocus] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>("")

    const searchFocusStyle= {
        boxShadow: "0 0 300px 300px rgba(0,0,0)",
    }
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(searchTerm === "") return //errorhandling with modal warning context

       /* searchProducts && searchProducts(searchTerm)*/
        navigate(`/search/name/${searchTerm}`)
        setIsInputFocus(false)
        setSearchTerm("")
    }
    const navigate = useNavigate()
    const inputClasses = "px-4 py-1 text-lg rounded w-full transition focus:outline-none"
    const searchIconDivClasses = "absolute  top-1/2 -translate-y-1/2 p-2 cursor-pointer hover:scale-125 transition"
    const searchIconDivFocusClasses = 'border-1 border-blue-400 scale-125 -right-1 bg-white rounded-full hover:border-1 hover:border-blue-400 hover:scale-150'

    return (
        <div className={"w-full"} style={{maxWidth: 400,}}>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSearch(e) }>
                <div className={"relative"} >
                    <input type="text" placeholder={"What are you looking for?"}
                           className={`${inputClasses} ${isInputFocus ? 'border-1 border-blue-400' : ''}`}
                           style={isInputFocus ? searchFocusStyle : {}}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                           onFocus={() => setIsInputFocus(true)}
                           onBlur={() => setIsInputFocus(false)}
                           value={searchTerm}
                    />
                    <button  className={`${isInputFocus ? searchIconDivFocusClasses : 'right-0'} ${searchIconDivClasses}`}>
                        <FaSearch className={`text-blue-900`}/>
                    </button>

                </div>
            </form>
        </div>
    )
}