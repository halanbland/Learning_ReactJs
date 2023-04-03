import "./Hacker.css";
import datas from "../../api/hackerApi";
import { useState } from "react";
import { useEffect } from "react";

function Hacker() {
    const [data, setData] = useState(datas);
    const [titles, setTitles] = useState(data.slice(0, 2));
    const [searchTitle, setSearchTitle] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalPage, setTotalPage] = useState(Math.ceil(data.length / 2));
    const [input, setInput] = useState("");

    const handleData = (e) => {
        setInput(e.target.value);
        let titleSearch = data.filter((item) =>
            item.title.toUpperCase().includes(e.target.value.toUpperCase())
        );
        setSearchTitle([...titleSearch]);
    };

    useEffect(() => {
        if (input !== "") {
            setTitles(searchTitle.slice(0, 2));
            setTotalPage(Math.ceil(searchTitle.length / 2));
            setCurrPage(1);
            if (searchTitle.length === 0) {
                setCurrPage(0);
            }
        }
        if (input === "") {
            setTitles(data.slice(0, 2));
            setTotalPage(Math.ceil(data.length / 2));
            setCurrPage(1);
        }
    }, [input]);

    const handleNext = () => {
        setCurrPage(currPage + 1);
        if (searchTitle.length > 0) {
            setTitles(searchTitle.slice(currPage * 2, currPage * 2 + 2));
            if (currPage === totalPage) {
                setCurrPage(1);
                setTitles(searchTitle.slice(0, 2));
            }
        } else {
            setTitles(data.slice(currPage * 2, currPage * 2 + 2));
            if (currPage === totalPage) {
                setCurrPage(1);
                setTitles(data.slice(0, 2));
            }
        }
    };

    const handlePrev = () => {
        setCurrPage(currPage - 1);
        if (searchTitle.length > 0) {
            if (currPage === 1) {
                setCurrPage(totalPage);
                console.log(totalPage);
                let num = totalPage * 2 - 2;
                setTitles(searchTitle.slice(num));
            } else {
                setTitles(
                    searchTitle.slice(currPage * 2 - 4, currPage * 2 - 2)
                );
            }
        } else {
            setTitles(data.slice(currPage * 2 - 4, currPage * 2 - 2));
            if (currPage === 1) {
                setCurrPage(totalPage);
                setTitles(data.slice(-1));
            }
        }
    };

    const handleRemove = (id) => {
        if (searchTitle.length >= 1) {
            let newArr = searchTitle.filter((item) => item.id !== id);
            setSearchTitle(newArr);

            setTitles([...newArr.slice(currPage * 2 - 2, currPage * 2)]);
            setTotalPage(Math.ceil(newArr.length / 2));
            if (Math.ceil(newArr.length / 2) === 0) {
                setCurrPage(0);
            }
        } else {
            let newArr = data.filter((item) => item.id !== id);
            setData(newArr);
            setTitles([...newArr.slice(currPage * 2 - 2, currPage * 2)]);
            setTotalPage(Math.ceil(newArr.length / 2));
            if (Math.ceil(newArr.length / 2) === 0) {
                setCurrPage(0);
            }
        }
    };

    return (
        <div className="hacker">
            <h1 className="hacker__search">Search Hacker News</h1>
            <input
                onChange={handleData}
                value={input}
                className="hacker__search-input"
            ></input>
            <div className="hacker__pagination">
                <span onClick={handlePrev} className="hacker__pagination-prev">
                    Prev
                </span>
                <span className="hacker__pagination-counting">
                    {currPage} of {totalPage}
                </span>
                <span onClick={handleNext} className="hacker__pagination-next">
                    Next
                </span>
            </div>
            <ul className="hacker__list">
                {titles.map((item, index) => {
                    return (
                        <li key={index} className="hacker__list-item">
                            <div className="hacker__list-item-wrap">
                                <h3 className="hacker__list-item-title">
                                    {item.title}
                                </h3>
                                <p className="hacker__list-item-description">
                                    {item.description}
                                </p>
                                <div className="hacker__function">
                                    <span className="hacker__function-readmore">
                                        Read more
                                    </span>
                                    <span
                                        onClick={() => handleRemove(item.id)}
                                        className="hacker__function-remove"
                                    >
                                        Remove
                                    </span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Hacker;
