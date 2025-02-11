import { useCallback, useRef, useEffect, useState } from "react";

const useCountdownTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const startCountdown = useCallback(() => {
        console.log("Starting Countdown...");

        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);
    }, [setTimeLeft]);

    const resetCountdown = useCallback(() => {
        console.log("Resetting Countdown...");
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        if(!timeLeft && intervalRef.current) {
            console.log("Clearing Timer...");
            clearInterval(intervalRef.current)
        }
    }, [timeLeft, intervalRef]);

    return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;