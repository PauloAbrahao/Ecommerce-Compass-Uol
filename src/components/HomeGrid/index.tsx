import { FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import Card from "../Card/index";

import styles from "./style";

interface store {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const index = () => {
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

  const RenderProducts: React.FC<store> = (item) => {
    return (
      <View style={styles.content}>
        <Card {...item} isCart={false} />
      </View>
    );
  };

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

export default index;
