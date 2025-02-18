import {StyleSheet, Text, View} from 'react-native';
import {Container, Typography} from '../../components';
import {Colors} from '../../config/color';

const Home = () => {
  return (
    <Container>
      <Typography mT={100} bold size={18} color={Colors.primary}>
        Products
      </Typography>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
