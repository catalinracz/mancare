import React from 'react';
import { View } from 'react-native';
import Buttons from './components/buttons';
import { styles } from './theme/styles';
import { buttons } from './theme/text';

const _buttonsArray = [
  {
    categName: buttons.romaneasca
  },
  {
    categName: buttons.italiana
  },
  {
    categName: buttons.europeana
  },
  {
    categName: buttons.asiatica
  },
  {
    categName: buttons.arabeasca
  },
  {
    categName: buttons.mexicana
  },
  {
    categName: buttons.americana
  },
  
]

const App = () => {
  return (
    <View style={styles.categories}>
    {_buttonsArray.map((x, index) => (
        <Buttons
          key={index}
          categName={x.categName}
        />
      ))}
    </View>
  )
}

export default App;