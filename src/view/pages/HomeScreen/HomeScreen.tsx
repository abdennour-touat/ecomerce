import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Header,
  Heading,
  SafeAreaContainer,
  Container,
  SearchContainer,
  Input,
} from "./HomScreen.style";

const HomeScreen = () => {
  return (
    <SafeAreaContainer>
      <Header>
        <View>
          <Heading subTitle>Welcome to </Heading>
          <Heading title>Plant shop</Heading>
        </View>
        <Icon name="shopping-cart" size={28} />
      </Header>
      <Container>
        <SearchContainer>
          <Icon name="search" size={25} style={{ marginHorizontal: 10 }} />
          <Input placeholder="Search" />
        </SearchContainer>
      </Container>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
