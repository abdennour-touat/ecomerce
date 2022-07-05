import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from "react-native-vector-icons/MaterialIcons";
import Card from "../../../components/Card";
import CategoryList from "../../../components/CategoryList";
import COLORS from "../../../consts/colors";
import plants from "../../../consts/plants";
import {
  Header,
  Heading,
  Container,
  SearchContainer,
  Input,
  PressButton,
} from "../../../styles/HomScreen.style";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      {/* header */}
      <Header>
        <View>
          <Heading subTitle>Welcome to </Heading>
          <Heading title>Plant shop</Heading>
        </View>
        <Icon name="shopping-cart" size={28} />
      </Header>
      {/* search bar */}
      <Container>
        <SearchContainer>
          <Icon name="search" size={25} style={{ marginHorizontal: 10 }} />
          <Input placeholder="Search" />
        </SearchContainer>
        <PressButton>
          <Icon name="sort" color={"#fff"} size={30} />
        </PressButton>
      </Container>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          marginBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <Card card={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
