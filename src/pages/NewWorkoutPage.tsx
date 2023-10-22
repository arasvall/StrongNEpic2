//rendera ut alla tillgängliga pass
import { Workout } from "../types/Workout";
import { useState } from "react";
import "../style/NewWorkoutPage.css";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";

export default function NewWorkoutPage(): JSX.Element {
  const [newWorkouts, setNewWorkout] = useState([] as Workout[]);

  const addWorkout = (workouts: Workout) => {
    setNewWorkout([...newWorkouts, workouts]);
  };

  return (
    <div className="new-workout-page">
      <h3>Add new workout</h3>
      <WorkoutForm handleNewWorkout={addWorkout} />
      <WorkoutList workouts={newWorkouts} />
    </div>
  );
}
