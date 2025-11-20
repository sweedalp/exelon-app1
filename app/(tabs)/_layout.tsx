import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, UIManager, View } from 'react-native';

// Enable Android layout animations
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tint = Colors[colorScheme ?? 'light'].tint;
  const background = colorScheme === 'dark' ? '#000' : '#fff';

  return (
    <View style={{ flex: 1, backgroundColor: background }}>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, fontWeight: '700', color: '#333' },
          tabBarActiveTintColor: tint,
          tabBarInactiveTintColor: '#AAA',
          tabBarStyle: styles.tabBar,
          tabBarBackground: () => (
            <View style={[styles.blurContainer, { backgroundColor: '#ffb6c1' }]} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
          // ❌ Remove contentStyle completely
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol name="house.fill" size={26} color={color} />,
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: 'Products',
            tabBarIcon: ({ color }) => <IconSymbol name="cart.fill" size={26} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <IconSymbol name="person.crop.circle.fill" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 70,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 25,
  },
});
