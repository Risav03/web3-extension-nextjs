import { useState } from "react";
import Calculator from "../components/calculator";
import styles from "../styles/Home.module.css";
import TimeConverter from "../components/timeconverter";
import Coder from "../components/coder";

const IndexPage = () => {
  const[page, setPage] = useState("calculator");
  return (
    <div className="w-[400px] h-[550px] bg-gradient-to-br from-blue-400 to-purple-700">
      <div className="grid grid-flow-col grid-cols-4">
        <button className="bg-blue-500 text-white" onClick={()=>{setPage("calculator")}}>Calculator</button>
        <button className="bg-blue-500 text-white" onClick={()=>{setPage("time")}}>Time Converter</button>
        <button className="bg-blue-500 text-white" onClick={()=>{setPage("coder")}}>Coder</button>
        <button className="bg-blue-500 text-white" onClick={()=>{setPage("impersonator")}}>Impersonator</button>
      </div>
      {page == "calculator" && <Calculator/>}
      {page == "time" && <TimeConverter/>}
      {page == "coder" && <Coder/>}
      {page == "impersonator" && <> //your component</>}
    </div>
  );
};

export default IndexPage;
