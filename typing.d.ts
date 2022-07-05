import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export interface CardProps {
  card: {
    id: number;
    name: string;
    price: string;
    like: boolean;
    img: ImageSourcePropType;
    about: string;
  };
}

//styles typing
export interface HeadingProps {
  title?: boolean;
  subTitle?: boolean;
}

export interface CategoryProps {
  highlited: boolean;
}
