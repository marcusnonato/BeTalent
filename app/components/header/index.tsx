import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.userIcon} activeOpacity={0.7}>
        <Text style={styles.userIconText}>CG</Text>
      </TouchableOpacity>
      <Text>Header</Text>
    </SafeAreaView>
  );
}

export default Header;
