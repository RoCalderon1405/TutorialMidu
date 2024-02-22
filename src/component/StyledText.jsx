import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: "grey",
  },
  bold: {
    fontWeight: "bold",
  },
  blue: {
    color: "blue",
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
});

export default function StyledText({ children, blue, bold, big, small }) {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
  ];
  return <Text style={textStyles}>{children}</Text>;
}
