import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar(): JSX.Element {
  return (
    <>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/NewWorkoutPage" className="link">
          new workout
        </Link>
        <Link to="/BookWorkoutPage" className="link">
          Book
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
