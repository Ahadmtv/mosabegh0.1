import { useEffect } from "react";
import { UseGameContext } from "../Hooks/UseGameContext";

export default function Timer() {
    const {state,dispatch}=UseGameContext();
    useEffect(() => {
        let interval;
        if (state.startTimer) {
            interval = setInterval(() => {
                dispatch({type:"TIMER_DOWN"})
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [dispatch, state.startTimer]);

    return (
        <>
            <span>{state.time}</span>
        </>
    );
}

