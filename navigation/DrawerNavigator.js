import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import HelpScreen from "../screens/HelpScreen";
import ContactsScreen from "../screens/ContactsScreen";
import LogoutScreen from "../screens/LogoutScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
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
    </Drawer.Navigator>
  );
}
