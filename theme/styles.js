import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  categories: {
    padding: 20,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  notToggledButton: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    height: 40,
    padding: 10,
    margin: 5
  },
  toggledButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 40,
    padding: 10,
    margin: 5
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'darkblue',
    fontWeight: 'bold'
  }
});