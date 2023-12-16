import { UseGameContext } from "../Hooks/UseGameContext";

export default function Resign({restart,data}) {
    const{state,dispatch}=UseGameContext();
    const getPrice=()=>{
        const priceLevel=state.questionLevel-1;
          return data[priceLevel].price
      }
      return (
        <div>
            <div className="backdrop">
                <div className="modal">
                    <h2>شما انصراف دادید</h2>
                    <h3> شما تا اینجا برنده {getPrice()} شدید </h3>
                    <button onClick={restart}>بازی دوباره</button>
                </div>
            </div>
        </div>
      )
    }
