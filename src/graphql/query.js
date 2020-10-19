import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      id
      token
      email
      name
      image
      username
      owner {
        id
        name
        image
        ownerId
      }
      participant {
        id
        name
        image
        ownerId
      }
    }
  }
`;

export const FIND_GROUP = gql`
  query oneGroup($id: Int!) {
    oneGroup(id: $id) {
      id
      name
      image
      ownerId
    }
  }
`;

export const CREATE_USER = gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
    $username: String!
    $image: String
  ) {
    SignUp(
      name: $name
      email: $email
      password: $password
      phone: $phone
      username: $username
      image: $image
    ) {
      name
      phone
      username
      email
      image
    }
  }
`;
