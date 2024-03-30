
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../redux/CartReducer";
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const ProductItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  const increaseQuantity = (item,cart) => {
    if(cart.length == 0){
      addItemToCart(item)
    }else{
    dispatch(incrementQuantity(item));
    }
  };

  const decreaseQuantity = (item,cart) => {
    if(cart != null && cart != "" && cart != undefined){
    if(cart[cart.length -1 ].quantity > 0){
      dispatch(decrementQuantity(item));
    }
  } 
  };

  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25, backgroundColor: 'white' }}>
    <View style={{flexDirection:'row'}}>
    <View style={{}}>
      <Image
        style={{ width: 'auto', height: 150, resizeMode: "contain"}}
        source={{ uri: item?.image }}
      />
      
      <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 40 ,color:'gray'}}>Jack</Text>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 40 ,color:'gray'}}>Whisky</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 40 ,color:'gray'}}>${item?.price}</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 40 ,color:'gray'}}>6 Bars</Text>
      {addedToCart ? (
        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
          <View style={styles.buttonContainer}>
            <LinearGradient colors={['#cc1306', '#4a0803']} style={{ borderRadius: 5 }}>
              <Pressable onPress={() => decreaseQuantity(item,cart)} style={{ padding: 10, borderRadius: 10 }}>
                <Feather name="minus" size={10} color="white" />
              </Pressable>
            </LinearGradient>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.quantityStyle}>{cart.find(cartItem => cartItem.id === item.id)?.quantity}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <LinearGradient colors={['#cc1306', '#4a0803']} style={{ borderRadius: 5 }}>
              <Pressable onPress={() => increaseQuantity(item,cart)} style={{ padding: 10, borderRadius: 10 }}>
                <Feather name="plus" size={10} color="white" />
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      ) : (
        <Pressable onPress={() => addItemToCart(item)}>
          <LinearGradient colors={['#cc1306', '#4a0803']} style={styles.linearGradient}>
            <View style={styles.incBtnStyle}>
              <Text style={{ color: 'white' }}>Add to Cart</Text>
            </View>
          </LinearGradient>
        </Pressable>
      )}
      </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  incBtnStyle: {
    flexDirection: 'row'
  },
  linearGradient: {
    padding: 5,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    width:100
  },
  quantityStyle:{
    color: 'black',marginHorizotal:10
  }
});

