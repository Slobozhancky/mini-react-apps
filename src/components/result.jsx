import React from "react";
import Win from "../assets/images/win.png";

function Result({result, questionsLength}) {
    return (
        <div className="result">
            <img src={Win} alt="res" />
            <p>Вірних {result} з {questionsLength.length} </p>
            <a href="/">
                <button>Спробувати ще раз</button>
            </a>
        </div>
    );
}

export default Result;
