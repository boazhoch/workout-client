import React from "react";

import { IExercisePageProps } from "./ExerciseModule";

const ExercisePage: React.FC<IExercisePageProps> = (
  props: IExercisePageProps
) => {
  const { exercise } = props;
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">{exercise && exercise.name}</h1>
        <h2 className="subtitle">{exercise && exercise.desc}</h2>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                {exercise &&
                  exercise.explanation &&
                  exercise &&
                  exercise.explanation.video && (
                    <article className="tile is-child box is-paddingless is-shadowless has-text-centered">
                      <video
                        controls
                        src={exercise && exercise.explanation.video.src}
                      />
                    </article>
                  )}
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <div className="content">
                    {exercise &&
                      exercise.explanation &&
                      exercise &&
                      exercise.explanation.desc && (
                        <>
                          <h3>Instructions</h3>
                          <p>{exercise && exercise.explanation.desc}</p>
                        </>
                      )}
                    <h4>Info</h4>
                    <ul>
                      <li>Force: {exercise && exercise.forceType}</li>
                      <li>Strength type: {exercise && exercise.type}</li>
                      <li>Equipment: {exercise && exercise.type}</li>
                      <li>Experience: {exercise && exercise.type}</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            {exercise &&
              exercise.explanation &&
              exercise &&
              exercise.explanation.image && (
                <article className="tile is-child box">
                  <figure className="image">
                    <img src={exercise && exercise.explanation.image.src} />
                  </figure>
                </article>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExercisePage;
