import {gql} from '@apollo/client';
export const LOGIN_QUERY = gql`
  query logIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
      refreshToken
    }
  }
`;

export const REGISTER_QUERY = gql`
  mutation signIn(
    $email: String!
    $password: String!
    $name: String
    $lastName: String
    $secondLastName: String
    $phone: String
    $address: String
  ) {
    signIn(
      email: $email
      password: $password
      name: $name
      lastName: $lastName
      phone: $phone
      secondLastName: $secondLastName
      address: $address
    )
  }
`;
