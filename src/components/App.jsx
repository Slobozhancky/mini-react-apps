import React from "react";
import "../scss/app.scss";

function App() {
    let [open, setOpen] = React.useState(false);

    function toggleModal() {
        setOpen(!open);
    }

    function Modal({ open, setOpen }) {
        return (
            <div className={`modal-wrapper hidden ${open ? "show" : ""}`}>
                <h3>Hello world</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam illo esse odit natus sunt odio incidunt quo placeat
                    officia cumque!
                </p>
                <div className="cross" onClick={() => setOpen(false)}>
                    X
                </div>
            </div>
        );
    }

    return (
        <div className="app-wrapper">
            <button className="btn" onClick={() => toggleModal()}>
                Show modal
            </button>

            {/* Приклад умовного рендеринга */}
            <Modal open={open} setOpen={setOpen} />
        </div>
    );
}

export default App;
