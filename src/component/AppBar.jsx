import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import StyledText from "./StyledText";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">
          Repositories
        </AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
  },
  text: {
    color: theme.appBar.secondary,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingVertical: 15,
  },
  active: {
    color: theme.appBar.primaryText,
  },
});

export default AppBar;
