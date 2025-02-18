import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'https://trigwell-cosmetics.myshopify.com/api/2023-01/graphql.json',
  storefrontAccessToken: '261653571082715695d034a2a159e385',
});

export async function fetchAllProducts() {
  return client.product.fetchAll();
}
