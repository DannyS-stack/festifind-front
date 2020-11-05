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

export const GET_ALL_USERS = gql`
  query allUsers {
    allUsers {
      id
      email
      name
      image
      username
      longitude
      latitude
    }
  }
`;

export const UPDATE_USER_LOCATION = gql`
  mutation updateLocation($id: Int, $longitude: Float, $latitude: Float) {
    updateLocation(id: $id, longitude: $longitude, latitude: $latitude) {
      username
      longitude
      latitude
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
      participant {
        id
        name
        username
        email
        image
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

export const CREATE_PARTICIPANT = gql`
  mutation createParticipant($email: String, $groupId: Int) {
    createParticipant(email: $email, groupId: $groupId) {
      id
      userId
      groupId
    }
  }
`;

export const DELETE_PARTICIPANT = gql`
  mutation deleteParticipant($userId: Int, $groupId: Int) {
    deleteParticipant(userId: $userId, groupId: $groupId) {
      id
      userId
      groupId
    }
  }
`;
