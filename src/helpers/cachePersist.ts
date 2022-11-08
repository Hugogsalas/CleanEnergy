import {useState} from 'react';
import {ApolloClient, InMemoryCache} from '@apollo/client';

export const useClient = () => {
  const [client] = useState(
    new ApolloClient({
      uri: 'http://localhost:8080/graphql',
      cache: new InMemoryCache(),
    }),
  );

  return [client];
};
