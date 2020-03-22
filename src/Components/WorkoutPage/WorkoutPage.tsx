import React from "react";

// import { isTimer } from "../../types/type-guards";
import { IWorkoutPageProps } from "./WorkoutModule";
import styles from "./WorkoutPage.module.css";

const WorkoutPage: React.FC<IWorkoutPageProps> = (props: IWorkoutPageProps) => {
  return (
    <>
      <section className="hero is-info">
        <div className={`hero-body ${styles.hero__body__relative}`}>
          <div className="container has-text-centered">
            <div className={styles.workout__title__wrapper}>
              <h1 className="title">{props.workout.title}</h1>
              <h2 className="subtitle">
                {props.workout.explanation && props.workout.explanation.desc}
              </h2>
            </div>
            {props.workout.explanation && props.workout.explanation.video && (
              <video
                className={styles.video__main}
                controls
                src={props.workout.explanation.video.src}
              />
            )}
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section className="container">
        {props.renderWorkoutFlow(props.workout.workoutFlow)}
      </section>
    </>
  );
};

export default WorkoutPage;
