import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Container, ProductCard, Typography} from '../../components';
import {Colors} from '../../config/color';
import Metrix from '../../config/metrix';
import {getProducts} from '../../shopify/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Typography mT={80} bold size={18} color={Colors.primary}>
        All Products
      </Typography>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ProductCard item={item} />}
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatlist: {
    paddingHorizontal: Metrix.HorizontalSize(5),
    marginHorizontal: Metrix.HorizontalSize(-5),
    marginTop: Metrix.VerticalSize(22),
  },

  contentContainer: {
    paddingBottom: Metrix.VerticalSize(75),
    paddingTop: Metrix.VerticalSize(2),
  },
});
