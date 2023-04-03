import { useEffect, useReducer, useState } from "react";
import "./Pagination.css";
import data from "../../api/PaginationApi";

function Pagination() {
    const [listData, setListData] = useState(data);
    const [paginateData, setPaginateData] = useState(listData.slice(0, 4));
    const [totalPage, setTotalPage] = useState(() => {
        let total = listData.length / 4;
        let arr = [];
        for (let i = 1; i <= total; i++) {
            arr.push(i);
        }
        return arr;
    });
    const [currPage, setCurrPage] = useState(1);

    // next
    const handleNext = () => {
        if (currPage === totalPage.length) {
            setCurrPage(1);
            setPaginateData(listData.slice(0, 4));
        } else {
            setCurrPage((prev) => prev + 1);
            setPaginateData(listData.slice(currPage * 4, currPage * 4 + 4));
        }
    };

    // prev
    const handlePrev = () => {
        if (currPage === 1) {
            setCurrPage(totalPage.length);
            setPaginateData(listData.slice(-4));
        } else {
            setCurrPage((prev) => prev - 1);
            setPaginateData(listData.slice(currPage * 4 - 8, currPage * 4 - 4));
        }
    };

    // Toggle
    const handleTogglePage = (item) => {
        setPaginateData(listData.slice(item * 4 - 4, item * 4));
    };

    return (
        <div className="pagination">
            <div className="pagination__width pagination__wrapper">
                <h1 className="pagination__header">Pagination</h1>
                <div className="pagination__underline"></div>
                <ul className="pagination-uses__list">
                    {paginateData.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="pagination-uses__list-item"
                            >
                                <div className="pagination-uses__list-item-wrapper">
                                    <img src={item.img} />
                                    <span className="pagination-uses__list-item-name">
                                        {item.name}
                                    </span>
                                    <button className="btn__pagination">
                                        View profiles
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="paginate">
                    <span onClick={handlePrev} className="paginate__prev">
                        Prev
                    </span>
                    {totalPage.map((item, index) => {
                        return (
                            <button
                                onClick={() => {
                                    handleTogglePage(item);
                                    setCurrPage(item);
                                }}
                                key={index}
                                style={
                                    currPage === item
                                        ? {
                                              backgroundColor: "#063251",
                                              color: "#fff",
                                          }
                                        : {}
                                }
                                className="paginate__btn"
                            >
                                {item}
                            </button>
                        );
                    })}

                    <span onClick={handleNext} className="paginate__next">
                        Next
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
