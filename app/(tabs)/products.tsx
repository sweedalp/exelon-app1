import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Explore Products</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, backgroundColor: "#F0F3F7" },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
});
