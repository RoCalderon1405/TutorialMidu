import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyledText from "./StyledText";

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText blue big bold>
        id: {props.id}
      </StyledText>
      <StyledText blue>FullName: {props.fullName}</StyledText>
      <StyledText blue>Description: {props.description}</StyledText>
      <StyledText bold>Language: {props.language}</StyledText>
      <StyledText blue>Stars: {props.forksCount}</StyledText>
      <StyledText small>Forks: {props.stargazersCount}</StyledText>
      <StyledText small>Review: {props.ratingAverage}</StyledText>
      <StyledText small>Rating: {props.reviewCount}</StyledText>
      <StyledText small>Url:{props.ownerAvatarUrl}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
