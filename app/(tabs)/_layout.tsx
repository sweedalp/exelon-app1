// app/(tabs)/_layout.tsx
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tint = Colors[colorScheme ?? "light"].tint;

  // Custom top header for each tab
  const renderHeader = (title: string) => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: tint,
        tabBarInactiveTintColor: "#AAA",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: true,
        headerStyle: { backgroundColor: colorScheme === "dark" ? "#111" : "#ffe4f0" },
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 20, fontWeight: "700", color: "#333" },
        contentStyle: { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <IconSymbol name="house.fill" size={26} color={color} />,
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ color }) => <IconSymbol name="cart.fill" size={26} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <IconSymbol name="person.crop.circle.fill" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    height: 70,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderTopWidth: 0,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  header: {
    height: Platform.OS === "ios" ? 90 : 70,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 12,
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ff69b4",
  },
});
