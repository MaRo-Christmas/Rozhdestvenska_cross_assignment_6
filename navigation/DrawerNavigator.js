import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import HelpScreen from "../screens/HelpScreen";
import ContactsScreen from "../screens/ContactsScreen";
import LogoutScreen from "../screens/LogoutScreen";
import { Ionicons } from "@expo/vector-icons";
import { Button, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import MyEventsScreen from "../screens/MyEventsScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Help") {
            iconName = "help-circle";
          } else if (route.name === "Contacts") {
            iconName = "call";
          } else if (route.name === "Logout") {
            iconName = "log-out";
          } else if (route.name === "Toggle Theme") {
            iconName = "color-palette";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: "#EF5656",
        drawerInactiveTintColor: "gray",
        drawerActiveBackgroundColor: "#FFE2E5",
        drawerStyle: {
          borderRightColor: "#EF5656",
          borderRightWidth: 1,
        },
      })}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Contacts" component={ContactsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
      <Drawer.Screen name="My Events" component={MyEventsScreen} />

      {/* Кнопка перемикання теми через children */}
      <Drawer.Screen
        name="Toggle Theme"
        options={{
          drawerLabel: () => (
            <Button title="Switch Theme" onPress={toggleTheme} />
          ),
        }}
      >
        {() => <View />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
