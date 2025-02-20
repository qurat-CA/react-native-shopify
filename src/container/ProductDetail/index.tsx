import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Container, Typography} from '../../components';
import {ProductDetailProps} from '../../config/type/navigation';
import {fetchSingleProduct} from '../../shopify';
import {Colors, Metrix} from '../../config';
import {PLACEHOLDER_IMAGE} from '../../config/images';
import {styles} from './style';

interface Product {
  id: string;
  title: string;
  description: string;
  images: {src: string}[];
  availableForSale?: boolean;
}

const ProductDetail = ({route}: ProductDetailProps) => {
  const {productId} = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [description, setDescription] = useState<string[]>([]);

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
      {product?.availableForSale && (
        <View style={styles.saleBadgeCont}>
          <Typography
            mL={-3}
            textAlign="center"
            medium
            size={15}
            color={Colors.black}>
            Sale
          </Typography>
        </View>
      )}
      {product?.images && product?.images.length > 0 ? (
        <Image source={{uri: product.images[0].src}} style={styles.img} />
      ) : (
        <Image
          source={{
            uri: PLACEHOLDER_IMAGE,
          }}
        />
      )}

      <View
        style={{
          width: Metrix.HorizontalSize(50),
          height: Metrix.HorizontalSize(50),
          borderRadius: 50,
          backgroundColor: Colors.lightgreen,
          position: 'absolute',
          top: Metrix.VerticalSize(320),
          right: Metrix.HorizontalSize(0),
          justifyContent: 'center',
        }}>
        <Icon
          name="hearto"
          style={{textAlign: 'center'}}
          size={22}
          color={Colors.darkgreen}
        />
      </View>

      <Typography mT={20} bold size={22} color={Colors.primary}>
        {product?.title}
      </Typography>

      {description.map((desc, i) => {
        return (
          <Typography
            key={i}
            lineHeight={18}
            mT={20}
            size={15}
            color={Colors.text}>
            {desc}.
          </Typography>
        );
      })}
    </Container>
  );
};

export default ProductDetail;
