import { Workout } from "../types/Workout";
import { WorkoutItem } from "./WorkoutItem";

type WorkoutListProps = {
  workouts: Workout[];
};

function WorkoutList({ workouts }: WorkoutListProps): JSX.Element {
  return (
    <>
      {workouts.map((workout) => (
        <WorkoutItem key={workout.title} workout={workout} />
      ))}
    </>
  );
}

export default WorkoutList;
