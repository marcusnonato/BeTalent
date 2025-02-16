import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../themes/globalTheme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: colors.gray[300],
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerTitles: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: 34,
    height: 34,
    backgroundColor: colors.gray[300],
    borderRadius: 50,
  },
  headerTitlesText: {
    fontSize: 18,
    fontFamily: fonts.normal,
    color: colors.black_neural,
  },
  chevronIcon: {
    width: 32,
    height: 32,
  },
  adicionalDetails: {
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
});
