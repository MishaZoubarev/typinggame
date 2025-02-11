import { motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"
import { countErrors } from "../utils/helpers";
import useWords from "./useWords"
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";

export type State = "start" | "run" | "finish";

const NUM_WORDS = 12;
const COUNTDOWN_SEC = 30;

const useEngine = () => {
    const[state, setState] = useState<State>("start");
    const { words, updateWords } = useWords(NUM_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(COUNTDOWN_SEC);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(state !== 'finish');

    const[errors, setErrors] = useState(0);

    const isStarting = state === "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
    }, [typed, words, cursor]);

    useEffect(() => {
        if(isStarting){
            setState("run");
            startCountdown();
        }
    }, [isStarting, startCountdown, cursor]);

    useEffect(() => {
        if(!timeLeft){
            console.log("Times up!");
            setState("finish");
            sumErrors();
        }
    }, [timeLeft, sumErrors]);

    useEffect(() => {
        if(areWordsFinished){
            console.log("All words typed!");
            sumErrors();
            updateWords();
            clearTyped();
        }
    }, [cursor, words, clearTyped, typed, areWordsFinished, updateWords, sumErrors,]);

    const restart = useCallback(() => {
        console.log("restarting");
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updateWords();
        clearTyped();
    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

    return { state, words, timeLeft, typed, errors, totalTyped, restart };
};


export default useEngine;

