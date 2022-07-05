import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CategoryContainer, CategoryText } from "../styles/CategoryList.style";

export default function CategoryList() {
  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <CategoryContainer>
      {/* <Text>hello</Text> */}
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setCategoryIndex(index)}
          activeOpacity={0.8}
        >
          <CategoryText highlited={categoryIndex == index} key={index}>
            {category}
          </CategoryText>
        </TouchableOpacity>
      ))}
    </CategoryContainer>
  );
}
