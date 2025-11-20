import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import AppLayout from "../components/AppLayout";

export default function Home() {
  const router = useRouter();

  return (
    <AppLayout>
      <LinearGradient colors={["#ffe6f2", "#fff0f7", "#ffffff"]} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Welcome Section */}
          <Animated.View
            entering={FadeInDown.duration(700)}
            style={styles.headerBox}
          >
            <Text style={styles.title}>Welcome, Sweedal ✨</Text>
            <Text style={styles.subtitle}>
              Explore your favorite products in a Swiftie-inspired aesthetic 💖
            </Text>
          </Animated.View>

          {/* Category Chips */}
          <Animated.View
            entering={FadeInDown.delay(150).duration(700)}
            style={styles.chipRow}
          >
            {["New", "Trending", "Beauty", "Tech", "Fashion"].map((item, index) => (
              <TouchableOpacity key={index} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>

          {/* Feature Card */}
          <Animated.View
            entering={FadeInDown.delay(300).duration(700)}
            style={styles.featureCard}
          >
            <Text style={styles.featureTitle}>✨ Featured Product</Text>
            <Text style={styles.featureDesc}>
              Discover our top-rated picks selected just for you!
            </Text>

            <TouchableOpacity
              style={styles.exploreBtn}
              onPress={() => router.push("/products")}
            >
              <Text style={styles.exploreText}>Explore Products →</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Buttons Section */}
          <Animated.View
            entering={FadeInDown.delay(450).duration(700)}
            style={styles.btnContainer}
          >
            <TouchableOpacity
              style={styles.buttonPink}
              onPress={() => router.push("/products")}
            >
              <Text style={styles.btnText}>Browse Products</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonOutline}
              onPress={() => router.push("/profile")}
            >
              <Text style={styles.btnTextOutline}>View Profile</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },

  headerBox: {
    padding: 24,
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ff2d87",
  },
  subtitle: {
    fontSize: 16,
    color: "#6b0061",
    textAlign: "center",
    marginTop: 8,
  },

  /* Category Chips */
  chipRow: {
    flexDirection: "row",
    paddingHorizontal: 12,
    marginTop: 10,
  },
  chip: {
    backgroundColor: "#ffd4e8",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    borderColor: "#ff8cc6",
    borderWidth: 1,
  },
  chipText: {
    color: "#b3006b",
    fontWeight: "600",
    fontSize: 14,
  },

  /* Feature Section */
  featureCard: {
    marginTop: 25,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.55)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    shadowColor: "#ff4fa3",
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ff2d87",
    marginBottom: 8,
  },
  featureDesc: {
    fontSize: 14,
    color: "#444",
    marginBottom: 15,
  },

  exploreBtn: {
    backgroundColor: "#ff3c92",
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  exploreText: {
    color: "white",
    fontWeight: "700",
  },

  /* Buttons */
  btnContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  buttonPink: {
    backgroundColor: "#ff3c92",
    padding: 14,
    borderRadius: 30,
    marginBottom: 12,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutline: {
    borderWidth: 2,
    borderColor: "#ff3c92",
    padding: 14,
    borderRadius: 30,
  },
  btnTextOutline: {
    textAlign: "center",
    color: "#ff3c92",
    fontWeight: "700",
    fontSize: 16,
  },
});



