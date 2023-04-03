import { useEffect, useState } from "react";

import "./Cocktail.css";
import data from "../../api/cocktailApi";

function Cocktail() {
  const [cocktail, setCocktail] = useState(data);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeSearch = setTimeout(() => {
      let currCocktail = data.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setCocktail(currCocktail);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeSearch);
  }, [input]);

  return (
    <div className="cocktail">
      <div className="cocktail__header">
        <div className="cocktail__width">
          <img
            className="cocktail__logo"
            src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"
          />
          <div className="cocktail__header-nav">
            <span className="cocktail__header-nav-home">Home</span>
            <span className="cocktail__header-nav-about">About</span>
          </div>
        </div>
      </div>

      <div className="cocktail__body">
        <div className="cocktail__search">
          <div className="cocktail__search-box">
            <p className="cocktail__search-title">
              Search Your Favorite Cocktail
            </p>
            <input
              value={input}
              onChange={(e) => {
                setLoading(true);
                setInput(e.target.value);
              }}
              className="cocktail__search-iput"
            />
          </div>
        </div>
        <div className="cocktail__menu">
          <h2 className="cocktail__menu-title">Cocktails</h2>
          {loading ? (
            <div class="spinner-4"></div>
          ) : (
            <div>
              <ul className="cocktail__menu-list">
                {cocktail.length ? (
                  cocktail.map((item, index) => {
                    return (
                      <li key={index} className="cocktail__list-item">
                        <img
                          className="cocktail__list-item-img"
                          src={item.img}
                        />
                        <div className="cocktail__list-item-info">
                          <h2 className="cocktail__list-item-name">
                            {item.name}
                          </h2>

                          <p className="cocktail__list-item-glass">
                            {item.glass}
                          </p>
                          <p className="cocktail__list-item-kind">
                            {item.kind}
                          </p>
                          <button className="btn--cocktail">DETAILs</button>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <h2 className="cocktail__search-error">
                    No Cocktails Matched Your Search Criteria
                  </h2>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
