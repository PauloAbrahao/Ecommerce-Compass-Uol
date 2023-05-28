import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { store } from "../../config/interface";
import axios, { AxiosResponse } from "axios";

import RenderProducts from "./Components/RenderProducts";

import styles from "./style";


const Grid = () => {
  const [data, setData] = useState<store[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<store[]> => {
      try {
        const response: AxiosResponse<store[]> = await axios.get<store[]>(
          "https://fakestoreapi.com/products/"
        );
        setData(response.data);
        return response.data;
      } catch (error) {
        console.error("Something went wrong", error);
        throw error;
      }
    };
    fetchData();
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => <RenderProducts {...item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.content}
      scrollEnabled={false}
    ></FlatList>
  );
};

export default Grid;
