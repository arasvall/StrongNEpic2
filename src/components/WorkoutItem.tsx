import { Workout } from "../types/Workout";
import "../style/workoutItem.css";

type WorkoutItemProps = {
  workout: Workout;
};


function WorkoutItem({ workout }: WorkoutItemProps): JSX.Element {

  return (
    <>
      <div className="workout-item">
        <h4>{workout.title} </h4>
        <p>{workout.description}</p>
      </div>
    </>
  );
}

export { WorkoutItem };
