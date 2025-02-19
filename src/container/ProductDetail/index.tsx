import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Container, Typography} from '../../components';
import {ProductDetailProps} from '../../config/type/navigation';
import {fetchSingleProduct} from '../../shopify';
import {Colors} from '../../config';

interface Product {
  id: string;
  title: string;
  description: string;
  images: {src: string}[];
}

const ProductDetail = ({route}: ProductDetailProps) => {
  const {productId} = route.params;
  const [product, setProduct] = useState<Product | null>(null);

  const [description, setDescription] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleProduct(productId);
        setProduct(data);
        if (data?.description) {
          const splittedDesc = data?.description.split('. ');
          setDescription(splittedDesc);
        }
      } catch (error) {
        console.error('Error fetching product: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container scrollView>
      {product?.images && product?.images.length > 0 ? (
        <Image
          source={{uri: product.images[0].src}}
          style={{
            width: '100%',
            height: 300,
            marginTop: 30,
            backgroundColor: 'orange',
          }}
        />
      ) : (
        <Image
          source={{
            uri: 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
          }}
        />
      )}

      <Typography mT={20} bold size={22} color={Colors.primary}>
        {product?.title}
      </Typography>

      {description.map((desc, i) => {
        return (
          <Typography lineHeight={18} mT={20} size={15} color={Colors.text}>
            {desc}.
          </Typography>
        );
      })}
    </Container>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
