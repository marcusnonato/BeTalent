import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {circle} from '../../assets/images';

function ListHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitles}>
          <Text style={styles.headerTitlesText}>Foto</Text>
          <Text style={styles.headerTitlesText}>Nome</Text>
        </View>
        <View style={styles.circle}>
          <Image source={circle} />
        </View>
      </View>
    </View>
  );
}

export default ListHeader;
