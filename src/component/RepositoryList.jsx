import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchData = async () => {
    try {
      console.log("hola");
    const response = await fetch("http://localhost:5000/api/repositories");
    console.log("hola2");
    console.log(response);
    const json = await response.json();
    setRepositories(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <Text>Rate Repository Application</Text>

      <FlatList
        data={repositoriesNodes}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
      />
    </>
  );
};

export default RepositoryList;
