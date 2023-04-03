import "./Quiz.css";

import data from "../../api/quizApi";
import { useState } from "react";

function Quiz() {
    const [formData, setFormData] = useState({
        num: 3,
        level: "easy",
        category: "sport",
    });
    const [listData, setListData] = useState([]);
    const [listQuestion, setListQuestion] = useState([]);
    const [isStart, setIsStart] = useState(false);
    const [currQuestion, setCurrQuestion] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [congrats, setCongrats] = useState(false);
    const [result, setResult] = useState(0);
    let a = "Hello";
    console.log(listQuestion);

    const handleSubmit = () => {
        setListData(() => {
            let arr = data[formData.category].filter(
                (item) => item.level === formData.level
            );
            let currQues = [];
            while (true) {
                let randomNum = Math.floor(Math.random() * arr.length);
                currQues.push(arr[randomNum]);
                arr.splice(randomNum, 1);
                if (currQues.length === formData.num) {
                    setListQuestion(currQues);
                    setCurrQuestion(currQues[0]);
                    setIsStart(true);
                    return;
                }
            }
        });
    };

    const handleNext = () => {
        if (currentIndex === listQuestion.length - 1) {
            setCongrats(true);
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prev) => prev + 1);
            setCurrQuestion(listQuestion[currentIndex + 1]);
        }
    };

    const handleRetry = () => {
        setCongrats(false);
        setIsStart(false);
        setResult(0);
    };

    const handleResult = (type) => {
        if (type) {
            setResult((prev) => prev + 1);
            handleNext();
        } else {
            handleNext();
        }
    };

    return (
        <div className="quiz">
            {!isStart && (
                <div className="quiz__form">
                    <h1 className="quiz__form-heading">Setup Quiz</h1>
                    <div className="form-select__questions">
                        <label className="form-select__questions-title">
                            Number Of Questions
                        </label>
                        <input
                            value={formData.num}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    num: e.target.value,
                                }))
                            }
                            type="number"
                            min="1"
                            max="5"
                            step="1"
                            className="form-select__questions-nums"
                        />
                    </div>
                    <div className="form-select__questions-type">
                        <label className="form-select__questions-title">
                            Category
                        </label>
                        <select
                            value={formData.category}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    category: e.target.value,
                                }))
                            }
                            className="questions-type-list"
                        >
                            <option
                                value="sports"
                                className="questions-type-list-item"
                            >
                                Sports
                            </option>
                            <option
                                value="history"
                                className="questions-type-list-item"
                            >
                                History
                            </option>
                            <option
                                value="politics"
                                className="questions-type-list-item"
                            >
                                Politics
                            </option>
                        </select>
                    </div>
                    <div className="form-select__levels">
                        <label className="form-select__levels-title">
                            Select Difficulty
                        </label>
                        <select
                            value={formData.level}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    level: e.target.value,
                                }))
                            }
                            className="select-levels__list"
                        >
                            <option
                                value="easy"
                                className="select-levels__list-item"
                            >
                                Easy
                            </option>
                            <option
                                value="medium"
                                className="select-levels__list-item"
                            >
                                Medium
                            </option>
                            <option
                                value="hard"
                                className="select-levels__list-item"
                            >
                                Hard
                            </option>
                        </select>
                        <button
                            onClick={handleSubmit}
                            className="btn btn--quiz"
                        >
                            Start
                        </button>
                    </div>
                </div>
            )}

            {/* modal */}
            {isStart && (
                <div className="quiz__modal">
                    <div className="quiz__width quiz__wrap">
                        <p className="modal__total-correct">
                            Correct answers : {result}/{currentIndex}
                        </p>
                        <div className="modal__content-question">
                            <h1 className="modal__question">
                                {currQuestion.ques}
                            </h1>
                            {currQuestion.anws.map((item, index) => {
                                return (
                                    <button
                                        onClick={() => handleResult(item.type)}
                                        key={index}
                                        className="btn__quiz-answers"
                                    >
                                        {item.reply}
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            onClick={handleNext}
                            className="btn btn--quiz btn--quiz-next"
                        >
                            Next question
                        </button>
                    </div>
                </div>
            )}
            {/* Congrats */}
            {congrats && (
                <div className="quiz__congrats">
                    <div className="quiz__congrats-content">
                        <h1 className="quiz__congrats-title">Congrats!</h1>
                        <p className="quiz__congrats-result">
                            You answered{" "}
                            {Math.floor((result / listQuestion.length) * 100)}%
                            of questions correctly
                        </p>
                        <span
                            onClick={handleRetry}
                            className="btn__quiz--again"
                        >
                            Play again
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
