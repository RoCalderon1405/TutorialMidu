import React from "react";
import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const RepositoryItemHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 8 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <StyledText color="secondary" fontWeight="bold" fontSize="subheading">
          {props.fullName}
        </StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
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
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
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
export default RepositoryItemHeader;
