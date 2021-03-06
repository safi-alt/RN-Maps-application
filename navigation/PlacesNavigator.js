import { Platform } from "react-native";

import Colors from "../constants/Colors";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import PlacesListScreen from "../screens/PlaceListScreen";
import PlacesDetailScreen from "../screens/PlacesDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlacesDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
