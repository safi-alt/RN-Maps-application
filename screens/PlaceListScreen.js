import React from "react";

import { View, Text, StyleSheet } from "react-native";

const PlacesListScreen = () => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

PlacesListScreen.navigationOptions = {
  headerTitle: "All Places",
};

export default PlacesListScreen;
