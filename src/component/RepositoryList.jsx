import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import data from "../data/repositories";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchData = async () => {
    try {
      const response = await globalThis.fetch(
        "http://192.168.1.67:5000/api/repositories"
      );
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
