import { Link } from "react-router-dom";

function Movies1() {
    return (
        <div className="movies1">
            <div className="movies__width">
                <div className="movies1__wrap">
                    <img
                        className="movies1__img"
                        src="https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
                    />
                    <div className="movies1__info">
                        <h1 className="movies1__info-name">
                            Amazing spider man
                        </h1>
                        <p className="movies1__info-description">
                            The father of a bourgeois family murders all those
                            he holds responsible for turning his daughter
                            Cristina into a call-girl.
                        </p>
                        <span className="movies1__info-since">2010</span>
                        <Link to={"/movies"} className="movies1__btn">
                            Back to movies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies1;
