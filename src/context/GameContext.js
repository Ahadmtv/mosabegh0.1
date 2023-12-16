import { createContext, useReducer } from "react";

export const GameContext = createContext();
const initialStates = {
    questionLevel: 1,
    showFirstModal: true,
    showCorect: false,
    showWrong: false,
    showResign: false,
    startTimer: false,
    time: 30,
    activeElement: null,
    canClick: true,
    dorost: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "setQuestionLevel":
            return { ...state, questionLevel: action.payload };
        case "setShowFirstModal":
            return { ...state, showFirstModal: action.payload };
        case "setShowCorect":
            return { ...state, showCorect: action.payload };
        case "setShowWrong":
            return { ...state, showWrong: action.payload };
        case "setShowResign":
            return { ...state, showResign: action.payload };
        case "setStartTimer":
            return { ...state, startTimer: action.payload };
        case "setTime":
            return { ...state, time: action.payload };
        case "setActiveElement":
            return { ...state, activeElement: action.payload };
        case "setCanClick":
            return { ...state, canClick: action.payload };
        case "setDorost":
            return { ...state, dorost: action.payload };
        case "TIMER_DOWN":
            return { ...state, time: state.time > 0 ? state.time - 1 : 0 };
            case "LEVEL_UP":
                return { ...state, questionLevel:state.questionLevel +1 };
        default:
            return state;
    }
}

export default function Gameprovider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialStates);
    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}
