import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
  } from "react-native";
  import React, { useState, useEffect, useCallback, useContext } from "react";
  import axios from "axios";
  import ProductItem from '../../components/ProductItem';
  import { useNavigation } from "@react-navigation/native";
  import { useSelector } from "react-redux";
  import Cart from './Cart'
import Header from "../../components/Header";
  
  const Home = ({navigation}) => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
        } catch (error) {
          console.log("error message", error);
        }
      };
      fetchData();
    }, []);
    return (
        <View style={{flex:1,backgroundColor:'white',}}>
        <Header 
        title="LIQOUIR" 
        leftIconName="align-vertical-distribute" 
        centerIconName="plus" 
        rightIconName="search" 
      />
        <ScrollView style={{flex:1,backgroundColor:'white',}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {products
                ?.filter((item) => item !== 0)
                .map((item, index) => (
                  <ProductItem item={item} key={index} />
                ))}
            </View>
            <View style={{ alignItems:'center',marginHorizontal:50 ,marginBottom:100}}>
            <Cart/>
            </View>
            </ScrollView>
            </View>
    );
  };
  export default Home;
  const styles = StyleSheet.create({});
  