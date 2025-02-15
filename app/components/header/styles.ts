import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../themes/globalTheme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userIcon: {
    backgroundColor: colors.gray[200],
    padding: 13,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIconText: {
    color: 'black',
    fontSize: 18,
    fontFamily: fonts.bold,
  },
});
