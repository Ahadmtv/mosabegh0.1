import { UseGameContext } from "../Hooks/UseGameContext";
import "./corectModal.css"
export default function CorectModal() {
    const {state,dispatch}=UseGameContext();
    const nextLevel = () => {
        dispatch({type:"setActiveElement",payload:null});
        dispatch({type:"LEVEL_UP"});
        dispatch({type:"setShowCorect",payload:false})
        dispatch({type:"setTime",payload:30})
        dispatch({type:"setStartTimer",payload:true})
    }
    const reSign = () => {
        dispatch({type:"setShowCorect",payload:false})
        dispatch({type:"setShowResign",payload:true})
    }
    return (
        <div>
            <div className="backdrop">
                <div className="modal">
                    <h2>بریم برای مرحله {state.questionLevel+1} ؟</h2>
                    <div className="group-btn">
                    <button onClick={nextLevel}>بزن بریم</button>
                    <button onClick={reSign}>انصراف </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
