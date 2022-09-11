import {motion} from "framer-motion";
import {ChangeEvent, FC, useContext, useState} from "react";
import {FaKey, FaUser} from "react-icons/all";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {ErrorMessageElement} from "./Account/ErrorMessageElement";
import {AccountContext} from "../../../../context/AccountContext";
import {ILoginParams} from "../../../../GlobalTypes";

interface Props {
    showAccountMenu: boolean
}


export const AccountHoverComponent: FC<Props> = ({showAccountMenu}) => {
    const {login, loginErrorMessage, userLoggedIn} = useContext(AccountContext)
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [remember, setRemember] = useState<boolean>(false)
    const inputCss = "border-1 border-blue-700 border-opacity-30 hover:border-opacity-100 transition rounded w-full py-2 pl-8 pr-2 focus:outline-none"
    const {register, handleSubmit, formState: {errors}} = useForm<ILoginParams>();
    const onSubmit = (data: ILoginParams ) =>{
        login && login(data)

    }
    return (
        <motion.div
            animate={showAccountMenu ? {
                opacity: 1,
                display: "block"
            } : {
                opacity: 0,
                transitionEnd: {
                    display: "none"
                }
            }
            }
            className={"absolute right-0 top-3/4 bg-white rounded shadow-xl border-1 border-blue-700 pt-3"}
            style={{width: 300}}>
            <h2 className={"text-xl font-semibold mb-2 text-blue-700 text-center px-3"}>Account Menu</h2>
            { userLoggedIn ?
                <div>Hello {userLoggedIn.firstName} {userLoggedIn.lastName}</div> :
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className={"p-3"}>
                    <motion.small animate={loginErrorMessage !== "" ?
                        {
                            opacity: 1,
                            display: 'block'
                        } :
                        {
                            opacity: 0,
                            transitionEnd:{
                                display: "none"
                            }}
                    } className={"text-red-700 font-semibold"}>
                        {loginErrorMessage}
                    </motion.small>
                    <div className={"mb-2"}>
                        <div className={"relative"}>
                            <input type="email" placeholder={"username"}
                                   className={inputCss + `${errors.email ? ' border-red-700' : ''}` } {...register("email", {required: true,})} value={username}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
                            <FaUser className={"absolute top-2/4 -translate-y-2/4 left-2 text-lg text-blue-700"}/>
                        </div>
                        <ErrorMessageElement isError={errors.email!} inputName="Email-address"/>
                    </div>
                    <div className={"relative  mb-2"}>
                        <div className={"relative"}>
                            <input type="password" placeholder={"password"}
                                   className={inputCss + `${errors.password ? ' border-red-700' : ''}`} {...register("password", {required: true})} value={password}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                            <FaKey className={"absolute top-2/4 -translate-y-2/4 left-2 text-lg text-blue-700"}/>
                        </div>
                        <ErrorMessageElement isError={errors.password!} inputName="Password"/>
                    </div>
                    <div className={"flex justify-between mb-2 items-end"}>
                        <div className={"flex items-center justify-start cursor-pointer"}>
                            <input type="checkbox" placeholder={"password"} id="remember"
                                   className={"mr-2"} {...register("remember")} checked={remember}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked)}/>
                            <label htmlFor="remember" className={"text-sm font-semibold"}>Remember Me</label>
                        </div>
                        <div>
                            <button className={"text-sm font-semibold"}>Forgot password?</button>
                        </div>
                    </div>


                    <button type="submit"
                            className={"w-full py-2 bg-blue-700 text-white rounded shadow-xl font-semibold hover:bg-red-700 transition"}>LOGIN
                    </button>
                </form>
                <div className={"bg-blue-300 p-3"}>
                    <p className={"leading-5 text-sm font-semibold"}>Create your account and enjoy a new shopping
                        experience.</p>
                    <Link to={"account/register"}
                          className={"w-full py-2 bg-blue-700 text-white rounded shadow-xl font-semibold hover:bg-red-700 transition inline-block text-center mt-2"}>CREATE
                        A NEW ACCOUNT</Link>
                </div>
           </div>
            }


        </motion.div>
    )
}