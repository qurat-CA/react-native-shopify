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

function getSingleProduct(productId: number) {
  const query = `
    {
      product(id: ${productId}) {
        id
        title
        descriptionHtml
        images(first: 1) {
          edges {
            node {
              src
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              priceV2 {
                amount
                currencyCode
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
    .then(response => response)
    .catch(error => {
      console.error('Error fetching product:', error);
      return null;
    });
}

export {getProducts, getSingleProduct};
