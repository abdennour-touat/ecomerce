import { useState } from "react";
import { View, Text } from "react-native";
import { CategoryContainer, CategoryText } from "../styles/CategoryList.style";

export default function CategoryList() {
  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <CategoryContainer>
      {/* <Text>hello</Text> */}
      {categories.map((category, index) => (
        <CategoryText highlited={categoryIndex == index} key={index}>
          {category}
        </CategoryText>
      ))}
    </CategoryContainer>
  );
}
