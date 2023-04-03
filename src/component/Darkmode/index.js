import { useState } from "react";
import "./Darkmode.css";

function Darkmode() {
    const [active, setActive] = useState(false);

    return (
        <div className={`darkmode ${active && "darkmode--active"}`}>
            <div className="darkmode__width">
                <div className="darkmode__head">
                    <h1
                        className={`darkmode__title ${
                            active && "darkmode__title--active"
                        }`}
                    >
                        Overreacted
                    </h1>
                    <button
                        onClick={() => setActive(!active)}
                        className="darkmode__btn"
                    >
                        Toggle
                    </button>
                </div>
                <div className="darkmode__body">
                    <div
                        className={`darkmode__content ${
                            active && "darkmode__content--active"
                        }`}
                    >
                        <h2
                            className={`darkmode__content-heading ${
                                active && "darkmode__content-heading--active"
                            }`}
                        >
                            Goodby, Clean Code
                        </h2>
                        <p className="darkmode__content-date">
                            Sunday 4th, 202011 min read
                        </p>
                        <p className="darkmode__content-work">
                            Let clean code guide you. Then let it go.
                        </p>
                    </div>
                    <div
                        className={`darkmode__content ${
                            active && "darkmode__content--active"
                        }`}
                    >
                        <h2
                            className={`darkmode__content-heading ${
                                active && "darkmode__content-heading--active"
                            }`}
                        >
                            My Decade In Review
                        </h2>
                        <p className="darkmode__content-date">
                            Saturday 11th, 20185 min read
                        </p>
                        <p className="darkmode__content-work">
                            A personal reflection.
                        </p>
                    </div>
                    <div
                        className={`darkmode__content ${
                            active && "darkmode__content--active"
                        }`}
                    >
                        <h2
                            className={`darkmode__content-heading ${
                                active && "darkmode__content-heading--active"
                            }`}
                        >
                            My Decade In Review
                        </h2>
                        <p className="darkmode__content-date">
                            Friday 22nd, 20195 min read
                        </p>
                        <p className="darkmode__content-work">
                            Come waste your time with me
                        </p>
                    </div>
                    <div
                        className={`darkmode__content ${
                            active && "darkmode__content--active"
                        }`}
                    >
                        <h2
                            className={`darkmode__content-heading ${
                                active && "darkmode__content-heading--active"
                            }`}
                        >
                            What Are The React Team Principles
                        </h2>
                        <p className="darkmode__content-date">
                            Thursday 4th, 20155 min read
                        </p>
                        <p className="darkmode__content-work">UI Before API.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Darkmode;
