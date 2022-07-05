import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CardProps } from "../../typing";
import COLORS from "../consts/colors";
import { CardView } from "../styles/Card.style";

const Card = ({ card }: CardProps) => {
  return (
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
      <View style={{ height: 100, alignItems: "center" }}>
        <Image style={{ flex: 1, resizeMode: "contain" }} source={card.img} />
      </View>
    </CardView>
  );
};

export default Card;
