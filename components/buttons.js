import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../theme/styles';

const Buttons = ({categName}) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <View>
      <TouchableOpacity
        style={toggle ? styles.toggledButton : styles.notToggledButton}
        onPress={() => toggleFunction()}>
        <Text style={styles.buttonText}>{categName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
