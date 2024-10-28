import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.tab, focused && styles.tabFocused]} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.tab, focused && styles.tabFocused]} />
          ),
        }}
      />

      <Tabs.Screen
        name="register"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.tab, focused && styles.tabFocused]} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#d8caca',
    width: 45,
    height: 15,
    borderRadius: 30,
    marginTop: 20
  },
  tabFocused: {
    backgroundColor: '#634fc4', 
    width: 45,               
    height: 15,
    borderRadius: 30,
    marginTop: 20
  },
});
