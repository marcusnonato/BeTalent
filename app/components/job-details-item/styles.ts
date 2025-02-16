import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../themes/globalTheme';

export const styles = StyleSheet.create({
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
    marginBottom: 15,
  },
  firstTitle: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.black_neural,
  },
  secondTitle: {
    fontSize: 16,
    fontFamily: fonts.normal,
    color: colors.black_neural,
  },
});
