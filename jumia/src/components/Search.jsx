import "../styles/search.scss"
// import { FaSearch } from "react-icons/fa";


const Search = () => {
    return (
        <div className="search-container">
             <input
                type="text"
                className="search-input"
                placeholder="Search products, brands and categories"
            />
            <button className="search-btn">
                Search
                {/* <FaSearch /> */}
            </button>
           

        </div>
    );
}
 
export default Search;