import {StyleSheet, TextInput} from 'react-native';

import {Colors, fonts, Metrix, SVGS} from '../../../config';
import {Flex} from '../..';

interface SearchFieldProps {
  value?: string;
  onChange?: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
  error?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
  onChange,
  onSubmitEditing,
  value,
  placeholder = 'Search....',
}) => {
  return (
    <Flex style={styles.container}>
      <SVGS.SearchIcon color="#000" />
      <TextInput
        onChangeText={onChange}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholderColor}
        onSubmitEditing={onSubmitEditing}
      />
      {/* <SVGS.FilterIcon /> */}
    </Flex>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrix.VerticalSize(56),
    backgroundColor: Colors.white,
    marginTop: Metrix.VerticalSize(24),
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrix.HorizontalSize(16),
    gap: 10,
  },

  input: {
    height: Metrix.VerticalSize(56),
    flex: 1,
    color: Colors.placeholderColor,
    fontSize: 13,
    ...fonts.medium(),
  },
});
