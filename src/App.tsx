import { motion } from "framer-motion";
import { faker } from "@faker-js/faker"
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";

const words = Array.from({ length: 10 }, () => faker.word.sample());


const App = () => {
  return(
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words.join(" ")} />;
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

const GeneratedWords = ({words}: {words: string}) => {
    return <div className="text-4xl text-center text-slate-500">{words}</div>
};

const CountdownTimer = ({timeLeft}: {timeLeft: number}) => {
  return <h2 className = "text-primary-400 font-medium">Time: {timeLeft}</h2>
};

export default App;

