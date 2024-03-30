
import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/CartReducer";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const cartLength = cart.length;
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  if (!cart) {
    return <Text>Loading...</Text>;
  }
  return (
    
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 20, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "400" ,color:'#cc1306'}}>Subtotal : </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'grey'}}>{total}</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 20,color:'#cc1306' }}>CartItem:</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'grey'}}>{cartLength}</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        {cart.map((item, index) => (
          <View style={styles.cartItem} key={index}>
            <Pressable>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={{ width: 140, height: 140, resizeMode: "contain" }} source={{ uri: item.image }} />
                <View style={{ marginLeft: 10 }}>
                  <Text numberOfLines={3} style={{ width: 150, marginTop: 10,color:'grey' }}>{item.title}</Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 6 ,color:'grey'}}>${item.price}</Text>
                </View>
              </View>
            </Pressable>
            <View style={styles.quantityContainer}>
            <LinearGradient colors={[ '#cc1306','#4a0803']} style={{borderRadius: 5}}>
              <Pressable onPress={() => decreaseQuantity(item)} style={styles.button}>
                <AntDesign name="minus" size={12} color="white" />
              </Pressable>
              </LinearGradient>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <LinearGradient colors={[ '#cc1306','#4a0803']} style={{borderRadius: 5}}>
              <Pressable onPress={() => increaseQuantity(item)} style={styles.button}>
                <Feather name="plus" size={12} color="white" />
              </Pressable>
              </LinearGradient>
              <LinearGradient colors={[ '#cc1306','#4a0803']} style={{borderRadius: 5}}>
            <Pressable onPress={() => deleteItem(item)} style={styles.deleteButton}>
            <AntDesign name="delete" size={12} color="white" />
            </Pressable>
            </LinearGradient>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: "white",
    marginVertical: 10,
    borderBottomColor: "#F0F0F0",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    padding: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantity: {
    fontSize: 12,
    marginHorizontal: 10,
    color:'grey'
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  delete:{
    color:'white'
  }
});
