import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Stars:
        </StyledText>
        <StyledText align="center">{props.forksCount}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Forks:
        </StyledText>
        <StyledText align="center">{props.stargazersCount}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Review:
        </StyledText>
        <StyledText align="center">{props.ratingAverage}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating:{" "}
        </StyledText>
        <StyledText align="center">{props.reviewCount}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5,
    },
    language: {
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf: "flex-start",
    },
  });

export default RepositoryStats;
