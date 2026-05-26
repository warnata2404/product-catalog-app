import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useEffect, useState } from "react";

import COLORS from "../constants/colors";

import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

import { getProducts } from "../services/productService";
import { Product } from "../types/product";

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (isRefreshing = false) => {
    try {
      if (isRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response = await getProducts();

      setProducts(response);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Product Catalog</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchProducts(true)}
            colors={[COLORS.primary]}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.black,
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
