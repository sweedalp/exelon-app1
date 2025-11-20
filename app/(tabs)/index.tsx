import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Platform, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(30)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideUp, { toValue: 0, duration: 700, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, friction: 6, tension: 70, useNativeDriver: true }),
    ]).start();
  }, []);

  const topPadding = Platform.OS === "android" ? StatusBar.currentHeight || 20 : 20;

  return (
    <LinearGradient
      colors={["#ff9ec3", "#ffb6c1", "#ff8da1"]}
      style={[styles.gradient, { paddingTop: topPadding + 20 }]}
    >
      <Animated.View
        style={[
          styles.container,
          { opacity: fadeIn, transform: [{ translateY: slideUp }, { scale }] },
        ]}
      >
        <Text style={styles.title}>Welcome 👋</Text>
        <Text style={styles.subtitle}>
          Explore products, details & smooth UI animations.
        </Text>

        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => router.push("/products")}
            style={({ pressed }) => [styles.button, { opacity: pressed ? 0.7 : 1 }]}
          >
            <Text style={styles.buttonText}>View Products</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/profile")}
            style={({ pressed }) => [styles.buttonOutline, { opacity: pressed ? 0.7 : 1 }]}
          >
            <Text style={styles.buttonOutlineText}>Profile</Text>
          </Pressable>
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  container: { alignItems: "center" },
  title: { fontSize: 36, color: "#fff", fontWeight: "900", textAlign: "center" },
  subtitle: {
    fontSize: 16,
    marginTop: 12,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    width: "85%",
  },
  buttonRow: { marginTop: 36, width: "100%", gap: 16 },
  button: {
    backgroundColor: "#ff69b4",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "700", color: "#fff" },
  buttonOutline: {
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#ff69b4",
    alignItems: "center",
  },
  buttonOutlineText: { fontSize: 16, fontWeight: "700", color: "#ff69b4" },
});


