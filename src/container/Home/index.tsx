import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Container, ProductCard, Typography} from '../../components';
import {Colors, Metrix} from '../../config';
import {fetchAllProducts} from '../../shopify';

interface Product {
  id: string;
  title: string;
  images: {src: string}[];
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.header} />

      <Container>
        <Typography mT={24} bold size={18} color={Colors.primary}>
          All Products
        </Typography>

        <FlatList
          data={products}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ProductCard item={item} />}
          style={styles.flatlist}
          contentContainerStyle={styles.contentContainer}
        />
      </Container>
    </>
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

  header: {
    width: '100%',
    height: Metrix.VerticalSize(200),
    backgroundColor: Colors.lightgreen,
  },
});
