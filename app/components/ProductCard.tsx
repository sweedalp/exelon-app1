import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>₹ {product.price}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  image: { width: "100%", height: 120, borderRadius: 8 },
  title: { fontSize: 14, fontWeight: "600", marginTop: 6 },
  price: { fontSize: 16, fontWeight: "700", marginTop: 4, color: "green" },
});


