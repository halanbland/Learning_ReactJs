import "./App.css";
import Tour from "./component/Tour";
import Reviews from "./component/Reviews";
import Accordion from "./component/Accordion";
import Menu from "./component/Menu";
import Taps from "./component/Taps";
import Slider from "./component/Slider";
import Lorem from "./component/Lorem";
import ColorGenertator from "./component/ColorGenerator";
import GroceryBud from "./component/GroceryBud";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Strapi from "./component/Strapi";
import Cart from "./component/Cart";
import Cocktail from "./component/Cocktail";
import StripeMenus from "./component/StripeMenus";
import RandomPerson from "./component/RandomPerson";
import Pagination from "./component/Pagination";
import Movies from "./component/Movies";
import Movies1 from "./component/Movies/movies1";
import Darkmode from "./component/Darkmode";
import Hacker from "./component/HackerNew";
import Quiz from "./component/Quiz";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Movies */}
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies1" element={<Movies1 />} />

                {/* Darkomode */}
                <Route path="/darkmode" element={<Darkmode />} />
                {/* Hacker */}
                <Route path="/hacker" element={<Hacker />} />
                {/* Quiz */}
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </div>
    );
}

export default App;
