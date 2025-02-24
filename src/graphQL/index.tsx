import {gql} from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          variants(first: 1) {
            edges {
              node {
                priceV2 {
                  amount
                }
              }
            }
          }
          images(first: 10) {
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export {GET_PRODUCTS};
