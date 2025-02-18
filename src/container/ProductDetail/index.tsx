import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container} from '../../components';
import {getSingleProduct} from '../../shopify/api';
import {ProductDetailProps} from '../../config/type/navigation';
import {fetchSingleProduct} from '../../shopify';

const ProductDetail = ({route}: ProductDetailProps) => {
  const {productId} = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleProduct(productId).then(data => {
      setProduct(data);
    });
  }, []);

  return (
    <Container>
      <Text>{'product.title'}</Text>
    </Container>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
