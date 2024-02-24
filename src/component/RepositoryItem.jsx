import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    color: theme.colors.white,
    // backgroundColor: Platform.OS === "android" ? "red" : "#09f",
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: theme.colors.white,
      default: "purple",
    }),
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
    padding: 2,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
