import { ScrollView, Text, View } from "react-native";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import styles from "./style";

interface store {
  id: number;
  title: string;
  price: number;
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

  console.log("data", data);

  // return (
  //   <ScrollView style={styles.container}>
  //     <View style={styles.content}>
  //       <View style={styles.square}></View>
  //       <View style={styles.square}></View>
  //       <View style={styles.square}></View>
  //       <View style={styles.square}></View>
  //       <View style={styles.square}></View>
  //       <View style={styles.square}></View>
  //       <View style={styles.square}></View>
  //       <View style={styles.square}></View>
  //     </View>
  //   </ScrollView>
  // );

  return (
    <View>
      {data && data.map((item) => <Text key={item.id}>{item.title}</Text>)}
    </View>
  );
};

export default index;
