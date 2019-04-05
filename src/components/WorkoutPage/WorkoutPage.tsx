import React, { PureComponent } from "react";
import { IWorkoutPageProps } from "./WorkoutModule";
import styles from "./WorkoutPage.module.css";
import { isTimer } from "../../types/type-guards";

class WorkoutPage extends PureComponent<IWorkoutPageProps> {
  render() {
    return (
      <>
        <section className="hero is-info">
          <div className={`hero-body ${styles.hero__body__relative}`}>
            <div className="container has-text-centered">
              <div className={styles.workout__title__wrapper}>
                <h1 className="title">{this.props.workout.title}</h1>
                <h2 className="subtitle">
                  {this.props.workout.explanation &&
                    this.props.workout.explanation.desc}
                </h2>
              </div>
              {this.props.workout.explanation &&
                this.props.workout.explanation.video && (
                  <video
                    className={styles.video__main}
                    controls
                    src={this.props.workout.explanation.video.src}
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
          {this.props.renderWorkoutFlow(this.props.workout.workoutFlow)}
        </section>
      </>
    );
  }
}

export default WorkoutPage;
