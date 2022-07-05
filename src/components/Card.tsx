import { Image, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CardProps } from "../../typing";
import COLORS from "../consts/colors";
import { CardView } from "../styles/Card.style";
import { Heading, PressButton } from "../styles/HomScreen.style";

const Card = ({ card, navigation }: CardProps) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", card)}>
      <CardView>
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: card.like
                ? "rgba(245, 42, 42, 0.2)"
                : "rgba(0, 0, 0, 0.2)",
            }}
          >
            <Icon
              name="favorite"
              size={18}
              color={card.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
        <View style={{ height: 100, alignItems: "center", overflow: "hidden" }}>
          <Image style={{ flex: 1, resizeMode: "contain" }} source={card.img} />
        </View>
        <Heading title weight={"bold"}>
          {card.name}
        </Heading>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Heading title2 weight={"bold"}>
            {card.price}$
          </Heading>
          <PressButton size={28} color={COLORS.green}>
            <Heading weight={"bold"} subTitle color={COLORS.white}>
              +
            </Heading>
          </PressButton>
        </View>
      </CardView>
    </TouchableOpacity>
  );
};

export default Card;
