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

      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.category}>{product.category}</Text>

      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 6,
  },
  category: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 8,
    textTransform: "capitalize",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },
});
