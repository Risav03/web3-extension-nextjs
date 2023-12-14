import {ethers} from "ethers";
import { useEffect, useState } from "react";

export default function Calculator(){

    const [wei, setWei] = useState("");
    const [ether, setEther] = useState("");

    const[type, setType] = useState(1);

    function handleWeiChange(e) {
        if (type === 1) {
          setWei(e.target.value);
        } 
        
        else if (type === 2) {
          setEther(e.target.value);
        }
      }


    async function calculateWei() {
        if (wei !== "" && type === 1) {
            if(wei == "."){
                setEther(ethers.formatEther("0."));
            }
            else{
                setEther(ethers.formatEther(wei));
            }
        }
        else if(wei == ""){
            setEther("")
        }
      }

      async function calculateEth(){
        if (ether !== "" && type === 2) {
            if(ether == "."){
                setWei(ethers.parseUnits("0.", 18));
            }
            else{
                setWei(String(ethers.parseUnits(String(ether), 18)));
            }
        }
        else if(ether == ""){
            setWei("")
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
        calculateWei()
    },[wei])

    useEffect(()=>{
        calculateEth();
    }, [ether])


    return(
        <div className="text-center py-10 ">
            <h1 className="text-[2rem] text-white mb-5 font-bold">Calculator</h1>
            <div className="grid grid-flow-col grid-cols-2 w-[90%] mx-auto mb-10">
                <button className="bg-gradient-to-br from-purple-400 to-purple-600 text-[1.3rem] px-2 text-white font-bold rounded-xl py-4 w-[70%] mx-auto hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 duration-500" onClick={()=>{setType(1); setEther(""); setWei("")}}>
                    Wei to Eth
                </button>
                <button className="bg-gradient-to-br from-blue-400 to-blue-600 text-[1.3rem] px-2 text-white font-bold rounded-xl py-4 w-[70%] mx-auto hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 duration-500" onClick={()=>{setType(2); setEther(""); setWei("")}}>
                    Eth to Wei
                </button>
            </div>

            {type == 1 &&<>
                <input type="number" min={0} className="bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]" placeholder="Value in wei" value={wei} onChange={handleWeiChange}></input>
            <h2 className="mt-10 border-4 mx-auto border-white rounded-full h-[70px] flex items-center justify-center text-[1.3rem] text-white w-[90%]">{ether} ether</h2>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-2xl my-5" onClick={()=>{handleCopy(ether)}}>Copy</button>
            </>
            
            }

            {type ==2 &&
            <>
            
            <input type="number" min={0} className="bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]" placeholder="Value in Ether" value={ether} onChange={handleWeiChange}></input>
        <h2 className="mt-10 border-4 mx-auto border-white rounded-full h-[70px] flex items-center justify-center text-[1.3rem] text-white w-[90%]">{wei} wei</h2>
        <button className="bg-white text-purple-700 px-4 py-2 rounded-2xl my-5" onClick={()=>{handleCopy(wei)}}>Copy</button>

        </>}
            
        </div>
    )
}