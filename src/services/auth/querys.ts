import {gql} from '@apollo/client';
export const LOGIN_QUERY = gql`
  query logIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
      refreshToken
    }
  }
`;
