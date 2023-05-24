import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
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

  const RenderProducts: React.FC<store> = ({ title, image }) => {
    return (
      <View style={styles.content}>
        <View style={styles.square}>
          <Text>{title}</Text>
          <Image source={{ uri: image }} style={{ width: 20, height: 20 }} />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      // style={styles.container}
      numColumns={2}
      data={data}
      renderItem={({ item }) => <RenderProducts {...item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.content}
    >
      {/* <View style={styles.content}>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
        </View> */}
    </FlatList>
  );

  // return (
  //   <View>
  //     {data && data.map((item) => <Text key={item.id}>{item.title}</Text>)}
  //   </View>
  // );
};

export default index;
