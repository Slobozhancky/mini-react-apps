import React from "react";
import "../scss/app.scss";
function App() {
    let [count, setCount] = React.useState(0);

    function plus() {
        setCount((count += 1));
    }

    function minus() {
        setCount((count -= 1));
    }

    return (
        <div className="App">
            <div className="counter_wrapper">
                <div className="counter">{count}</div>
                <dib className="btn_wrapper">
                    <button className="btn" onClick={plus}>
                        +
                    </button>
                    <button className="btn" onClick={minus}>
                        -
                    </button>
                </dib>
            </div>
        </div>
    );
}

export default App;
