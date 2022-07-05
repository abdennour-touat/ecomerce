import { Dimensions } from "react-native";
import styled from "styled-components/native";
import COLORS from "../consts/colors";

const width = Dimensions.get("screen").width / 2 - 30;

export const CardView = styled.View`
  height: 225px;
  background-color: ${COLORS.light};
  width: ${width}px;
  margin: 0px 2px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px;
`;
