import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#5ccfe6',
      headerStyle: {
        backgroundColor: '#25292e'
      },
      headerShadowVisible: false,
      headerTintColor: '#5ccfe6',
      tabBarStyle: {
        backgroundColor: '#25292e'
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color} size={24} />
          ),
        }}
      />

    <Tabs.Screen
      name="about"
        options={{
      title: "Sobre",
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name={focused ? 'information-circle' : 'information-circle-outline'}
          color={color} size={24} />
        ),
      }}
/>
  </Tabs >
  );
}
