
import { useEffect } from "react";
import { useFetch } from "../Hooks/UseFetch"
import "./Questions.css"
import { UseGameContext } from "../Hooks/UseGameContext";
export default function Questions() {
  const { state, dispatch } = UseGameContext();
  const { data, isLoading, error } = useFetch("http://localhost:3000/questions/" + state.questionLevel);

  useEffect(() => {
    if (data) {
      const correctAns = data.answers.find(a => a.correct);
      dispatch({ type: "setDorost", payload: correctAns });
    }
  }, [data])


  const handeClick = (correct, ans) => {
    if (!state.canClick) {
      return
    }
    dispatch({ type: "setActiveElement", payload: ans });
    dispatch({ type: "setStartTimer", payload: false });
    if (correct) {
      dispatch({ type: "setCanClick", payload: false });
      setTimeout(() => {
        dispatch({ type: "setShowCorect", payload: true });
        dispatch({ type: "setCanClick", payload: true });
      }, 4000)


    } else {
      setTimeout(() => {
        dispatch({ type: "setShowWrong", payload: true });
      }, 4000)
    }
  }
  const getClassName = (ans) => {
    if (state.activeElement === ans) {
      if (ans.correct) {
        return "choice corect"
      } else {
        return "choice wrong"
      }
    } else {
      return "choice"
    }
  }
  const getFinal = (ans) => {
    if (state.activeElement === state.dorost) {
      return ""
    } else {
      if (state.dorost === ans) {
        return "dorost"
      } else {
        return ""
      }
    }

  }
  const getLabel = (index) => {
    switch (index) {
      case 0: return "الف :"
      case 1: return "ب :"
      case 2: return "ج :"
      case 3: return "د :"
    }
  }
  return (
    <>
      {error && <p>مشکلی پیش آمده</p>}
      {isLoading && <p>کمی صبر کنید ...</p>}
      {data &&
        <div>
          <h1>{data.question}</h1>
          <div className="answer-sec">
            {data.answers.map((ans, index) => {
              return (
                <div
                  key={index}
                  className={getClassName(ans) + " " + (state.activeElement ? getFinal(ans) : "")}
                  onClick={() => handeClick(ans.correct, ans)}
                >
                  <span>{getLabel(index)}</span>
                  <span>{ans.value}</span>
                </div>
              )
            })}
          </div>
        </div>

      }
    </>
  )
}
