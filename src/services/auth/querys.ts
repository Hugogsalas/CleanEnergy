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

export const GET_BATTERIES_QUERY = gql`
  query {
    getBatteryList {
      _id
      name
      Type
      voltages
    }
  }
`;

export const UPDATE_BATTERIES_QUERY = gql`
  mutation updateBattery(
    $_id: String!
    $name: String
    $Type: String
    $voltages: [Float]
  ) {
    updateBattery(_id: $_id, name: $name, Type: $Type, voltages: $voltages) {
      _id
      name
      Type
      voltages
    }
  }
`;
