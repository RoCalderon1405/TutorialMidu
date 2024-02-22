import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Route, Routes } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Hola</Text>} />
      </Routes>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Main;
