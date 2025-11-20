import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product.");
        const data = await res.json();
        setProduct(data);
      } catch (err: any) {
        console.log(err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    // Skeleton Loader Example
    return (
      <View style={{ padding: 16 }}>
        <View style={styles.skeletonImage} />
        <View style={styles.skeletonText} />
        <View style={styles.skeletonTextSmall} />
        <View style={styles.skeletonText} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
        <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: "100%", height: 250, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: "700", marginTop: 12 },
  price: { fontSize: 20, fontWeight: "600", color: "green", marginVertical: 8 },
  description: { fontSize: 16, color: "#555", marginTop: 10 },

  // Skeleton styles
  skeletonImage: { width: "100%", height: 250, borderRadius: 12, backgroundColor: "#e0e0e0", marginBottom: 16 },
  skeletonText: { width: "80%", height: 20, backgroundColor: "#e0e0e0", marginBottom: 8, borderRadius: 4 },
  skeletonTextSmall: { width: "40%", height: 20, backgroundColor: "#e0e0e0", marginBottom: 8, borderRadius: 4 },
});


