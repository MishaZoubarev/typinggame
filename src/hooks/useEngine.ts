import { motion } from "framer-motion"
import { useState } from "react"
import useWords from "./useWords"

export type State = "start" | "run" | "finish";

const NUM_WORDS = 12;

const useEngine = () => {
    const[state, setState] = useState<State>("start");
    const { words, updateWords } = useWords(NUM_WORDS);

    return { state, words};
};

export default useEngine;

