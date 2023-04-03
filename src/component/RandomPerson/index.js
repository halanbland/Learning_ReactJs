import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RandomPerson.css";
import {
    faBagShopping,
    faCalendar,
    faCity,
    faEnvelope,
    faPhone,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import data from "../../api/randomppApi";
import { useEffect, useState } from "react";

function RandomPerson() {
    const [peoples, setPeople] = useState(data);
    const [randomuser, setRandomUser] = useState(() => {
        return peoples[Math.floor(Math.random() * peoples.length)];
    });
    const [currInfo, setCurrInfor] = useState({
        currentInfor: randomuser.name,
        curr: "name",
    });

    useEffect(() => {
        setCurrInfor({
            currentInfor: randomuser.name,
            curr: "name",
        });
    }, [randomuser]);

    // handle name info
    const handleNameInfo = () => {
        console.log(123);
        setCurrInfor(() => {
            return {
                currentInfor: randomuser.name,
                curr: "name",
            };
        });
    };

    // handle Mail
    const handleEmail = () => {
        setCurrInfor(() => {
            return {
                currentInfor: randomuser.mail,
                curr: "mail",
            };
        });
    };

    // handle Age
    const handleAge = () => {
        setCurrInfor(() => {
            return {
                currentInfor: randomuser.age,
                curr: "age",
            };
        });
    };

    // handle City
    const handleCity = () => {
        setCurrInfor(() => {
            return {
                currentInfor: randomuser.city,
                curr: "city",
            };
        });
    };

    // handle phone
    const handlePhone = () => {
        setCurrInfor(() => {
            return {
                currentInfor: randomuser.phone,
                curr: "phone",
            };
        });
    };

    // handle password
    const handlePassword = () => {
        setCurrInfor(() => {
            return {
                currentInfor: randomuser.password,
                curr: "password",
            };
        });
    };

    return (
        <div className="random-person">
            <div className="random-person__content">
                <div className="person__content-top"></div>
                <div className="person__content-bottom">
                    <span className="random-person__img-wrapper">
                        <img
                            className="random-person__img"
                            src={randomuser.img}
                        />
                    </span>
                    <span className="person__content-curr">
                        My {currInfo.curr} is
                    </span>
                    <span className="person__content-description">
                        {currInfo.currentInfor}
                    </span>
                    <ul className="person__infor-list">
                        <li
                            onMouseOver={handleNameInfo}
                            className="person__infor-list-item"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </li>
                        <li
                            onMouseOver={handleEmail}
                            className="person__infor-list-item"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </li>
                        <li
                            onMouseOver={handleAge}
                            className="person__infor-list-item"
                        >
                            <FontAwesomeIcon icon={faCalendar} />
                        </li>
                        <li
                            onMouseOver={handleCity}
                            className="person__infor-list-item"
                        >
                            <FontAwesomeIcon icon={faCity} />
                        </li>
                        <li
                            onMouseOver={handlePhone}
                            className="person__infor-list-item"
                        >
                            <FontAwesomeIcon icon={faPhone} />
                        </li>
                        <li
                            onMouseOver={handlePassword}
                            className="person__infor-list-item"
                        >
                            <FontAwesomeIcon icon={faBagShopping} />
                        </li>
                    </ul>
                    <button
                        onClick={() =>
                            setRandomUser(
                                peoples[
                                    Math.floor(Math.random() * peoples.length)
                                ]
                            )
                        }
                        className="btn__random-users"
                    >
                        RANDOM USERS
                    </button>
                </div>
            </div>
        </div>
    );
}
export default RandomPerson;
