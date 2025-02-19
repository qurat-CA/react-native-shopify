import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'trigwell-cosmetics.myshopify.com',
  storefrontAccessToken: '261653571082715695d034a2a159e385',
});

export async function fetchAllProducts() {
  return client.product.fetchAll();
}

export async function fetchSingleProduct(productId: string) {
  return client.product.fetch(productId);
}
