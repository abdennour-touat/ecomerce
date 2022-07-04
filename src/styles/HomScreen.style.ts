import styled from "styled-components/native";
import COLORS from "../consts/colors";

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

export const Heading = styled.Text`
  ${({ title, subTitle }) => {
    switch (true) {
      case title:
        return `font-size: 38px; font-weight: bold; color: ${COLORS.green}`;
      case subTitle:
        return `font-size: 25px; font-weight: bold; `;
    }
  }}
`;
