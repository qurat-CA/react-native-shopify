import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://trigwell-cosmetics.myshopify.com/api/2023-10/graphql.json',
    headers: {
      'X-Shopify-Storefront-Access-Token': '261653571082715695d034a2a159e385',
      'Content-Type': 'application/json',
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
