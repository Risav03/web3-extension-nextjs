
import { useState, useEffect } from "react"

export default function TimeConverter(){

    const [value, setValue] = useState("")
    const [localdate, setLocalDate] = useState("");
    const [GMTDate, setGMTDate] = useState("")

    async function handleChange(e){
        setValue(e.target.value);
    }

    async function getDate() {
        const myDate = new Date(value * 1000);
        setLocalDate(myDate.toLocaleString());
        setGMTDate(myDate.toGMTString());
     }

     const handleCopy = async (val) => {
        try {
            await navigator.clipboard.writeText(val);

        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
    
        }
    };

    useEffect(()=>{
        getDate();
    },[value])

    return(
        <div className="text-center py-10 ">
            <h1 className="text-[2rem] text-white mb-5 font-bold">Epoch Time Converter</h1>
            

            
                <input type="number" min={0} className="bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]" placeholder="Time" value={value} onChange={handleChange}></input>
            
          <h1 className="bg-white rounded-xl w-fit mx-auto font-semibold text-[1.2rem] text-purple-800 py-2 px-3 mt-5">{localdate}</h1>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-2xl my-5" onClick={()=>{handleCopy(localdate)}}>Copy</button>

          <h1 className="bg-white rounded-xl w-fit mx-auto font-semibold text-[1.2rem] text-purple-800 py-2 px-3 mt-5">{GMTDate}</h1>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-2xl my-5" onClick={()=>{handleCopy(GMTDate)}}>Copy</button>

        </div>
    )
}