import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!, $phone: String!, $username: String!, $image: String) {
  SignUp(name: $name, email: $email, password: $password, phone: $phone, username: $username, image: $image)
  {
  name
  phone
  username
  email
  image
  __typename
}}`