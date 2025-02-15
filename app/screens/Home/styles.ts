import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../themes/globalTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,

    marginTop: 36,
    marginBottom: 15,
    color: colors.black_neural,
  },
});
