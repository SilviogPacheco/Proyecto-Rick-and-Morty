import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
