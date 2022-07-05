import { FC } from "react";
import styled from "styled-components/native";
import { HeadingProps, PressProps } from "../../typing";
import COLORS from "../consts/colors";

export const Header: FC = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Heading: FC<HeadingProps> = styled.Text<HeadingProps>`
  ${({ title, subTitle, mainTitle, title2 }: HeadingProps) => {
    switch (true) {
      case title:
        return `font-size: 17px;  margin-top: 10px;`;
      case title2:
        return `font-size: 19px;  `;
      case subTitle:
        return `font-size: 25px;  `;
      case mainTitle:
        return `font-size: 38px;  `;
    }
  }}
  color: ${(props) => (props.color !== undefined ? props.color : "#000")};
  font-weight: ${(props) =>
    props.weight !== undefined ? props.weight : "normal"};
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

export const PressButton = styled.TouchableOpacity<PressProps>`
  margin-left: 10px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
