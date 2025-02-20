import {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Flex,
  ProductCard,
  SearchField,
  Typography,
} from '../../components';
import {Colors, Metrix} from '../../config';
import {fetchAllProducts} from '../../shopify';
import {Images} from '../../config/images';
import {styles} from './style';

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
      <View style={styles.header}>
        <Flex mT={16} justifyContent="space-between">
          <Flex gap={16}>
            <Image source={Images.dummyImage} style={styles.imageStyle} />

            <View style={{width: '50%'}}>
              <Typography light size={14} color={Colors.black}>
                Good Morning 👋
              </Typography>

              <Typography size={18} mT={4} bold color={Colors.black}>
                Qurat ul Ain
              </Typography>
            </View>
          </Flex>

          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            onPress={() => {}}
            style={styles.notificationCont}>
            <Icon name="shoppingcart" size={20} color={Colors.black} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            onPress={() => {}}
            style={styles.notificationCont}>
            <MaterialIcons
              name="notifications-none"
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
        </Flex>

        <SearchField />
      </View>

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
