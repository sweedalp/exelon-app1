import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import AppLayout from "../components/AppLayout";

export default function Profile() {
  return (
    <AppLayout>
      <LinearGradient
        colors={["#ffe6f2", "#fff0f7", "#ffffff"]}
        style={styles.bg}
      >
        <Animated.View
          entering={FadeInDown.delay(200).duration(700)}
          style={styles.card}
        >
          {/* Corrected Image Source */}
          <Image
            source={require("../../assets/images/s1.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Sweedal Pinto</Text>
          <Text style={styles.tag}>✨ Swiftie | Developer | Dreamer ✨</Text>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNum}>24</Text>
              <Text style={styles.statLabel}>Orders</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNum}>12</Text>
              <Text style={styles.statLabel}>Wishlist</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNum}>5⭐</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>

          {/* Buttons */}
          <TouchableOpacity style={styles.buttonPink}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.btnTextOutline}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "90%",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    shadowColor: "#ff4fa3",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#ff6eb4",
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#ff2d87",
  },

  tag: {
    fontSize: 14,
    color: "#6b0061",
    marginBottom: 20,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 25,
  },

  statBox: {
    alignItems: "center",
  },

  statNum: {
    fontSize: 20,
    fontWeight: "800",
    color: "#ff2d87",
  },

  statLabel: {
    fontSize: 12,
    color: "#333",
  },

  buttonPink: {
    backgroundColor: "#ff3c92",
    padding: 12,
    width: "85%",
    borderRadius: 30,
    marginBottom: 12,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutline: {
    borderWidth: 2,
    borderColor: "#ff3c92",
    padding: 12,
    width: "85%",
    borderRadius: 30,
    marginBottom: 15,
  },

  btnTextOutline: {
    color: "#ff3c92",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

  logoutBtn: {
    marginTop: 10,
  },

  logoutText: {
    color: "#333",
    fontWeight: "600",
  },
});
