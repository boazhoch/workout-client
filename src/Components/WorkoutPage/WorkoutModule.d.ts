import { IExercise, IExplanationMedia } from "../ExercisePage/ExerciseModule";
import { ITimer } from "../Timer/TimerModule";

export interface IWorkoutPageProps {
  workout: IWorkout;
  renderWorkoutFlow(
    workoutFlow: (IExercise | ITimer)[]
  ): (JSX.Element | null)[];
}

interface IWorkout extends IExplanationMedia {
  id: string;
  title: string;
  workoutFlow: (IExercise | ITimer)[];
}
