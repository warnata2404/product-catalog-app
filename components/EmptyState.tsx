import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/colors";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Products Found</Text>

      <Text style={styles.subtitle}>
        Product data is currently unavailable.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 80,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
