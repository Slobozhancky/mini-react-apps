import React from "react";
import data from "./data/questions.json";
import { Game, Result } from "./components";
import "./scss/index.scss";

function App() {
    const [step, setStep] = React.useState(0);
    const [result, setResult] = React.useState(0);
    const question = data.questions[step];

    function nextQuestion(index) {
        setStep(step + 1);

        if (index === data.questions[step].correct) {
            setResult(result + 1)
        }

        console.log(result);

    }

    return (
        <div className="app">
            {step !== data.questions.length ? (
                <Game
                    step={step}
                    questionsLength={data.questions}
                    question={question}
                    nextQuestion={nextQuestion}
                />
            ) : (
                <Result result={result} questionsLength={data.questions}/>
            )}
        </div>
    );
}

export default App;
