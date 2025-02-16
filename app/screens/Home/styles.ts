import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../themes/globalTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,

    marginTop: 36,
    marginBottom: 15,
    color: colors.black_neural,
  },
  input: {
    fontSize: 18,
    color: colors.black_neural,
    backgroundColor: colors.gray[200],
    fontFamily: 'Helvetica',
    paddingVertical: 15,
    paddingStart: 15,
    borderRadius: 30,
  },
});
