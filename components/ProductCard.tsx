import { Image, StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/colors";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    marginBottom: 18,

    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 4,
  },

  image: {
    width: "100%",
    height: 220,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 8,
    lineHeight: 22,
  },

  category: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 10,
    textTransform: "capitalize",
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
  },
});
