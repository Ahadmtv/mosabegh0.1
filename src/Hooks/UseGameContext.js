import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export const UseGameContext=()=>{
const context=useContext(GameContext);
if(!context){
    throw new Error("Use the provider")
}else{
    return context;
}
}