import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Button, Container, ImagesCarousel, Typography} from '../../components';
import {ProductDetailProps} from '../../config/type/navigation';
import {fetchSingleProduct} from '../../shopify';
import {Colors, Metrix} from '../../config';
import {PLACEHOLDER_IMAGE} from '../../config/images';
import {styles} from './style';

export interface ProductType {
  id: string;
  title: string;
  description: string;
  images: {src: string}[];
  availableForSale?: boolean;
}

const ProductDetail = ({route}: ProductDetailProps) => {
  const {productId} = route.params;
  const [product, setProduct] = useState<ProductType | null>(null);
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
    <>
      <ImagesCarousel data={product?.images} />

      <Container scrollView>
        {/* {product?.availableForSale && (
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

      <View style={styles.wishlistCont}>
        <Icon
          name="hearto"
          style={{textAlign: 'center'}}
          size={18}
          color={Colors.darkgreen}
        />
      </View> */}

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

        <Button title="Add to Cart" mT={16} mB={32} />
      </Container>
    </>
  );
};

export default ProductDetail;
