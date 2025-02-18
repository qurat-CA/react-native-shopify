import axios from 'axios';

const SHOPIFY_API_URL =
  'https://trigwell-cosmetics.myshopify.com/api/2023-01/graphql.json';
const SHOPIFY_ACCESS_TOKEN = '261653571082715695d034a2a159e385';

function getProducts() {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            descriptionHtml
            variants(first: 1) {
              edges {
                node {
                  priceV2 {
                    amount
                    currencyCode
                  }
                  image {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  return axios
    .post(
      SHOPIFY_API_URL,
      {query},
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => response.data.data.products.edges)
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}

export {getProducts};
