import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {bellNotificationIcon} from '../../assets/images';

function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.userIcon} activeOpacity={0.7}>
        <Text style={styles.userIconText}>CG</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Image source={bellNotificationIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Header;
