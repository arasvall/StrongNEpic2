import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewWorkoutPage from "../pages/NewWorkoutPage";
import BookWorkoutPage from "../pages/BookWorkoutPage";
import Contact from "../pages/ContactPage";
import Navbar from "../components/Navbar";

function PublicRoutes(): JSX.Element {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewWorkoutPage" element={<NewWorkoutPage />} />
        <Route path="/BookWorkoutPage" element={<BookWorkoutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default PublicRoutes;
