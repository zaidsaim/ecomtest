
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native'; 
import { Icon } from '@rneui/themed';

const Header = ({ title, leftIconName, centerIconName, rightIconName,color }) => {
  return (
    <View style={[styles.header, styles.shadowProp]}>
    <Icon
    type='material-community'
        name={leftIconName}
        style={styles.icon}
        color={color}
        size={20}
        />
      <Text style={styles.title}>{title}</Text>
      <Feather  name={rightIconName} size={20} color="black" style={styles.icon} />
    </View>  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 4,
  },
  
  androidShadow: {
    shadowColor: 'black',
    shadowOpacity: 6,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 7,
    },
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color:'gray'
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Header;
