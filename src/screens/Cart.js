import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export default function Cart() {
  const navigation =useNavigation()
  const handleFilterPress = () => {
    alert('Filter button pressed!');
  };
  const handleSortPress = () => {
    alert('Sort button pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
      <View style={styles.circle1}>
      <LinearGradient colors={[ '#cc1306','#4a0803']} style={styles.circle}>
      <TouchableOpacity>
      <Ionicons name="cart" size={18} color="white" />
      </TouchableOpacity>
      </LinearGradient>
      </View>
      <TouchableOpacity style={styles.buttonfirst} onPress={handleFilterPress}>
        <Text style={styles.buttonText}>Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonsecond} onPress={handleSortPress}>
        <Text style={styles.buttonText}>Sort</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position:'absolute'
  },
  bottom:{
    gap:5,
    flexDirection: 'row',
  },
  buttonfirst: {
    width: 150,
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20, 
    borderBottomLeftRadius: 20
  },
  buttonsecond: {
    width: 150,
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 20,
  },
  buttonText: {
    color: 'grey',
    fontSize: 16,
  },
  circle: {
    width: 50,
    height: 50,
    marginLeft: 125,
    borderRadius: 25,
    backgroundColor: 'white',
    position: 'absolute',
    top: -5,
    zIndex:999999,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom:10,
  },
  circle1: {
    width: 55,
    height: 55,
    marginLeft: 120,
    borderRadius: 27.5,
    backgroundColor: 'white',
    position: 'absolute',
    top: -22,
    zIndex:999999,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  
});