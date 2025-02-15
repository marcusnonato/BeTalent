import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {blueChevronDownIcon} from '../../assets/images';
import {styles} from './styles';
import {IEmployee} from '../employe-list';

interface Employee {
  employee: IEmployee;
}

function EmplyeItem({employee}: Employee) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitles}>
          <Image
            resizeMode="cover"
            style={styles.profileImage}
            source={{uri: employee && employee.image}}
          />
          <Text style={styles.headerTitlesText}>
            {employee && employee.name}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image style={styles.chevronIcon} source={blueChevronDownIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EmplyeItem;
