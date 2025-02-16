import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../themes/globalTheme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 13,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#EDEFFB',
  },
  headerTitles: {
    flexDirection: 'row',
    gap: 24,
  },
  headerTitlesText: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.black_neural,
  },
  circle: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
