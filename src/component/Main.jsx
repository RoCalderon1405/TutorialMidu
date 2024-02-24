import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Route, Routes } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import Login from "../Pages/Login";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Main;
