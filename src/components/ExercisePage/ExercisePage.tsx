import React, { PureComponent } from "react";
import { IExercisePageProps } from "./ExerciseModule";

class ExercisePage extends PureComponent<IExercisePageProps> {
  render() {
    return (
      this.props.exercise && (
        <div className="section">
          <div className="container">
            <h1 className="title">{this.props.exercise.name}</h1>
            <h2 className="subtitle">{this.props.exercise.desc}</h2>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
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
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <div className="content">
                        {this.props.exercise.explanation &&
                          this.props.exercise.explanation.desc && (
                            <>
                              <h3>Instructions</h3>
                              <p>{this.props.exercise.explanation.desc}</p>
                            </>
                          )}
                        <h4>Info</h4>
                        <ul>
                          <li>Force: {this.props.exercise.forceType}</li>
                          <li>Strength type: {this.props.exercise.type}</li>
                          <li>Equipment: {this.props.exercise.type}</li>
                          <li>Experience: {this.props.exercise.type}</li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                {this.props.exercise.explanation &&
                  this.props.exercise.explanation.image && (
                    <article className="tile is-child box">
                      <figure className="image">
                        <img src={this.props.exercise.explanation.image.src} />
                      </figure>
                    </article>
                  )}
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ExercisePage;
