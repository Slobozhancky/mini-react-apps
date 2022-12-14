import React from "react";

function Game({ step, question, nextQuestion, questionsLength }) {

    let progressBar = (step / questionsLength.length) * 100;


    return (
        <div className="game-wrapper">
            <div>
                <div style={{ width: `${progressBar}%` }} className="progress"></div>
            </div>
            <h3 className="title">{question.title}</h3>
            <ul className="questions-wrapper">
                {question.variants.map((text, index) => (
                    <li key={text} onClick={() => nextQuestion(index)}>
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Game;
