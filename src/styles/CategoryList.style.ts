import { FC } from "react";
import styled from "styled-components/native";
import { CategoryProps } from "../../typing";
import COLORS from "../consts/colors";

export const CategoryContainer: FC = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const CategoryText: FC<CategoryProps> = styled.Text`
  color: gray;
  font-weight: bold;
  ${({ highlited }: CategoryProps) => {
    switch (true) {
      case highlited:
        return ` color: ${COLORS.green}
                padding-bottom: 5px;
                border-bottom-width: 2px;
                border-color : ${COLORS.green}
        `;
    }
  }}
`;
