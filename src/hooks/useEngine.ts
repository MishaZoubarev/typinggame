import { motion } from "framer-motion"
import { useState } from "react"
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

    return { state, words, timeLeft, typed };
};

export default useEngine;

