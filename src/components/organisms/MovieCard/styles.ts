import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20,
    marginHorizontal: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginVertical: 10,
  },
  leftContainer: {
    flex: 2,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  bannerImage: {width: '100%', height: 200, borderRadius: 10},
  progressCircleContainer: {position: 'absolute', bottom: -20},
  rightContainer: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 10,
    marginVertical: 10,
  },
  innerContentContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  divider: {
    paddingHorizontal: 5,
    fontSize: 3,
    color: theme.colors.grey2,
    alignSelf: 'center',
  },
  languageTag: {paddingLeft: 5},
  description: {paddingTop: 5},
});
