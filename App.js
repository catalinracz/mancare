import React from 'react';
import {ScrollView, View} from 'react-native';
import {_buttonsArray} from './components/arrays';
import Buttons from './components/buttons';
import {styles} from './theme/styles';

const App = () => {
  return (
    <View style={styles.categories}>
      {_buttonsArray.map((x, index) => (
        <Buttons key={index} categName={x.categName} />
      ))}
    </View>
  );
};

export default App;
