import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Icon name="users" size={25} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: 'lightblue',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginLeft: 8,
  },
});

export default Header;