import { ImageSourcePropType, TouchableOpacityProps } from "react-native";
import type * as CSS from "csstype";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";
import { NavigationStackProp } from "react-navigation-stack";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

//navigation prop
type NavigationProps = NativeStackScreenProps<RootStackParamList, "Profile">;

type card = {
  id: number;
  name: string;
  price: string;
  like: boolean;
  img: ImageSourcePropType;
  about: string;
};
type NavigationProps = {
  navigation: NaviagationSta<card>;
};
export interface CardProps {
  card: card;
  navigation: NavigationStackProp["navigation"];
}

//styles typing

export interface HeadingProps {
  mainTitle?: boolean;
  subTitle?: boolean;
  title?: boolean;
  title2?: boolean;
  weight?: "normal" | CSS.Properties["fontWeight"];
  color?: string;
}

export interface PressProps {
  size: number;
  color: string;
}
export interface CategoryProps {
  highlited: boolean;
}
