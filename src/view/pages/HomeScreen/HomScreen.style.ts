import { FC } from "react";
import styled from "styled-components/native";
import { HeadingProps } from "../../../../typing";
import COLORS from "../../../consts/colors";

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  padding: 0px 20px;
  background-color: ${COLORS.white};
`;

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Heading: FC<HeadingProps> = styled.Text`
  ${({ title, subTitle }: HeadingProps) => {
    switch (true) {
      case title:
        return `font-size: 38px; font-weight: bold; color: ${COLORS.green}`;
      case subTitle:
        return `font-size: 25px; font-weight: bold; `;
    }
  }}
`;

export const SearchContainer = styled.View`
  height: 50px;
  background-color: ${COLORS.light};
  border-radius: 10px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 3%;
`;

export const Container = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;
export const Input = styled.TextInput`
  font-size: 18px;
  flex: 1;
  color: ${COLORS.dark};
`;
