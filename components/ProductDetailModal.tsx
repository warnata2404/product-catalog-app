import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import COLORS from "../constants/colors";
import { Product } from "../types/product";

interface ProductDetailModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  visible,
  product,
  onClose,
}: ProductDetailModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={{ uri: product.image }}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.title}>{product.title}</Text>

            <Text style={styles.category}>{product.category}</Text>

            <Text style={styles.price}>${product.price}</Text>

            <Text style={styles.description}>{product.description}</Text>

            <TouchableOpacity
              style={styles.closeButton}
              activeOpacity={0.8}
              onPress={onClose}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },

  modalContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    maxHeight: "90%",
  },

  image: {
    width: "100%",
    height: 250,
    marginBottom: 20,
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 10,
    lineHeight: 30,
  },

  category: {
    fontSize: 14,
    color: COLORS.gray,
    textTransform: "capitalize",
    marginBottom: 12,
  },

  price: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 18,
  },

  description: {
    fontSize: 15,
    color: COLORS.black,
    lineHeight: 24,
    marginBottom: 24,
  },

  closeButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  closeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
