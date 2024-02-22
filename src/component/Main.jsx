import React, { useState } from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import RepositoryList from "./RepositoryList";

const Main = () => {
  const [benji, setBenji] = useState(1);

  const increment = () => {
    setBenji(benji + 1);

    if (benji >= 3) {
      setBenji(1);
      Alert.alert(
        "Oye tranquilo, ¿Para que quieres tantos Benjis?. Quédate con solo 1"
      );
    }
  };

  const decrement = () => {
    if (benji > 1) {
      setBenji(benji - 1);
    } else {
      Alert.alert("No se puede tener menos de un Benji en el trabajo");
    }
  };
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Rate Repository Application</Text>

      <RepositoryList />
    </View>
  );
};
const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#ffffff",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   text: {
  //     color: "#ffffff",
  //     backgroundColor: "#000000",
  //     padding: 10,
  //     fontSize: 20,
  //     borderRadius: 40,
  //   },
  //   text1: {
  //     backgroundColor: "#34CB04",
  //     padding: 10,
  //     borderRadius: 40,
  //     color: "#ffffff",
  //     marginTop: 30,
  //   },
  //   text2: {
  //     backgroundColor: "#FE0000",
  //     padding: 10,
  //     borderRadius: 40,
  //     color: "#ffffff",
  //     marginTop: 10,
  //   },
});
export default Main;
