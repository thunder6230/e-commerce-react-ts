import {FaMinusCircle, FaPlusCircle} from "react-icons/all";
import {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
interface Props {
    setCount: Dispatch<SetStateAction<number>>,
    count: number
}
export const CounterComponent:FC<Props> = ({setCount, count}) => {
    const buttonClass = `transition disabled:opacity-50 disabled:cursor-not-allowed text-blue-50 text-xl p-2 bg-blue-700 shadow-xl rounded hover:scale-110 hover:bg-red-700 w-full flex items-center justify-center`
    const inputClass = "col-span-2 shadow-xl  py-2 rounded focus:outline-none transition focus:border-blue-700 hover:border-blue-700 border-1 border-blue-300 text-center font-semibold"
    return (
        <div>
            <label className={"font-semibold text-lg"}>Count</label>
            <div className={"grid grid-cols-4 gap-2"} style={{maxWidth: 200}}>
                <div className={"flex"}>
                    <button onClick={() => setCount(prevState => prevState === 1 ? prevState : prevState - 1)} disabled={count < 2}
                            className={buttonClass}><FaMinusCircle /></button>
                </div>
                <input value={count} min="1" type="number" onChange={(e: ChangeEvent<HTMLInputElement> ) => setCount(e.target.valueAsNumber)} className={inputClass}/>
                <div className={"flex"}>
                    <button className={buttonClass} onClick={() => setCount(prevState => prevState + 1)} >
                        <FaPlusCircle/>
                    </button>
                </div>
            </div>
        </div>
    )
}