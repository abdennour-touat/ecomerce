import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Header,
  Heading,
  SafeAreaContainer,
} from "../../styles/HomScreen.style";

const HomeScreen = () => {
  return (
    <SafeAreaContainer>
      <Header>
        <View>
          <Heading subTitle>Welcome to </Heading>
          <Heading title>Plant shop</Heading>
        </View>
      </Header>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
