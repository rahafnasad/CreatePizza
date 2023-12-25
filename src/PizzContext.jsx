import { useState } from "react";
import { createContext } from "react";

export let PizaaContext=createContext();
export default function PizaaContextProvider ({children}){
    const [Dough,setUserDough]=useState("");
    const [sauce,setUsersauce]=useState("");
    const [cheese,setUserCheese]=useState("");
    const [add,setUserAdd]=useState("");


   return <PizaaContext.Provider value={{Dough,setUserDough,sauce,setUsersauce,cheese,setUserCheese,add,setUserAdd}}>
    {children}
   </PizaaContext.Provider>


}