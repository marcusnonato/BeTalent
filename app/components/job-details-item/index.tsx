import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface IJobDetailsItem {
  firstTitle: string;
  secondTitle: string;
}

function JobDetailsItem({firstTitle, secondTitle}: IJobDetailsItem) {
  return (
    <View style={styles.jobDetails}>
      <Text style={styles.firstTitle}>{firstTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
}

export default JobDetailsItem;
