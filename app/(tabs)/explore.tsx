import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Explore() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffd4e8", dark: "#2a2a2a" }}
      headerImage={
        <LinearGradient
          colors={["#ff9acb", "#ffd4e8", "#fff"]}
          style={styles.headerBG}
        />
      }
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Animated.View entering={FadeInDown.duration(700)} style={styles.titleBox}>
          <ThemedText type="title" style={styles.title}>
            Explore ✨
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Discover trending collections in a Swiftie-inspired aesthetic 💖
          </ThemedText>
        </Animated.View>

        {/* Category Chips */}
        <Animated.View
          entering={FadeInDown.delay(150).duration(700)}
          style={styles.chipRow}
        >
          {["Trending", "Beauty", "Tech", "Fashion", "Swiftie Picks"].map(
            (item, index) => (
              <TouchableOpacity style={styles.chip} key={index}>
                <ThemedText style={styles.chipText}>{item}</ThemedText>
              </TouchableOpacity>
            )
          )}
        </Animated.View>

        {/* Feature Card */}
        <Animated.View
          entering={FadeInDown.delay(300).duration(700)}
          style={styles.featureCard}
        >
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={styles.featureImg}
          />
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Featured Product
          </ThemedText>
          <ThemedText style={styles.cardDesc}>
            Handpicked items curated just for you! Explore the latest Swiftie-themed designs 🎀
          </ThemedText>
        </Animated.View>

        {/* Trending Section */}
        <Animated.View
          entering={FadeInDown.delay(450).duration(700)}
          style={styles.section}
        >
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Trending Now 🔥
          </ThemedText>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 4 }).map((_, i) => (
              <View key={i} style={styles.trendCard}>
                <LinearGradient
                  colors={["#ffd6e8", "#fff"]}
                  style={styles.trendBG}
                >
                  <Image
                    source={require("@/assets/images/react-logo.png")}
                    style={styles.trendImg}
                  />
                </LinearGradient>
                <ThemedText style={styles.trendLabel}>Item {i + 1}</ThemedText>
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerBG: {
    height: 250,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  titleBox: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ff3c92",
  },
  subtitle: {
    fontSize: 15,
    color: "#6b0061",
    marginTop: 4,
  },

  chipRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  chip: {
    backgroundColor: "#ffd4e8",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderColor: "#ff8ac8",
    borderWidth: 1,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#b3006b",
  },

  featureCard: {
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
    shadowColor: "#ff4fa3",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  featureImg: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#ff2d87",
  },
  cardDesc: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginTop: 6,
  },

  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    marginLeft: 20,
    marginBottom: 10,
    color: "#ff2d87",
    fontWeight: "700",
  },

  trendCard: {
    marginLeft: 20,
    width: 120,
    alignItems: "center",
  },
  trendBG: {
    width: 120,
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  trendImg: {
    width: 60,
    height: 60,
  },
  trendLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
