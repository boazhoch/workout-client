import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_DOG = gql`
  query Exercise($id: ID) {
    exercise(id: $id) {
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
  }
`;

interface IExerciseProps {
  id: string;
  componentToRender(props: any): JSX.Element;
}

class Exercise extends Component<IExerciseProps> {
  render() {
    return (
      <Query query={GET_DOG} variables={{ id: this.props.id }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return this.props.componentToRender(data.exercise);
        }}
      </Query>
    );
  }
}

export default Exercise;
