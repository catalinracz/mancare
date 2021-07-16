import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  categories: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  notToggledButton: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    height: 40,
    padding: 8,
    margin: 5
  },
  toggledButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 40,
    padding: 8,
    margin: 5
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'darkblue',
    fontWeight: 'bold'
  }
});