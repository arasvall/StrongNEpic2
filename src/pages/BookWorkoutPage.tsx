import "../style/BookWorkoutPage.css";
import { useState } from "react";

let workoutDB = require("../db/workouts.json");

function BookWorkoutPage() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="book-workout-page">
      <h3>Boka pass</h3>
      {workoutDB.map(
        (data: { title: string; description: string; index: number }) => (
          <div className="book-workout">
            <h4>{data.title}</h4>
            <p>{data.description}</p>

            <button className="book-btn" key={data.index} onClick={handleClick}>
              {active ? "Bokad" : "Boka"}
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default BookWorkoutPage;
