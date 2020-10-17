import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      email
      name
      image
      username
      id
    }
  }
`;

export const GET_USERS_GROUPS = gql`
  query allGroupsofUser($id: Int!) {
    allGroupsofUser(id: $id) {
      owner {
        name
        image
        ownerId
      }
      participant {
        name
        image
        ownerId
      }
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
