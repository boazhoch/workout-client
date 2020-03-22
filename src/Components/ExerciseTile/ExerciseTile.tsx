import React, { PureComponent } from "react";
import { IExercisePageProps } from "../ExercisePage/ExerciseModule";

class ExerciseTile extends PureComponent<IExercisePageProps> {
  render() {
    return (
      this.props.exercise && (
        <div className="section">
          <div className="container">
            <h3 className="title">{this.props.exercise.name}</h3>
            <div className="tile is-ancestor">
              {this.props.exercise.explanation &&
                this.props.exercise.explanation.video && (
                  <article className="tile is-child box is-paddingless is-shadowless has-text-centered">
                    <video
                      controls
                      src={this.props.exercise.explanation.video.src}
                    />
                  </article>
                )}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ExerciseTile;
