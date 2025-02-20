import {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {styles} from './style';

interface ImageItem {
  src: string;
}

const ImagesCarousel = ({data}: {data: ImageItem[]}) => {
  const {width} = useWindowDimensions();
  const flatlistRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle scroll and set currentIndex
  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems && viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setCurrentIndex(index);
    }
  });

  // Configuring FlatList to track visible items
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // Trigger when an item is at least 50% visible
  };

  const scrollToIndex = (index: number) => {
    flatlistRef?.current?.scrollToIndex({animated: true, index: index});
    setCurrentIndex(index);
  };

  return (
    <>
      <FlatList
        style={{flex: 1}}
        ref={flatlistRef}
        data={data || []}
        horizontal
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <Image
              source={{uri: item.src}}
              style={[styles.img, {width: width}]}
            />
          );
        }}
        onScrollToIndexFailed={info => {
          console.log('Scroll failed', info);
        }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.imagesContainer}>
        {data?.map((obj: ImageItem, i: number) => {
          return (
            <TouchableOpacity
              onPress={() => {
                scrollToIndex(i);
              }}
              key={i}>
              <Image source={{uri: obj.src}} style={styles.smallImg} />
              {currentIndex !== i && <View style={styles.overlay}></View>}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default ImagesCarousel;
