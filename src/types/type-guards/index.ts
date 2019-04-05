import { IExercise } from "../../components/ExercisePage/ExerciseModule";
import { ITimer } from "../../components/Timer/TimerModule";

function isTimer(workoutFlow: IExercise | ITimer): workoutFlow is ITimer {
  return !!(<ITimer>workoutFlow).duration;
}

export { isTimer };
