import { motion } from "framer-motion";
import { faker } from "@faker-js/faker"
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";

//const words = Array.from({ length: 10 }, () => faker.word.sample());


const App = () => {
  const { state, words } = useEngine();

  return(
    <>
      <CountdownTimer timeLeft={30} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings className="absolute inset-0" userInput={"test"} />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"} 
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors = {10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
};

const WordsContainer = ({ children}: {children: React.ReactNode } ) => {
  return(
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">{children}</div>
  );
};

const GeneratedWords = ({words}: {words: string}) => {
    return <div className=" text-slate-500">{words}</div>
};

const CountdownTimer = ({timeLeft}: {timeLeft: number}) => {
  return <h2 className = "text-primary-400 font-medium">Time: {timeLeft}</h2>
};

export default App;

