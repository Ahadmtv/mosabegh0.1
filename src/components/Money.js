
import { UseGameContext } from "../Hooks/UseGameContext"
import "./money.css"
export default function Money({data,isLoading,error}) {
    const {state,dispatch}=UseGameContext();
    return (
        <div className="wrapper">
            {isLoading && <p>کمی صبر کنید ...</p>}
            {error && <p>مشکلی پیش آمده</p>}
            {data &&
                <ul>
                    {data.map((num)=>{
                        return(<li key={num.stage} className={num.stage===state.questionLevel?"active":""}>{num.stage} -{num.price} هزار تومان </li>)
                    }).reverse()
                    }
                </ul>
            }
        </div>
    )
}
