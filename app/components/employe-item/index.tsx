import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {blueChevronDownIcon, blueChevronUpIcon} from '../../assets/images';
import {styles} from './styles';
import {IEmployee} from '../employe-list';
import JobDetailsItem from '../job-details-item';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {formatDate} from '../../utils/formatData';
import {formatCellphoneNumber} from '../../utils/formatCellphoneNumber';

interface Employee {
  employee: IEmployee;
  isSeleected?: boolean;
  onPress?: () => void;
}

function EmplyeItem({employee, isSeleected, onPress}: Employee) {
  const animationValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: animationValue.value,
  }));

  useEffect(() => {
    animationValue.value = withTiming(isSeleected ? 150 : 0, {
      duration: 700,
      easing: Easing.inOut(Easing.quad),
    });
  }, [animationValue, isSeleected]);

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
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <Image
            style={styles.chevronIcon}
            source={isSeleected ? blueChevronUpIcon : blueChevronDownIcon}
          />
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.adicionalDetails, animatedStyle]}>
        <JobDetailsItem firstTitle="Cargo" secondTitle={employee.job} />
        <JobDetailsItem
          firstTitle="Data de admissão"
          secondTitle={formatDate(employee.admission_date)}
        />
        <JobDetailsItem
          firstTitle="Telefone"
          secondTitle={formatCellphoneNumber(employee.phone)}
        />
      </Animated.View>
    </View>
  );
}

export default EmplyeItem;
