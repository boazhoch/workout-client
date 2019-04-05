import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_WORKOUT = gql`
  query Workout($id: ID) {
    workout(id: $id) {
      id
      title
      explanation {
        video {
          src
        }
        image {
          src
        }
      }
      workoutFlow {
        ... on Exercise {
          name
          desc
          explanation {
            video {
              src
            }
            image {
              src
            }
            desc
          }
          forceType
          equipment
          type
          experience
        }
        ... on Timer {
          duration
        }
      }
    }
  }
`;

interface IWorkoutProps {
  id: string;
  componentToRender(props: any): JSX.Element;
}

class Workout extends Component<IWorkoutProps> {
  render() {
    return (
      <Query query={GET_WORKOUT} variables={{ id: this.props.id }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return this.props.componentToRender(data.workout);
        }}
      </Query>
    );
  }
}

export default Workout;
