import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import Feed from "../screens/Feed"
import CreateStory from "../screenCreateStory"
import {StyleSheet} from react-native 
import ionicons from "react-native-react-vector-icons/ionicons"

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
