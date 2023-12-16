
import { UseGameContext } from "../Hooks/UseGameContext";
import "./wrongModal.css";
export default function WrongModal({restart,data}) {
  const{state,dispatch}=UseGameContext();
  const getPrice=()=>{
    const priceLevel=state.questionLevel-2;
    if(priceLevel===-1){
      return 0
    }else{
      return data[priceLevel].price
    }

  }
  return (
    <div>
        <div className="backdrop">
            <div className="modal">
                <h2>پاسخ شما اشتباه بود </h2>
                <h3> شما تا اینجا برنده {getPrice()} شدید </h3>
                <button onClick={restart}>بازی دوباره</button>
            </div>
        </div>
    </div>
  )
}
