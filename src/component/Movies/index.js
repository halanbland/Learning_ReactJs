import "./Movies.css";
import data from "../../api/moviesApi";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Movies() {
    const [movies, setMovies] = useState(data);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        let currSearch = data.filter((item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setMovies([...currSearch]);
    }, [searchInput]);
    return (
        <div className="movies">
            <div className="movies__width">
                <h1 className="movies__search">Search Movies</h1>
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    className="movies__search-input"
                />
                {searchInput === "" ? (
                    <span className="movies__search-invalid">
                        Incorrect IMDb ID.
                    </span>
                ) : movies.length >= 5 ? (
                    <span className="movies__search-invalid">
                        Too Many Results.
                    </span>
                ) : movies.length === 0 ? (
                    <span className="movies__search-invalid">
                        Movie Not Found!
                    </span>
                ) : (
                    ""
                )}

                <ul className="movies__list">
                    {movies.map((item, index) => {
                        return (
                            <li key={index} className="movies__list-item">
                                <Link
                                    to={"/movies1"}
                                    className="movies__list-item-wrap"
                                >
                                    <img
                                        className="movies__list-item-img"
                                        src={item.img}
                                    />
                                    <div className="movies__list-item-info">
                                        <h3 className="movies__list-item-name">
                                            {item.name}
                                        </h3>
                                        <span className="movies__list-item-since">
                                            {item.since}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Movies;
