import {defaultAbiCoder, ethers} from "ethers"
import { useEffect, useState } from "react"

export default function Coder(){

    const[type, setType] = useState(1);

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("")
    const [error, setError] = useState(false);

    async function handleChange(e){
        setInput(e.target.value);
    }

    async function encode(){
        const abi = ethers.utils.defaultAbiCoder;
        setOutput(abi.encode(
            ["string"],
            [ input ])); 
    }

    async function decode(){
        const abi = ethers.utils.defaultAbiCoder;

        try{
            if(input !== ""){
                setOutput(abi.decode(["string"], input));
            }
            else{
                setOutput("");
            }
            setError(false);
        }

        catch(err){
            setOutput("")
            console.log(err);
            setError(true);
        }
    }


    const handleCopy = async (amount) => {
        try {
            await navigator.clipboard.writeText(amount);

        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
    
        }
    };



    useEffect(()=>{
        if(type == 1){
            encode();
        }

        else{
            decode();
        }
       
    },[input])

    return(
        <div className="w-[400px] text-center">
            <div className="grid grid-flow-col grid-cols-2 w-[90%] mx-auto mt-10">
                <button className="bg-gradient-to-br from-purple-400 to-purple-600 text-[1.3rem] px-2 text-white font-bold rounded-xl py-4 w-[70%] mx-auto hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 duration-500" onClick={()=>{setType(1); setInput(""); setOutput("")}}>
                    Encoder
                </button>
                <button className="bg-gradient-to-br from-blue-400 to-blue-600 text-[1.3rem] px-2 text-white font-bold rounded-xl py-4 w-[70%] mx-auto hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 duration-500" onClick={()=>{setType(2); setInput(""); setOutput("")}}>
                    Decoder
                </button>
                </div>
            { type == 1 &&
            <>
                <h1 className="text-[2rem] text-white mb-5 font-bold">Encoder</h1>
                <input className="bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]" placeholder="Enter String" value={input} onChange={handleChange}></input>
                <div className="w-[300px] mx-auto mt-10 text-[1.3rem] rounded-xl px-2 bg-yellow-300 overflow-scroll" ><p>{output}</p></div>
                <button className="bg-white text-purple-700 px-4 py-2 rounded-2xl my-5" onClick={()=>{handleCopy(output)}}>Copy</button>
            </>
            }

{ type == 2 &&
            <>
                <h1 className="text-[2rem] text-white mb-5 font-bold">Decoder</h1>
                <input className="bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]" placeholder="Enter Encoded Input" value={input} onChange={handleChange}></input>
                <div className="w-[300px] mx-auto mt-10 text-[1.3rem] rounded-xl px-2 bg-yellow-300 overflow-scroll" ><p>{output }</p></div>
                <button className="bg-white text-purple-700 px-4 py-2 rounded-2xl my-5" onClick={()=>{handleCopy(output)}}>Copy</button>
    {error && <h1 className="text-red-400 bg-white w-[70%] mx-auto rounded-xl  px-4 py-2">Enter valid Encoded data!</h1>}
            </>
            }

        </div>
    )
}